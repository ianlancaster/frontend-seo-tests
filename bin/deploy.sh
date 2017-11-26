#!/bin/bash
if git diff-index --quiet HEAD --; then # Check to make sure there are no uncommited changes
    set -o errexit; # Exit on error
    npm run clean;
    npm run build;
    git checkout -b gh-pages;
    find [path] -type -not -name 'dist' -not -name '.git' -delete
else
  echo Please commit or stash your changes first.;
fi
