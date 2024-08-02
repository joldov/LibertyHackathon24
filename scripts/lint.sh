#!/usr/bin/env bash

set -e

LINT_SCRIPT=$(cat package.json | jq -r '.scripts | has("lint")')

if $LINT_SCRIPT; then
  if [[ -f "yarn.lock" ]]; then
    yarn lint
  else
    npm run lint
  fi
else
  echo 'No lint script found, skipping'
fi