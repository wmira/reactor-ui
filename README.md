Reactor UI
=========

[![Build Status](https://travis-ci.org/wmira/reactor-ui.svg?branch=master)](https://travis-ci.org/wmira/reactor-ui)


** This is work in progress **

Reactor UI is a reusable UI kit written in React.

Note that this is very much on its initial development phase, a work in progress.

# Motivation

The aim for this project is to be used as a base for developers creating custom ui kits in their
projects.

# Usage

`npm install --save reactor-ui`

To load the css, you need to have css loader within your build. If you are using webpack then 
you can use css-loader

`npm install --save-dev css-loader` 

Then add this on your webpack config under the loaders section...

```javascript
    ...
    loaders [
        ...
        { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
```

# Components

## Buttons

```javascript
    
    import { Btn } from 'reactor-ui/buttons';

    //load the css before loading, or can be done from your projects
    //entry point
    import 'reactor-ui/css/buttons.css';

    const Buttons = ({onClick}) => (
        <span>
            <Btn onClick={onClick} text=' Reactor UI '/>
            <Btn scheme='primary' onClick={onClick} text=' Reactor UI '/>
            <Btn scheme='success' onClick={onClick} text=' Reactor UI '/>
            <Btn scheme='warning' onClick={onClick} text=' Reactor UI '/>
            <Btn scheme='danger' onClick={onClick} text=' Reactor UI '/>
            <Btn disabled={true} text=' Reactor UI '/>
        </span>
    );
```

### Override Styling

To change the styles, just override the css and load your overrides

```javascript

    //load the css before loading
    import 'reactor-ui/css/buttons.css';
    import 'myproject/css/project.css';

```

```css

/** project.css, override primary color **/

.rui-btn-primary {
  background: blue;
  color: #FFFFFF;
}

```


## SideNav

SideNav is a vertical navigation. Do note that its a stateless component so you would 
need to provide it all selection details and such from within a stateful component

```javascript
    import React from 'react';

    import { SideNav, NavItem, NavGroup } from 'reactor-ui/sidenav';

    //import styles here or can be from projects entry point
    import 'reactor-ui/css/sidenav.css';

    const SideMenu extends React.Component {

        constructor() {
            this.state = { };
        }

        onNavClick = (id) => {
            this.setState( { selectedId: id });
        }
        render() {
            return (
                <div style={{ marginRight: 4, width: 240 }}>
                    <SideNav onClick={ this.onNavClick } selectedId={this.selectedId}>
                        <NavItem id={'1'} text='Dashboard' icon='fa fa-dashboard'/>,
                        <NavItem id={'2'} text='Channels' icon='fa fa-exchange'/>,
                        <NavGroup id={'3'} text='Products' icon='fa fa-cube'>
                            <NavItem id={'3.1'} text='Inventory Levels' icon='fa fa-bar-chart'/>
                            <NavItem id={'3.2'} text='Sales Report' icon='fa fa-dollar'/>
                        </NavGroup>                        
                        <NavItem id={'4'} text='Inventory' icon='fa fa-cubes'/>
                    </SideNav>  
                </div>
            );                 
        }    
```

### Styling

To change the styles, just override the css and load your overrides

```javascript

    //load the css before loading
    import 'reactor-ui/css/sidenav.css';
    import 'myproject/css/project.css';

```

```css

/** project.css, override sidenav style **/

.rui-snav-cdark {
  background: #2c3e50;
  color: #F5F7FA;
}

.rui-snav-item-green:hover {
  background: #16a085;
}

```

# Development

   * npm install -g webpack webpack-dev-server
   * git clone https://github.com/wmira/reactor-ui.git
   * cd reactor-ui
   * npm install  

## Running examples and development

You need to run 

`npm run dev`

but you need to pass extra arguments specifying the entry point for webpack.
To run the sidenav.js example

`npm run dev -- examples/sidenav.js`

do the same for other examples.

## Testing

   ```javascript
   npm run test
   ```
# Contributing
