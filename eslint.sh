#!/bin/bash
# run daemonized eslint if available to avoid cold start
if command -v eslint_d &> /dev/null
then
  eslint_d $@
else
  eslint $@
fi
