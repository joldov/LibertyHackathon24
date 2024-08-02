#!/usr/bin/env bash

set -e

CHECK_AUDIT_SCRIPT=$(cat package.json | jq -r '.scripts | has("check-audit")')

if $CHECK_AUDIT_SCRIPT; then
  if [[ -f "yarn.lock" ]]; then
    npm i --package-lock-only

    npm run check-audit

    # Clean up the package-lock.json, this is only used for the audit command
    rm -rf package-lock.json
    # Revert changes to yarn.lock file caused by npm 8
    git checkout -- yarn.lock
  else
    npm run check-audit
  fi
else
  echo 'No check-audit script found, skipping'
fi