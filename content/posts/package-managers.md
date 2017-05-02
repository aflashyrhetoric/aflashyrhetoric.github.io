+++
date = "2017-04-17T18:42:48-04:00"
title = "Tooling 101: Package Managers"
series = "tooling101"
+++

<small>
  *This is part 1 of an introductory series on web development tooling. If you're not a developer, this post will be ludicrously boring to you.*
</small>

---

Zoom back to 2012. I'm in my dorm room trying to learn [Ruby on Rails](http://rubyonrails.org/). Everything is going smoothly! Rails seems magical - perhaps a bit too much. I try to add a feature or two, and my progress comes to a screeching halt. I'm chasing down errors in the terminal with no conception of what's going on. 

> What the hell is a "gem"?!?!?

And thus, I was introduced to the world of Package Managers. 

Let's review some of the more popular ones.

Package Manager(s) | Associated Language | Configuration Filename|
-------------------|---------------------|-----------------------|
[yarn](https://yarnpkg.com/en/), [npm](https://www.npmjs.com/)          | Javascript | package.json
[Bundler](http://bundler.io/)            | Ruby      |  Gemfile
[Composer](https://getcomposer.org/)           | PHP        | composer.json
[Glide](https://github.com/Masterminds/glide), ["go get"](https://golang.org/cmd/go/#hdr-Download_and_install_packages_and_dependencies)             | Go        |  glide.yaml
[Bower](https://bower.io/)              | Javascript (kinda?)       |  bower.json

### So, what is a package manager?

Package managers make it easy for you to use other people's code in your own projects to add functionality. Code that you add (or "install") to your own project in this manner are referred to as "packages" or "dependencies." 

Package managers come in the form of command-line interfaces, so you will need a terminal such as [iTerm2](https://www.iterm2.com/) or [cmder](http://cmder.net/) to use them.

### How do they work?

Each package manager has its own instructions on installing the tool, so I won't go into that here. But once installed, they tend to function very similarly.

### First, they're all terminal-based utilities. 
Typically, the name of the package manager is the name of the command. For example, to do something with the Yarn package manager, you will type `yarn` into the terminal, followed by some secondary command. (More on that later.)

### Next, they all use a configuration file. 
This is a file that contains information about your project's dependencies. Different package managers use different formats for this file, although `.json` (short for "Javascript Object Notation") is one of the most common. 

You can create and edit this file just like you would with any ordinary file, but some package managers have ways to generate it easily. NPM, for example has `npm init`, which will handily give you a line-by-line prompt to create `package.json` - the configuration file for `npm`.

Each package manager will also have ways to easily add (and sometimes remove) dependencies without having to manually edit the configuration file. For example, to add `foobar` as an NPM dependency and install it, you type:

```
npm install -S foobar
``` 

It's similar for composer:

```
composer require foobar
```

### Don't check them into version control

Once the dependencies are downloaded, you'll have one folder in your project that is significantly later than others. Be sure to add the name of that folder to your `.gitignore` file. NPM has `node_modules/`, others may have "vendor/".

---

### Some NPM-Specific Tips

Since NPM is seemingly one of the most popular package managers, here's a grab bag of tips. (This section will be continually revised/edited. If you have any tips, let me know by [tweeting at me](https://twitter.com/aflashyrhetoric))!

#### 1. `require`ing an npm package? Omit all pathing junk. 

```javascript
// YES, this will work
require("package-name-here");

// NO. This may work, but it's brittle.
require("../../../node_modules/package-name-here.js");
```
#### 2. The meaning of `~` and `^` characters in the version numbers.

You may see something like this in `package.json` files:

```javascript
// You'll find one of these
"some-package-name": "^6.3.0"
"some-package-name": "~6.3.0"
```

The use of the ~ and ^ characters are a (confusing) short-hand wildcard syntax for specifying versions of packages. Look at the chart below for a key.

Symbol|Dependency|Versions
------|----------|--------
no symbol | 6.3.0|6.3.0
caret(^)|^6.3.0|6.*.*
tilde(~)|~6.3.0|6.3.*