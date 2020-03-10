# React Menu

[![Build Status](https://travis-ci.org/kenshoo/react-menu.svg?branch=master)](https://travis-ci.org/kenshoo/react-menu) [![npm version](https://badge.fury.io/js/%40kenshooui%2Freact-menu.svg)](https://badge.fury.io/js/%40kenshooui%2Freact-menu)

**Kenshoo menu component**

**[react-menu demo](https://kenshoo.github.io/react-menu)**

React menu is a simple menu container component that helps a user create a simple menu bar

<p align="center">
    <img src="preview.png?raw=true" width="600" />
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
 
## Import styles
 
 **Include the component's css on your app**
 
```jsx
 import "@kenshooui/react-menu/dist/style.css"
```
 
 ## How to use 
 
```jsx
import React, { Component } from "react";
import Menu, {
    Button, 
    Dropdown, 
    Seperator, 
    DropdownItem, 
} from ""@kenshooui/react-menu";

class Menu extends Component {
  render() {
     <Menu>
            <Button>Analysis</Button>
            <Dropdown label="options">
                <DropdownItem>option 1</DropdownItem>
                <DropdownItem>Option 2/DropdownItem>
            </Dropdown>
            <Separator />
            <Button>Help</Button>
            <Dropdown label="more options">
                <DropdownItem>option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
            </Dropdown>
            <div>I'm a div</div>
        </Menu>
  }
}
```

## Properties

#### Menu

| Name                            | Type                  | Default                                          | Description                                                                                                                                       
|:-----                           |:-----                 |:-----                                            |:-----                                                                                                                                             
| `className`                     | `String`              | ''                                               | Used for customizing the style.
| `children`                      | `Elements/Components` | ''                                               | List of elements to place in the menu

#### Button

| Name                            | Type                  | Default                                          | Description                                                                                                                                       
|:-----                           |:-----                 |:-----                                            |:-----                                                                                                                                             
| `className`                     | `String`              | ''                                               | Used for customizing the style.
| `disabledClassName`             | `String`              | ''                                               | Used for customizing the disabled style.
| `children`                      | `Elements/Components` | ''                                               | List of elements to place in the menu
| `isDisabled`                    | `boolean`             | ''                                               | Toggle to disable/enable the component.
| `onClick`                       | `function`            | ''                                               | The click callback function.

#### Dropdown

| Name                            | Type                  | Default                                          | Description                                                                                                                                       
|:-----                           |:-----                 |:-----                                            |:-----                                                                                                                                             
| `className`                     | `String`              | ''                                               | Used for customizing the style.
| `disabledClassName`             | `String`              | ''                                               | Used for customizing the disabled style.
| `itemsClassName`                | `String`              | ''                                               | Used for customizing the items container style.
| `iconClassName`                 | `String`              | ''                                               | Used for customizing the chevron icon.
| `label`                         | `String`              | ''                                               | The dropdown label
| `children`                      | `Elements/Components` | ''                                               | List of elements to place in the menu
| `isDisabled`                    | `boolean`             | ''                                               | Toggle to disable/enable the component.
| `onClick`                       | `function`            | ''                                               | The click callback function.
| `direction`                     | `String`              | ''                                               | bottom, right, left, bottom_left - default uses bottom style. 

#### Seperator

Use this component to divide the menu to left and right sections

| Name                            | Type                  | Default                                          | Description                                                                                                                                       
|:-----                           |:-----                 |:-----                                            |:-----                                                                                                                                             
| `className`                     | `String`              | ''                                               | class name - Used for customizing the style.

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
  
 