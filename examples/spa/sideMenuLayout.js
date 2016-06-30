import React from 'react';
import { render } from 'react-dom';

import { SideNav, NavItem } from 'reactor-ui/sidenav';
import { SideMenuLayout, SideMenu, Content } from 'reactor-ui/spa/SideMenuLayout';

const App = React.createClass({

    render() {
        return (
            <SideMenuLayout>
                <SideMenu background={'#FFF'}>
                    <SideNav>
                        <NavItem id='dollar' text='Dollar' icon='fa fa-dollar'></NavItem>
                        <NavItem id='cube' text='Cube' icon='fa fa-cube'></NavItem>
                        <NavItem id='comment' text='Comment' icon='fa fa-comment-o'></NavItem>
                    </SideNav>
                </SideMenu>
                <Content>
                </Content>
            </SideMenuLayout>
        );
    }
});

const el = document.createElement('div');

document.body.appendChild(el);

render(<App />, el);
