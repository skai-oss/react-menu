# Multi select

[![Build Status](https://travis-ci.org/kenshoo/react-menu.svg?branch=master)](https://travis-ci.org/kenshoo/react-menu) [![npm version](https://badge.fury.io/js/%40kenshooui%2Freact-menu.svg)](https://badge.fury.io/js/%40kenshooui%2Freact-menu) [![Test Coverage](https://api.codeclimate.com/v1/badges/<placeholder>/test_coverage)](https://codeclimate.com/github/kenshoo/react-menu/test_coverage)

**Kenshoo menu component**

**[react-menu demo](https://kenshoo.github.io/react-menu)**

React menu is a simple menu container component that helps a user create a simple menu bar out of the box

<p align="center">
    <img src="preview.gif?raw=true" width="600" />
</p>

## Installation
 
 **Installation using npm:**
 
```
 npm install @kenshooui/react-menu --save
```

 **Installation using Yarn:**
 
```
 yarn add @kenshooui/react-menu
```
 
 ## How to use 
 
```jsx
import React, { Component } from "react";
import Menu from "@kenshooui/react-menu";

class Menu extends Component {
  constructonr(props) {
    super(props);
    ...
  }
  
  render() {
   ...
  }
}
```

## How to Contribute

#### Setting up development environment

1. Fork the repository and create your branch from `master`.
2. Install the project: `yarn install`
3. Run tests: `yarn test` or `yarn test:watch`
4. Run dev environment: `yarn storybook` and head to [https://localhost:6006](https://localhost:6006)


#### Issuing a change

1. Push to github.
2. If you’ve fixed a bug or added code that should be tested, add tests.
3. Open a Pull Request with the following guidelines:
   - Set title prefix to feature/bug and supply a descriptive PR title.
   - Add description to your Pull Request describing your change.
4. Once your Pull Request is issued, the test suite and build processes will run and your change will be reviewed.
  
  
## Compatibility
  
  - React 16 or newer
  
  