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
                            <NavItem id='addproduct' text='Add Product' icon='fa fa-cubes'/>
                            <NavItem id='cube2' text='Cube' icon='fa fa-cube'/>
                            <NavGroup id='smenu1' text='Comment' icon='fa fa-bars'>
                                <NavItem id='dollar2' text='Dollar' icon='fa fa-dollar'/>
                                <NavItem id='cube3' text='Cube Sub 1' icon='fa fa-cube'/>
                                <NavItem id='cube4' text='Cube Sub 2' icon='fa fa-cube'/>
                            </NavGroup>
                            <NavItem id='comment2' text='Comment' icon='fa fa-comment-o'></NavItem>
                        </NavSection>
                        <NavSection title='CUSTOMERS'>
                            <NavItem id='c1' text='Add Customer' icon='fa fa-cubes'/>
                            <NavItem id='c2' text='Cube' icon='fa fa-cube'/>
                            <NavGroup id='smenu2' text='Comment' icon='fa fa-bars'>
                                <NavItem id='c3' text='Dollar' icon='fa fa-dollar'/>
                                <NavItem id='c4' text='Cube Sub 1' icon='fa fa-cube'/>
                                <NavItem id='c5' text='Cube Sub 2' icon='fa fa-cube'/>
                            </NavGroup>
                            <NavItem id='c6' text='Comment' icon='fa fa-comment-o'></NavItem>
                            <NavItem id='c7' text='Add Customer' icon='fa fa-cubes'/>
                            <NavItem id='c8' text='Cube' icon='fa fa-cube'/>
                            <NavItem id='c9' text='Add Customer' icon='fa fa-cubes'/>
                            <NavItem id='c10' text='Cube' icon='fa fa-cube'/>
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
