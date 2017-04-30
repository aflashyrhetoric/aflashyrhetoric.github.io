#!/bin/sh

echo "*** Deployment has been scheduled."

if [[ $(git status -s) ]]
then
    echo "*** The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "*** Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "*** Checking out master branch into public"
git worktree add -B master public origin/master

echo "*** Removing existing files"
rm -rf public/*

echo "*** Running yarn build"
yarn build

echo "*** Adding CNAME"
echo kevinoh.me >> CNAME

echo "*** Updating master branch with new output"
cd public && git add -A && git commit -m "Publishing to master (publish.sh)"
git push

