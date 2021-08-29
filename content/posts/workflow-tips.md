+++
title = "Developer Workflow Tips"
date = "2020-01-24T12:28:17-05:00"
ogdescription = "SUPER CHARGED DEV WORKFLOW TIPS"
series = "tooling101"
+++

# Tips & Tricks for Developer Efficiency (Indefinitely a WIP)

This is a tl;dr of legitimate tricks that I wish I knew years ago.

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

- If you ever encounter complicated merge conflicts, it can be difficult to visually spot all the `CONFLICT` files in the terminal output. iTerm has a "Triggers" feature that will let you create a regular expression that, when matched against some text, can fire off an event. Navigate to Profiles > Advanced > Triggers > `+`. For the regular expression, simply write, `CONFLICT`, and select the `Highlight Text` trigger. Boom - whenever your next merge conflict hits, you'll see blips of red (or whatever color you selected) to mark each offending file. Happy resolving :thumbsup:
- Learn how to create `.bash_aliases`, in addition to being convenient and making you faster, they reduce human error!
- Use `CMD+D` and `CMD+SHIFT+D` to split panes. Too many of y'all don't use this, I don't know why.
- Dump of brew packages:

```sh
 # holy grail of git cli guis
brew install tig
 # interactive top
brew install htop
 # cat ++
brew install bat
 # ls ++
brew install exa
# super-set of `git` with github features
brew install hub 
 # node version manager
brew install nvm
 # "man" cmd but tldr'd
brew install tldr
 # auto-corrects your last command
brew install thefuck
# dl youtube videos
brew install youtube-dl 
 # rainbow-fies text
brew install lolcat
 # make the cow do the say 
brew install cowsay
```

## Editor Tricks

- I don't think everyone should use Vim necessarily, but I do think everyone should _try_ learning Vim keybindings :thumbsup:
- Theme & Editor: I use Bluloco Dark Italic, and Dank Mono.
- I rebound the chorded shortcut `CMD+K -> CMD+B` to toggle sidebar, as a throwback to my Sublime Text days. The key for it is `workbench.action.toggleSidebarVisibility`.

## More to come

Probably.