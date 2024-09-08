#!/bin/bash

set -e

yarn build
serve -s build
