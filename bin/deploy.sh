#!/bin/bash
shopt -s extglob;
if git diff-index --quiet HEAD --; then # Check to make sure there are no uncommited changes
    set -o errexit; # Exit on error
    npm run clean;
    npm run build;
    git checkout -B gh-pages;
    rm -rf !(build|dist);
    mv build/* ./;
    rm -rf build;
    git add .;
    git commit -m "Create new production build";
    git push -f origin gh-pages;
    git checkout master;
    yarn install;
else
  echo Please commit or stash your changes first.;
fi
