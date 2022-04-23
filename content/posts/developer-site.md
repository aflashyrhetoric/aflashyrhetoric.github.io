+++
date = "2017-04-27T18:04:36-04:00"
title = "string parsing & data extraction"
slug = "developer-site"
ogdescription = "Using NodeJS, fs, and regular expressions to parse long-form data for use in Hugo, a static site generator."
summary = "A recent project required converting a many-thousand-line document written in a proprietary syntax to Markdown. This is a peek at the messiness that ensued."
+++

### Summary 
My latest project at [Nulab](http://nulab-inc.com) was to migrate over the old [Developer Website](https://developer.nulab-inc.com) (containing API documentation, mostly) from Drupal to something new. The old site had become somewhat clumsy to manage, and we needed a new solution.

After initially considering WordPress, we ultimately landed on [Hugo](http://gohugo.io), a static site generator (SSG) written in Go. An SSG was perfect for our use-case. But migrating the data was non-trivial. But first things first...

### Why Migrate At All?
- **To Unify Data In One Place**: Nulab offers 3 apps. Each app possesses an API. But the data (literally, the text data that described the API) was being stored in 3 separate ways. One app used Google sheets, while another stored information in a traditional database, and a third app used a long-form wiki text post. Each app had their own processes for exporting to Drupal. 
- **To Reduce Overhead**: While these processes worked, they involved overhead - both technical and mental. Since Nulab is undergoing a company-wide "refresh," it was a good time to revamp the Developer Site to match our new branding.

### "Why not WordPress?"
- **Speed.** SSGs, which deliver static files rather than dynamically-generated pages, excel here.
- **Cost.** Hosting static files is cheap.
- **Stable**. There's no CMS. There's no plugins. There's nothing to manage, except for maybe the local version of `hugo` itself.
- **Perfect use case! :star:** Being a reference website, the data for the site would change pretty infrequently.

### Why not Jekyll or abcxyz?
- **Speed**, again. Hugo is fast.
- **Great documentation**
- **Great multilingual support**
- **Ease of adoption**: Our engineers are more familiar with Go/Go Templates than with Ruby/Liquid.
- **Large community**: In general, this means faster release cycles, less bugs, etc.

We looked at Jekyll and Hexo but Hugo won out.

### Getting Started
So, again, this site would need to display the API documentation for Nulab's 3 current products. So, 3 APIs = 3 datasets. Unfortunately, each dataset was stored differently. The data for one app, [Backlog](https://backlogtool.com), was written in a proprietary markup format that had to be converted to a form that Hugo understood. Namely: Markdown. 

### 1. Processing/Parsing The Data

We needed to extract the data from Backlog before anything else. The data was stored as a huge text file (essentially). Backlog's wiki syntax is very similar to Markdown. This means that basic conversions to Markdown should be easy to do using Javascript's native `replace` method with regular expressions.

Backlog Wiki Syntax | Markdown
--------------------|---------
`{code} some code {/code}` | \`some code\`
'italic text' | \*italic text\*
''italic text'' | \*\*bold text\*\*
`[Google](https://google.com)`| `[[Google:https://google.com]]`

First things, I had to import some libraries to help me.

```javascript
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const readline = require('readline');
```

`fs` to manage files. `path` for managing file paths easily. `chalk` allows for colorized messages in the terminal which can improve readability and aid in debugging. `readline` allows us to a read a file line-by-line.

Now, for those regular expression `replace`ments:

```javascript
let result = data.replace(/\*/g, '#');

// Convert {code} to ``
result = result.replace(/({code})/g, '```');
result = result.replace(/({\/code})/g, '```\n');

// Convert [[a:b]] to [a](b)
result = result.replace(/(\[\[)([^\:]+)\:(([^\s]+))(\]\])/g, '[$2]($3)');
result = result.replace(/(&br;)/g, "<br>");
```

A few more of these later, I was essentially done. Backlog syntax was successfully converting to Markdown.

The next step was decisively harder, but to understand why it was necessary, we first have to review the concept of **Front Matter**.

### 2. Reviewing Front-Matter
Front-Matter is a way to include metadata in a Markdown file by having a little bit of `yaml`, `json`, or `toml` at the top of the file.

Here's an example in `TOML`, which is Hugo's default:
```TOML
title = "Hello World"
author = "Kevin Oh"
```

and the same in `JSON`:

```json
{
 "title" : "Hello World!",
 "author" : "Kevin Oh"
}
```

If we were going to use Hugo for our site, it meant we needed to convert all of our content to Markdown files, and populate each file with metadata relevant to that particular section. For example, let's say we want to create an API reference page for `someFancyAPIAction`. We would need to create a Markdown file with some title, `some-fancy-api-action.md`, with content like so:

```toml
+++
title = "Some Fancy API Action"
app = "AwesomeApp"
+++

# Some Fancy API Action

This is where I could discuss the API action/method/endpoint/whatever.
```

Okay, so front-matter is a way of easily adding metadata to a file.

Let's recap on what needs to be done.

### 3. Quick Recap

We're faced with the following tasks:

1. Split the huge file containing the entire API documentation into smaller Markdown files.
2. Add front-matter to each of those files that track things like API title, filename, and whether or not the page is for an API item or for a general information page.
3. Support both English + Japanese translations.

#### A. Split the files

The `fs` and `readline` modules were a godsend here. But before diving into actual code, I printed out 3 pages of the API documentation to learn its structure and to note any irregular patterns.

I cautiously made an initial assessment: we would need to parse the entire file line-by-line, gradually "building up each page" and then "snipping off" each piece from the larger file by saving it (with the `fs` module).

But then came the wrench in the cogs - these files couldn't just naively be "snipped" and saved in a folder. Information had to be extracted from the text *as it was being parsed* so that the front-matter could be appended to the top of the page. We weren't just dividing up the text file, we were **adding to it** and *then* saving them.

The task was now to: **parse the huge file line-by-line, extract all relevant data, reassemble the file with front-matter prepended to the top, and then save it in the correct directory.** Quite a different task.

We needed some sort of parser, so I wrote an elementary one. It felt hacked together: a script flush with conditional statements, pointer/tracking variables, etc., but it worked. The algorithm went something like:

1. Visit each line of code and store it as a string for reference.
2. Create a variable pointer to track the next line of code.
3. If the next line begins with `#`, then:
  - assemble the front matter from the tracking variables,
  - instantiate a ES6 block template string and prepend the front matters to it, then the content
  - save it, clear all necessary tracking variables, and repeat.

We needed to build a semantic understanding of the text. I could easily and neatly track this data by creating a JS object to represent each page, which could then be referenced to build the front-matter.

Two days of work later, it works. I create a script that, when run, takes an input file, an output format (Markdown or JSON), and spits out the data in the new form.

The `title` was extracted from lines with `<h1>`s. The `filename` front-matter variable was created by lower-casing the `title`, replacing whitespace with dashes, and removing apostrophes. So, `I'm A Blue Cat` became `im-a-blue-cat.md`. API pages contained a section called "Method", so depending on whether or not a recorded section contained `Method`, I set a boolean `isAPI` variable.

#### Let's save it all.
Finally, once more using the `fs` module, I saved each file in the correct place.

Some pages were top-level pages, others were nested. URL remapping was done with a simple configuration JSON object, which was stored locally and pulled in using `require`. Something like this:

```json
// config.js
{
  "topLevelPages": [
    "home",
    "getting-started",
    "contact"
  ],
  "urlMap": {
    "error-response": "/docs/backlog/error-response",
    "version-history": "/docs/backlog/changes",
    "oauth-20" : "/docs/backlog/api/2/oauth2"
  }
}
```

```javascript
// mainscript.js
let config = require('./config');
if(config.topLevelPages.contains(somePageID)) {
  // url remapping logic
}
```

Watching the script run was beautiful. 

`node conversion-script.js md link-to-the-big-data-file desired-output.md` spat out a Markdown file. 
`node conversion-script.js json link-to-the-big-data-file desired-output.json` spat out a JSON file. 
`node conversion-script.js hugo link-to-the-big-data-file` first converted the data to markdown, then built an in-memory JSON object, and then used that object to generate front matter with ES6 template strings, and then save each object as a file.

#### Japanese Translations, Tho :scream:

Hugo is smart enough to change translations based on the file extensions. So, `cats.md` is the English version of a text, while `cats.ja.md` would be the Japanese translation.

There was another huge file for the Japanese version of the API documentation. The english version of the script had certain keywords - markers of sorts that when detected, would indicate that a new section had started or ended. My naive approach was to simply swap out the English "keywords" for the Japanese keywords. However, I immediately noticed this wouldn't work because **the URLs had to remain in English**.

### Things Get Messy

I was able to safely make certain assumptions that made this task infinitely easier. Most notably, I was able to assume that the *ordering* of the dataset was the same in both the English and Japanese versions.

This allowed me to take an expediential, gimme-dat-tech-debt approach, since we were already crunched for time on this project. I duplicated the script I had made to parse the English version and stripped it down to the barebones parsing logic. I then extracted all the `#` and `##` lines (to extract all headings and subheadings). I saved them in two separate files:

`headings.json` and `subheadings.json`.

I then created a third duplicate version of my script to process the Japanese and `require`d the two JSON files above. 

However, instead of extracting headings from the text like the English version, the Japanese version of the script would "pop" a new value off of the `headings-array` and `subheadings-array` whenever it detected that the next heading/subheading should be saved. The headings would be reformatted (as mentioned earlier) to become `filenames`, which were then tweaked: `cat.md` became `cat.ja.md`.

It worked like a charm! :tada:

The Japanese files populated beautifully with English filenames (which were also used to map their URL paths).

### Clean Up

About 90% of the files converted with no flaws, but there were inevitably some hiccups. I went through manually and fixed many of the errors that had simply gone under the radar. It was irritating but the time spent on automating all of the rest of the data extraction was well worth it, considering there was over 130 API items.

Plus - we now have a CLI tool to convert from our proprietary syntax to Markdown and JSON - sweet.

### Conclusion

The finished site is available [here](https://developer.nulab-inc.com). 