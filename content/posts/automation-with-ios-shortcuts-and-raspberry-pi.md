+++
title = "Automation with iOS Shortcuts, Raspberry Pi, NextJS, and Puppeteer"
date = "2021-06-25T17:00:21-05:00"
ogdescription = "Automation with iOS Shortcuts, Raspberry Pi, NextJS, and Puppeteer"
slug = "ios-shortcuts-automation"
+++

# Yo, iOS Shortcuts is pretty cool

I never really got into Automator, the long-lived macOS scripting utility. I assumed Shortcuts would be similar to Automator - lots of theoretical potential, but nothing that yielded a net value in that equation of **Time Spent Automating** vs **Time Saved From The Automation**. Not for my use-cases anyway.

But Shortcuts has a unique benefit over Automator. **You can trigger scripts with `Hey Siri`!** Easily, I mean. I'm sure there was a way to wire it up with Automator, but with Shortcuts, `Hey Siri` is included by default. Being able to trigger scripts from any Apple device - in particular, an Apple Watch - is uniquely empowering. I decided to look into automating some stuff.

## **Today's Goal**

Today's Goal: Automate away the need to fill out daily COVID health screening quizzes. I filled out the quiz with an eye on the Chrome Network tab. Initially, I just wanted to copy the POST request that gets sent on the form submission. 

The flow would be simple:

1. "Hey Siri, Check In"
2. Shortcuts runs the `Check In` script, in which...
3. A pre-configured POST request gets sent, thus completing the required survey for the day.

## Nope

Unfortunately, the "success" screen that's shown when completing the survey is a visual queue to school staff - silently completing the survey with the correct responses wasn't enough. That meant we needed a more formal scraping operation, one that could render/capture images.


## NextJS + Puppeteer

I've been on a NextJS kick, and I'm a sucker for easy deploys with Vercel, so I spun up a NextJS app using their CLI. If you create a `/api` directory inside the `pages/` directory that NextJS scaffolds for you, you can create a series of endpoints that will operate like serverless functions on build. So, `pages/api/hello.js` becomes an endpoint at `whatever.com/api/hello`.

## Putting it all together

I walked through the quiz once, and kept any eye out for any key values sent in the requests: cookies, JWT tokens, etc.

As it happens, a cookie value was all that was needed; I saved it in an `.env` file.

I created a simple endpoint that listens for GET requests at `/api/checkin`. When hit, the script will spin up [Puppeteer](https://github.com/puppeteer/puppeteer) with [AWS Chrome Lambda](https://www.npmjs.com/package/chrome-aws-lambda), a pared-down version of Chromium that's optimized for headless operation.

The script instantiates a browser object, which in turn lets us instantiate a page, which we can configure to simulate the device parameters for an iPhone X (user-agent, device dimensions, etc). The iPhone X was chosen, since the final screenshot that is shown to staff would be shown on a mobile device. 

The script then actually visits the health screening page, sending along the authentication cookie that we pull from the `.env` file.

A simple array of CSS selectors allows the script to progressively find and `page.click()` the options for each question correctly: "No, I do not have any symptoms", etc. The page has some fade-in animations, so we use `page.waitFor(selector, {visible: true})` to ensure that the item is within the viewport before attempting a click. The `visible` attribute is relative to visibility _within the viewport_, not on the page, so adding a few `page.scrollY()` calls lets us scroll down as we fill out the survey. Simple and effective.

Upon hitting `submit`, we add a simple delay, then do two things:
- Look for an `h1.success` and grab its `textContent` as a way to add some semantics to our success message, and...
- Take a `page.screenshot()`, and encode the image as a base64-encoded string, which gets sent back as a response.

## The Shortcut itself:

1. Find `All Photos` where `Album` is `VERIFICATION`
2. Delete `Photos`
3. Get contents of `http://192.168.[YOUR_STATIC_IP]/api/checkin`
4. Get dictionary from `Contents of URL`
5. Get dictionary from `data` (the previous step)
6. Get `Value` for `confirmation` in `Dictionary` (the value of the `h1.success`'s  `textContent`)
7. Set variable `Confirmation` to `Dictionary Value`
8. Decode `Dictionary Value` (from step 4) with base64
9. Save `Base64 Encoded` to `VERIFICATION` (the photo album name)
10. If `Dictionary Value` has any value
    1.  Show Notification from `Confirmation` (from Step 7)
    2.  Otherwise: `Show Notification: "Something went wrong."`
11. Find `All Photos` where `Album` is `VERIFICATION`
    1.  Limit
        1.  Get 1 Photo
12. Show `Photos` (from Step 11)

## Subpar UX :shrug:

While all of this is happening, the user is simply shown a spinning pinwheel - not the best, but also not too bad considering the time saved. On successful operation, the iOS Shortcut script fires a notification containing the `textContent` we grabbed earlier. 

Shortcuts also, surprisingly, has an "action" for decoding base64-encoded strings - by piping the encoded screenshot image we grabbed earlier into this action, and then "creating a new image" from the resulting decoded string, we can construct an actual image and save it to the user's phone.

To eliminate the need to constantly clear out these verification images, we can create dedicated album for these images, (e.g. `VERIFICATION`), and then delete all photos from that album at the very start of each script. 

## Deployment

Deployment on Vercel didn't pan out as effortlessly as I'd hoped - Vercel understandably has [timeouts](https://vercel.com/docs/concepts/limits/overview#general-limits) for the serverless functions. Running the script ten times, the average time for the script to complete was right around this limit, causing intermittent failures.

## Raspberry Pi (and compromises) to the Rescue

This script would always just be run from home, meaning this endpoint didn't _need_ to be publicly deployed. Simply building the NextJS app and running the production build on a port on a Raspberry Pi, then reconfiguring the shortcut script to hit the local IP, worked fine.

## Optimization

Any additional overhead introduced by NextJS can probably be side-stepped by porting to a simple Express server, but I suspect it wouldn't amount to that much. Although we didn't benefit from it much, the NextJS architecture may prove to be useful in other ways, so porting away from it seems a hair immature as well. Eventually, manually deploying NextJS to some cheap DigitalOcean droplet would probably be ideal, allowing us to run the script from anywhere, reconfigure timeout durations, and giving us an infrastructure that could house other additional endpoints.

## Learnings

This combination of iOS Shortcuts with our own arbitrary back-end is formidable, but in a way that feels fun and scrappy. Shortcuts offers us a way to vocally issue POST requests (which can be customized on a per-invocation basis) to arbitrary endpoints and process responses. 

This opens a ton of doors:
- scraping Meh.com for the deal of the day
- automating a daily entry into those social media giveaways that require checking in
- save data in our own database
- run reports on those data sets
- i'm just naming examples of everything a back-end can do so I'll stop here 

## Try it out :sunglasses:
---