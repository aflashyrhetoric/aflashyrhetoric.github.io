+++
date = "2017-05-12T17:52:59-04:00"
title = "full-stack unicorns"
ogdescription = "What is a full-stack developer, really?"
slug = "full-stack"
draft = true
+++
 
The term "full-stack" is a tech buzzword lately. It refers to someone who "*can do the entire stack*," meaning both the front-end and the back-end.

Until about a year ago, I thought I was full-stack. I had a top-down understanding of the entire stack, after all. I knew about Travis CI, ORMs, VPSes and how to configure them (maybe with just a *bit* of help from a DigitalOcean tutorial), about the concepts of load balancing and availability/consistency. But I also knew about the DOM and its virtual cousin, about prototypal inheritance, about the differences between `gulp` and `grunt` (and now `webpack`), and about asset optimization via minification and uglifying. 

I knew I didn't know everything, but I thought I knew a lot. By that point, I had built a specialized CMS in Rails (which is being used by a real client to this day), I built a CRUD API in Laravel, I built a simple, but non-trivial front-end in ReactJS. They were "built" with Grunt, Gulp, and Webpack, respectively. They used Sass, the Eloquent ORM, Liquid and ERB templating languages. I understood Inversion of Control & Dependency Injection, CSRF protection, JSON Web Token based authentication 

> blah blah blah, blah blah blah. 

Point being - I thought I knew a lot. Some time later, I was employed at Nulab at a Front-End Engineer. In all my arrogance as a younger dev, I thought my "full-stack" talents would be under-utilized in the given role.

### HAHA NOPE :poop:

In the first week, I accidentally deleted my coworker's entire branch of code (Sorry David), created a ton of unnecessary and redundant Sass mixins, struggled to understand the existing `gulpfile.js`, and found myself two steps behind at every turn.

I already gave you a list of the things I knew. 

#### Here's a list of things I hadn't known yet:

- CSS Naming Conventions / Methodologies, like OOCSS, SMACSS, BEM, BEV-M
- When to use Sass `@extends` vs a `@mixin`
- The !@#$% entirety of WordPress, with all of its quirks:
  - The Template Hierarchy
  - How the `functions.php` file worked
  - The concept of `actions` and `hooks`
- Git branching workflows (the idea of "feature branches")
- Working with different environments (staging/production/dev)
- Resolving merge conflicts easily
- Project management tool workflows
- How to use `tig` to intelligently navigate Git
- How to use `git stash` to work on different feature branches

#### And here's a list of technologies I'd never/barely even heard of:
- Go (Golang) 
- Gin
- Mayaa
- Tomcat
- Jenkins
- MixPanel
- Google Tag Manager 
- VWO Analytics
- `webpack-dev-server`
- `concurrency`, another Webpack plugin that lets you run two processes in parallel
- Haxe
- Basically the entirety of AWS, other than EC2 & S3: RDS, Glacier
- Docker (I just knew it as a contender of some sort to Vagrant)
- Kubernetes

#### Here's a list of soft skills I didn't have yet:
- how to "marathon focus"
- how to create accurate time estimates for tasks (still working on this)
- how to "think in branches" with `git` and keep track of what code exists where

### A Real Full-Stack Developer

> "'Full-stack' is such a buzzword lately. But Ryu is, I think, the first real full-stack developer I've met." - A coworker

Ryu works at Nulab. His official title is "Server Engineer." A core developer on Nulab's product, [Backlog](https://backlogtool.com), Ryu has had extensive experience (15+ years) in building up and maintaining a product. His favorite language is Perl, though he has worked with Java, Haxe, Ruby, Go, PHP, and HTML/CSS/JS in non-trivial applications.

He oversees servers and monitors server health and updates, creates and manages many DevOps-related automation scripts, manages staging/production environments for multiple sites and applications, configures back-end analytics on various services, 