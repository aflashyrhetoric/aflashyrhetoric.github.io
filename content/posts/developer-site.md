+++
date = "2017-04-27T18:04:36-04:00"
title = "building the nulab developer site"
draft = true
+++

My latest project at [Nulab](http://nulab-inc.com) was to migrate over the old website from Drupal. It had become somewhat clumsy to manage, and they wanted a new solution.

After initially considering WordPress, we ultimately landed on [Hugo](http://gohugo.io), a static site generator (SSG) written in Go. 

An SSG was perfect for our use-case.

### Consider the following:

- With any reference-type website, speed is a priority. SSGs excel here.
- Hugo (and many SSGs) use Markdown files. Markdown is the de-facto standard for publishing now, and it is easier to manage than data in a database.
- Hosting is generally cheaper.
- The data for the site would change pretty infrequently.

### Getting Started

This website would need to display the APIs for Nulab's 3 current products. So, 3 APIs = 3 datasets. Unfortunately, each dataset was stored differently. One was stored in a database. The other one was written in a proprietary markup format. Move to Step One.

### 1. Mining The Data




