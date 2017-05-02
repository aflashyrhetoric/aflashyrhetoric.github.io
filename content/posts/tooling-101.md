+++
date = "2017-04-10T21:36:04-04:00"
title = "Tooling 101: Introduction"
series = "tooling101"
+++

<small>
  *This is part 1 of an introductory series on web development tooling. If you're not a developer, this post will be ludicrously boring to you.*
</small>

---

### Series Introduction

While the barriers to web development are substantially lower than many other fields, there's still a bunch of junk that makes it frustrating for beginners to jump in.

By "obstacles," I don't mean the inherent difficulty in learning a new field, nor the complexity of advanced web development topics. I'm referring to the snags that slow progress without benefit.

For example, consider the act of *going for a jog*. Running. If you want to get better, you must train often and build endurance. Overcoming the exhaustion of training and the task of perfecting your running form is a **relevant obstacle**. 

But if you're running on a particularly windy day at the beach and sand keeps blowing in your eyes - that just sucks for no reason.

I'm writing this series to help eliminate the latter, because when I was starting out, most of the tutorials assumed that the reader had knowledge of things like:

- package managers (e.g: npm, bundler)
- version managers (e.g: nvm, rvm)
- build tools (e.g: gulp, webpack)
- configuration files (e.g: `package.json`, `nginx.conf`, `webpack.config.js`)
- and more.

At best, docs will include simple one-liner annotations, like so:


```
// Install dependencies
npm install
```

Or worse, they omit annotations completely: 

```
git clone git@github.com:someguy/someapp.git
cd someapp
npm install
npm start
```

When I was learning, I would do this over and over without an understanding of what was happening. I was uncomfortable letting tools "do the magic" for me while I was in the dark.

I hope this guide serves as a helpful primer for those who are like me. The first post is on [**Package Managers**](/posts/package-managers).

---

<small>By the way, this is in no way an attack on the maintainers of those tools. Managing documentation that is universally understood and meticulously updated is impossible. Creating and maintaining tutorials on top of that is a massive task as well. Nevertheless, the opaque or exclusive language in beginner-oriented resources is, to me, a "sand-in-your-eyes" type of problem, so this series aims to move some of the burden from the individual resources</small>