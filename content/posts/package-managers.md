+++
date = "2017-04-17T18:42:48-04:00"
title = "Tooling 101: Package Managers"
series = "tooling101"
draft = false
+++

<small>
  *This is part 1 of an introductory series on web development tooling.*
</small>

---

### Series Introduction

Zoom back to 2012. I'm in my dorm room trying to learn [Ruby on Rails](http://rubyonrails.org/). Everything is going smoothly! Rails seems magical - perhaps a bit too much. I try to add a feature or two, and my progress comes to a screeching halt. I am imprisoned in a jail of "gems". 

And thus, I was introduced to the world of Package Managers.

### 

Associated Language | Package Manager(s) | Configuration Filename|
--------------------|--------------------|-----------------------|
Javascript| [yarn](https://yarnpkg.com/en/), [npm](https://www.npmjs.com/)         | package.json
Ruby      | [Bundler](http://bundler.io/)           | Gemfile
PHP       | [Composer](https://getcomposer.org/)          | composer.json
Go        | [Glide](https://github.com/Masterminds/glide)             | glide.yaml
N/A       | [Bower](https://bower.io/)             | bower.json

#### So, what is a package manager?

Package managers make it easy for you to use other people's code in your own projects so you don't have to reinvent the wheel - or even the Porsche. Code that you "install" to your own project in this manner are referred to as "packages" or "dependencies." 

Package managers come in the form of command-line interfaces, so you will need a terminal such as [iTerm2](https://www.iterm2.com/).

#### 