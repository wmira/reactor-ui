import React from 'react';
import { render } from 'react-dom';

import { SideMenuLayout, SideMenuBar, Body } from 'reactor-ui/spa/SideMenuLayout';

const App = React.createClass({

    render() {
        return (
            <SideMenuLayout>
                <SideMenuBar background={'#E5E5E5'}>
                    <ul>
                        <li>Part 1</li>
                        <li>Part 2</li>
                        <li>Part 3</li>
                        <li>Part 4</li>
                        <li>Part 5</li>
                        <li>Part 6</li>
                    </ul>
                </SideMenuBar>
                <Body>
                    Hello
                    

                </Body>
            </SideMenuLayout>
        );
    }
});

const el = document.createElement('div');

document.body.appendChild(el);

render(<App />, el);
