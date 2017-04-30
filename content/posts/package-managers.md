+++
date = "2017-04-17T18:42:48-04:00"
title = "Tooling 101: Package Managers"
series = "tooling101"
draft = true
+++

<small>
  *This is part 1 of an introductory series on web development tooling.*
</small>

---

### Series Introduction

Zoom back to 2012. I'm in my dorm room trying to learn [Ruby on Rails](http://rubyonrails.org/). Everything is going smoothly! Rails seems magical - perhaps a bit too much. I try to add a feature or two, and my progress comes to a screeching halt. I'm chasing down errors in the terminal with no conception of what's going on. 

> What the hell is a "gem"?!?!?

And thus, I was introduced to the world of Package Managers. 

Let's review some of the more popular ones.

Associated Language | Package Manager(s) | Configuration Filename|
--------------------|--------------------|-----------------------|
Javascript| [yarn](https://yarnpkg.com/en/), [npm](https://www.npmjs.com/)         | package.json
Ruby      | [Bundler](http://bundler.io/)           | Gemfile
PHP       | [Composer](https://getcomposer.org/)          | composer.json
Go        | [Glide](https://github.com/Masterminds/glide), ["go get"](https://golang.org/cmd/go/#hdr-Download_and_install_packages_and_dependencies)            | glide.yaml
N/A       | [Bower](https://bower.io/)             | bower.json

#### So, what is a package manager?

Package managers make it easy for you to use other people's code in your own projects to add functionality. Code that you add (or "install") to your own project in this manner are referred to as "packages" or "dependencies." 

Package managers come in the form of command-line interfaces, so you will need a terminal such as [iTerm2](https://www.iterm2.com/) or [cmder](http://cmder.net/) to use them.

#### How do they work?

Each package manager has its own instructions on installing the tool, so I won't go into that here. But once installed, they tend to function very similarly.

#### First, they're all terminal-based utilities. 
Typically, the name of the package manager is the name of the command. For example, to do something with the Yarn package manager, you will type `yarn` into the terminal, followed by some secondary command. (More on that later.)

#### Next, they all use a configuration file. 
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

