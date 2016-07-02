import React from 'react';
import { render } from 'react-dom';

import { SideNav, NavItem, NavSection, NavGroup } from 'reactor-ui/sidenav';
import { SideMenuLayout, SideMenu, Content } from 'reactor-ui/spa/SideMenuLayout';

const App = React.createClass({
    getInitialState() {
        return { selectedId: 'dollar' };
    },
    onNavClick(id) {
        this.setState({ selectedId: id });
    },
    render() {
        return (
            <SideMenuLayout>
                <SideMenu background={'#FFF'}>
                    <SideNav onClick={this.onNavClick} selectedId={this.state.selectedId} >
                        <NavSection title='MAIN'>
                            <NavItem id='dollar' text='Dollar' icon='fa fa-dollar'/>
                            <NavItem id='cube' text='Cube' icon='fa fa-cube'/>
                            <NavItem id='comment' text='Comment' icon='fa fa-comment-o'/>
                        </NavSection>
                        <NavSection title='PRODUCTS'>
                            <NavItem id='dollar2' text='Dollar' icon='fa fa-dollar'/>
                            <NavItem id='cube2' text='Cube' icon='fa fa-cube'/>
                            <NavGroup id='others' text='Comment' icon='fa fa-comment-o'>
                                <NavItem id='dollar2' text='Dollar' icon='fa fa-dollar'/>
                                <NavItem id='cube2' text='Cube' icon='fa fa-cube'/>
                                <NavItem id='cube2' text='Cube' icon='fa fa-cube'/>
                            </NavGroup>
                            <NavItem id='comment2' text='Comment' icon='fa fa-comment-o'></NavItem>
                        </NavSection>
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
