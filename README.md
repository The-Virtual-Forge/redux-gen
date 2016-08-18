# redux-gen
Generate Redux.js files with skeleton templates + tests.

This is primarily intended for our own internal usage so file paths etc. are very much in line with our own internal practices.

Feel free to send PRs to help abstraction and configration :)

## Install

### With NPM

`npm i git+https://github.com/The-Virtual-Forge/redux-gen.git --save-dev`

## Usage

From project root:

`redux-gen [options] [cmd]`

## Commands

    test [type] [name]  Generates a test file
    component [name]    Generates a component with matching CSS, actions & test specs
    actions [name]      Generates an actions file with test spec
    container [name]    Generates a container file with test spec
    reducer [name]      Generates a reducer file with test spec
    help                Display help text

## Options

    -h, --help     output usage information
    -V, --version  output the version number
    -d, --debug    Log results to console instead of writing to a file

## Roadmap

* Configurable paths
* Configurable templates
* Publish to NPM
