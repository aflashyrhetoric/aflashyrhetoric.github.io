# Nulab Developer Website

This is the repository for the Nulab Developer website, located at: https://developer.nulab-inc.com.

## General Requirements

- Make sure you're using the correct version of Node:
```
nvm use
```
- Ensure you have `yarn` installed.
```
npm install -g yarn
```

## Developer Website Setup

1. Install Hugo
```
brew update && brew install hugo
```
2. Clone the repository.
```
git clone nulab@nulab.git.backlog.jp:/NUWEB/nulab-developer-website.git
```
3. Install packages.
```
yarn install
```
4. Run `yarn dev`, which will run `hugo server` and `webpack --watch` at the same time.
5. Navigate to `localhost:1313` in your address bar.
6. Develop! Any changes to HTML/SCSS will refresh the browser and be reflected automatically.
7. To build, run `yarn build`. Webpack will compile assets, and Hugo will refresh `/public` directory with new pages and assets.
