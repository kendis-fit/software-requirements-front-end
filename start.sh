#!/bin/bash

if [ -z "$(command -v serve)" ]; then
    echo "You don't have program serve, you should download it with help command 'npm i -g serve'";
    exit 1;
fi

get_port() {
    if [ -n "$PORT" ]; then
        TRUE_PORT=$PORT;
    elif [ -n "$1" ]; then
        TRUE_PORT=$1;
    else
        TRUE_PORT=3000;
    fi
}

get_directory() {
    if [ -d "./build" ]; then
        TRUE_DIRECTORY="build";
    else
        TRUE_DIRECTORY=".";
    fi
}

get_port $1
get_directory

serve -p $TRUE_PORT -s $TRUE_DIRECTORY