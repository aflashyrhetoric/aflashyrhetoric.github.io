+++
slug = "build-tools"
date = "2017-05-24T18:35:19-04:00"
title = "Tooling 101: Build Tools"
series = "tooling101"
ogdescription = "Grunt, Gulp, Webpack"
summary = "An overview of front-end build tools."
draft = true
+++

# Build Tools: A Hasty Overview

Front-end build tools allow us to transpile, bundle, and optimize assets in various ways.

Now, technically, `webpack` is a module bundler and doesn't quite fit in with Gulp and Grunt, which are "task runners," but since there is great overlap in the functionality offered by each tool, I'll just refer to them all collectively as "build tools."

Grunt came first - let's start with that.

#### Grunt

Grunt is a task runner. Like all build tools, it uses a modular, plugin-type system.

Its execution can be configured using a `Gruntfile.js`. This file uses a declarative style of configuration to *describe* the changes. In other words, the Gruntfile doesn't get "run" or "executed". Once you run the `grunt` command, the Grunt process will look for the Gruntfile and subsequently parse it to extract the configuration. Using this config, it will perform a variety of tasks, like transpiling SCSS to CSS, uglifying Javascript, copying image assets to a designated output folder, and so on.

#### Gulp

Gulp is also a task runner. It also uses a modular, plugin system.

It uses a file called `gulpfile.js`. However, this particular file is essentially a script that *can* be run. This means that your build tool's configuration can now be given sequential instructions instead of just a grab bag of values.

Similar to Grunt, you can transpile and uglify code, copy assets, and more. However, because this is a program that gets "run", you can use standard Javascript methods to *code* your configuration instead of *describing* its execution. Queue excitement over being able to use ES6 in config files.

This lets you control more intuitively the order in which tasks get executed: you can minify first, or copy first, or whatever. (Gulp's syntax enables you to chain methods.)

#### Webpack

Webpack is a *module bundler*. 

Let's break this down. In Webpack's eyes, all sites and applications can be described in a modular fashion: as discrete chunks of functionality that cooperate to achieve the final result. Each module is seen as having its own set of "dependencies" - things that it needs to run as expected. This can be a traditional code dependency (ie: `import someModule from 'some-npm-package';`), but Webpack abstracts it further: *anything* that a module needs to run is seen as a "dependency." That could mean an SVG image, an image, an MP3 file, an SVG, or more. After all - sites aren't just *code*. They are a mishmosh of varied things.

Webpack's game is optimization, and it gives you several tools to that end, but it can be mindbending. Why, for example, should your homepage's code contain CSS for the `about/` page? The user doesn't need the `about/` page code, images, and fonts yet, so why send it to them?

The `Homepage`, then can be seen as a "module" with a set of dependencies, while the `About` page can be its own separate module. So on and so forth. In fact, Webpack gives you the tools to take it a step further with lazy loading. In the same way that the User doesn't need the About page code on the Homepage, so too does the User **not** need the footer code at the top of a page. So then, the homepage could be 2 modules rather than one: firstly, the code for all "components" above-the-fold, and a second module for components below-the-fold. Initially, the first module is loaded only. If the user begins to scroll and it seems like they intend to see the rest of the page, *then* the second module can be loaded.

Webpack uses a `webpack.config.js` file and also uses a declarative syntax to allow you to describe these dependency relationships using standard `.json` syntax. When `webpack` is run, it will parse the `webpack.config.js` file, examine the relationships, calculate each module's dependencies, and output them however it needs to.