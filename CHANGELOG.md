# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Add `linkState` ref which shows the last known state of the connection to the device; either `error`, `loading`, `http`, or `ws`

## [0.2.0]- 2022-06-07
This major updates brings `vue-wled` up to date with WLED v0.13.1 and WLED Client v0.21.0.

### Added
- Add `onLiveLEDs` function that will handle listening and relaying the `live:leds` event during the component lifecycle
- Add support for WLED's new light capabilities api for determining if the device supports RGB, white channel, and CCT values
- Add `setCCT` function to set the device's color temperature if the device supports it
- Add major support for getting and setting device configuration variables
- Add `refreshState`, `refreshInfo`, `refreshEffects`, `refreshPalettes`, and `refreshPresets` functions for manually refreshing the values from the device

### Changed
- **Breaking**: Replaced `isReady` promise with `init()` function that returns a promise
- **Breaking**: Remove `presetCycle` from default state

## [0.1.3]- 2021-11-29
Another hotfix for missing files field in package.

## [0.1.2]- 2021-11-29

### Changed
- Remove unused `loading` ref
- Remove console log

## [0.1.1]- 2021-11-29
No major changes. Fix README to reflect correct package name.

## [0.1.0]- 2021-11-29
First beta release!

### Added
- Add main plugin function `wledClientPlugin` which accepts a WLED Client instance then creates reactive bindings and provides them using Vue's dependency injection system
- Add `useWLEDClient` composable function to inject the reactive bindings
