# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
Nothing yet.

## [0.1.1]- 2021-11-29
No major changes. Fix README to reflect correct package name.

## [0.1.0]- 2021-11-29
First beta release!

### Added
- Add main plugin function `wledClientPlugin` which accepts a WLED Client instance then creates reactive bindings and provides them using Vue's dependency injection system
- Add `useWLEDClient` composable function to inject the reactive bindings
