+++
title = "Backlog CLI"
project = "blg-cli"
+++

#### Backlog CLI

An (unofficial) command line utility for working with Backlog, a tool by Nulab, Inc.

- [View on Github](https://github.com/aflashyrhetoric/backlog-cli/)

## Values

- Be easy to "plug and play."
- Provide shortcuts for a subset of your most frequently repeated actions, rather than achieving complete feature parity. In other words, it is designed to be a complement _to_ Backlog, rather than a replacement _for_ it.

## Main Features

- Quickly create, view, and open pull requests in the browser for your current branch & issue
  - `blg pr create [-b BRANCH_TO_MERGE_TO]`
  - `blg pr ls`
  - `blg pr open`
- View and open your latest notifications
  - `blg n`
- Quickly access misc links 
  - `blg me` to list links related to your user account.

## Planned Features & Roadmap

- Create new issues, browse existing issues, and open issues in the browser
- Get quick access to content on your dashboard (your pull requests and issues)

## Built with
- Golang, Cobra, Aurora, and the Backlog API.