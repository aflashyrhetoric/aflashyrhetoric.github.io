+++
title = "Lantern"
project = "lantern"
+++

Checking Meh.com for the product of the day. Checking the availability of an Nvidia GTX 3080 at B&H Photo and a PS5 at Best Buy. Calculating compound interest over `y` years, with `m` monthly contributions assuming an `s` starting amount and `r` rate - among other factors. A relationship CRM to help me remember key dates and notes without having to labor over Google Calendar event creation.

Lantern is the result of having to repeat the same manual routines daily for weeks. It is my answer for preventing repetitive mundanities from successfully beating my zest for life into a shriveled submission. Lantern is - so far - built for me and me only. And that has led to some interesting compromises and UX. 

## Design

There is none. ayyyyyyyyyyyyyyyyyyyyyyyyyy.

I use the [Carbon Design System](https://www.carbondesignsystem.com/) for basic app UI scaffolding and table views.

## Priorities

Chiefly, there is now zero effort spent on making the UI accommodating of diverse audiences. I am the only audience and user, and that affords me the ability to hurl any sense of polish to the wind and focus solely on adding good ol' buttery _functionality_.

## Structure

Lantern is a NextJS application structured as a series of several smaller utilities:

### Echo
A web crawler designed as a low-tech way to regularly check for product availability. Intended to be loaded up on an old disused Android tablet with the screen set to "Always On", this utility will poll a back-end to crawl any number of retail websites, with pre-configured CSS Selectors to grab and do text comparisons. For example, if the `#product-availability` element ever has a `.textContent` of `Available`, the entire app will flash red/white to indicate that I need to go buy some junk ASAP. The selectors and text copy vary with each site, but it's a quick operation to glean those values with one visit to the site. I call it low-tech because of the absence of push notifications, but it has helped me to successfully snag a few things, so I call it a win.
 
### Appledore
A "personal CRM." Effectively a glorified rolodex/contacts app, with support for relationships between contacts, "How I met X", and so on. Built on top of a hand-rolled Go back-end, with Postgres, and deployed on the [DigitalOcean App Platform](https://m.do.co/c/4a5b40b2a2bc).

### Widgets
One-off utilities that don't warrant a page of their own:
- A compound interest calculator with inputs to let me tweak things as-needed, with a visualization of growth built using [Nivo](https://nivo.rocks/), an abstraction layer that complements D3.js and React.
- Random other junk