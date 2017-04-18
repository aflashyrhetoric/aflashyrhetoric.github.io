+++
title = "Tooling 101: Introduction"
series = "tooling101"
+++

<small>
  *This is part 1 of an introductory series on web development tooling.*
</small>

---

### Series Introduction

While the barriers to web development are substantially lower than many other fields, there's still a bunch of junk that makes it frustrating for beginners to jump in.

By "obstacles," I don't mean the inherent difficulty in learning a new field, nor the complexity of advanced web development topics. I'm referring to the snags that slow progress without benefit.

For example, consider the act of running. If you want to get better, you must train often and build endurance. Overcoming the exhaustion of training and the task of perfecting your form is a **relevant obstacle**. 

But if you're running on a particularly windy day at the beach and sand keeps blowing in your eyes - that's just some bulllshiiiiiiiiiiiiit.

I'm writing this series to help eliminate the latter, because when I was starting out, most of the tutorials assumed that the reader had knowledge of things like:

- package managers (e.g: npm, bundler)
- version managers (e.g: nvm, rvm)
- build tools (e.g: gulp, webpack)
- configuration files (e.g: `package.json`, `nginx.conf`, `webpack.config.js`)
- and more.

When creating documentation, there's always a tricky decision to be made: If you create some app that depends on all of the aforementioned tools, should your "Getting Started" tutorial explain those tools or not?

Typically, they don't, instead opting for either minimally-descripive "copy-and-paste" code chunks.

```
git clone git@github.com:someguy/someapp.git
cd someapp
npm install
npm start
```

As beginners do this over and over, 

<small>By the way, this is in no way an attack on the maintainers of those tools. Managing documentation that is universally understood and meticulously updated is impossible. Creating and maintaining tutorials on top of that is a massive task as well. Nevertheless, the opaque or exclusive language in beginner-oriented resources is, to me, a "sand-in-your-eyes" type of problem, so this series aims to move some of the burden from the individual resources</small>