+++
date = "2017-05-12T17:52:59-04:00"
title = "full-stack unicorns"
ogdescription = "What is a full-stack developer, really?"
slug = "full-stack"
draft = true
+++
 
The term "full-stack" has been a tech buzzword for some time. It refers to someone who "*has familiarity with the entire stack*," meaning both the front-end and the back-end.

Until about a year ago, I considered myself as being part of this revered demographic. I had a top-down understanding of the entire stack, after all. I knew about Apache and nginx, about databases and the SQL/ORMs that "powered" them. I had some experience with VPSes and configuring them. I knew about load balancing and availability/consistency and slave/master fallback protocols. But I also knew about the DOM and its virtual cousin, about prototypal inheritance, about the differences between `gulp` and `grunt` (and now `webpack`), event delegation/bubbling, and about asset optimization via minification and uglifying. 

I knew I didn't know everything, but I thought I knew a lot. 

By that point, I had built:

- a specialized CMS in Rails (which is being used by a client to this day)
- a CRUD API in Laravel
- a simple but non-trivial front-end in ReactJS. 

They were "built" with Grunt, Gulp, and Webpack, respectively. They used Sass, the Eloquent ORM, Liquid and ERB templating languages. I understood Inversion of Control / Dependency Injection, CSRF protection, JSON Web Token based authentication...

> blah blah blah, blah blah blah. 

Point being - I thought I really knew a lot. (Don't worry - I know better now.) Some time later, I was employed at Nulab at a Front-End Engineer - my current position. In all my arrogance as a younger dev, I actually thought my "full-stack" talents would be under-utilized in the given role.

### HAHA NOPE :poop:

In the first week, I accidentally deleted my coworker's entire branch of code (Sorry David), created a ton of unnecessary and redundant Sass mixins, struggled to understand the existing `gulpfile.js`, and found myself two steps behind at every turn.

I already gave you a list of some of the things I knew. 

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
- Nope, don't use `!important` even once

And this is mostly just the front-end.

#### Here's a list of technologies I'd never/barely heard of:
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
- VelocityJS
- (...)

#### Finally, a list of soft skills I didn't really have yet:
- how to code without burning out every day
- how to create accurate time estimates for even small tasks (still working on this)
- how to "think in branches" with `git` and keep track of what code exists where

### A Real Full-Stack Developer

> "'Full-stack' is such a buzzword lately. But Ryu is, I think, the first real full-stack developer I've met." - A coworker

Ryu is a **Server Engineer** at Nulab. A core developer on Nulab's project management application [Backlog](https://backlogtool.com) and now focusing his efforts on [Cacoo](https://cacoo.com), Ryu has had extensive experience in building up and maintaining a product. His favorite language is Perl, though he has worked with Java, Haxe, Ruby, Go, PHP, and HTML/CSS/JS in non-trivial applications.

He oversees servers and monitors server health and updates, creates and manages many DevOps-related automation scripts for deployment and alert notifications, manages staging/production environments for multiple sites and applications, configures back-end analytics on various services, plans product feature launch schedules and coordinates things on a macro-level. And yet, he is also aware of cross-browser considerations, webpack plugins, responsive design best practices, multilingual support best practices, and CSS naming conventions. He regularly reviews Pull Requests for both front-end and back-end code.

#### Redefining "full-stack"

This is purely a semantic discussion, but when such a vague term is used as a descriptor for a job opening, semantics matter. 