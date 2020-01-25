+++
title = "Developer Workflow Tips"
date = "2020-01-24T12:28:17-05:00"
ogdescription = "SUPER CHARGED DEV WORKFLOW TIPS"
series = "tooling101"
+++

# Tips & Tricks for Developer Efficiency

This is a [WIP] tl;dr of legitimate tricks that I wish I knew years ago.

For context, I work with VS Code on Mac.

## macOS Tips
- Use BetterTouchTool. I have three trackpad gestures I use a million times a day:
  - 3-finger swipe up: Maximizes current window (not fullscreen)
  - 3-finger swipe left: Moves window to left half of screen
  - 3-finger swipe right: Moves window to right half of screen
- `CMD`+``` switches between windows of the same app. This is handy for switching between a Chrome window and Chrome DevTools rapidly.
- Go into System Preferences > Keyboard > Shortcuts Tab > App Shortcuts. There, you can bind your own keyboard shortcuts to Menu Items for apps.
  - For example, Chrome has a little-known "Pin Tab" feature that I bound to `CMD + Shift + P` and I use it several times a day.
  - Also, VSCode has quick window-pane options: Two Columns, Three Columns, etc. I bind the Two Columns to `CMD+OPT+2` and Three Columns to `CMD+OPT+3`, and so on.
- In Finder, you can toggle visibility of "invisible" files (e.g. `.env` files) visible with `CMD+SHIFT+.`. 
- In Finder, `CMD+OPT+L` goes to the downloads folder immediately.
- Saving screenshots in a designated folder: press `CMD+SHIFT+5` (anywhere, it's a system shortcut), and click Options -> Other Location. Create a new folder and point to it.

## iTerm

- Learn how to create `.bash_aliases`, in addition to being convenient and making you faster, they reduce human error!
- Use `CMD+D` and `CMD+SHIFT+D` to split panes. Too many of y'all don't use this, I don't know why.
- Dump of brew packages:

```sh
brew install tig # holy grail of git cli guis
brew install htop # interactive top
brew install bat # cat ++
brew install exa # ls ++
brew install hub # super-set of `git` with github features
brew install nvm # node version manager
brew install tldr # "man" cmd but tldr'd
brew install thefuck # type 'fuck', it'll guess what you meant to say in your last command
brew install youtube-dl 
brew install lolcat # rainbow-fies text
brew install cowsay # make the cow do the say 
```

## Editor Tricks

- I don't think everyone should use Vim necessarily, but I do think everyone should _try_ learning Vim keybindings :thumbsup:
- Theme & Editor: I use Night Owl by Sarah Drasner and Dank Mono.
- I rebound the chorded shortcut `CMD+K -> CMD+B` to toggle sidebar, as a throwback to my Sublime Text days. The key for it is `workbench.action.toggleSidebarVisibility`.