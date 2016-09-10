import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import { SideNav, NavItem, NavSection, NavGroup } from 'reactor-ui/sidenav';
import { FlexRow } from 'reactor-ui/containers/Flex';

import 'reactor-ui/css/rui.css';
import 'reactor-ui/css/sidenav.css';

const Container = (props) => (
    <div style={{ marginRight: 4, width: 240 }}>
        { props.children }
    </div>
);

Container.propTypes = {
    children: PropTypes.node
};

const App = React.createClass({

    getInitialState() {
        return { selectedIds: { } };
    },

    createItems(prefix) {

        return [
            <NavItem id={`${prefix}.1`} text='Dashboard' icon='fa fa-dashboard'/>,
            <NavItem id={`${prefix}.2`} text='Channels' icon='fa fa-exchange'/>,
            ( <NavGroup id={`${prefix}.3`} text='Products' icon='fa fa-cube'>
                <NavItem id={`${prefix}.31`} text='Inventory Levels' icon='fa fa-bar-chart'/>
                <NavItem id={`${prefix}.32`} text='Sales Report' icon='fa fa-dollar'/>
            </NavGroup> ),
            <NavItem id={`${prefix}.4`} text='Inventory' icon='fa fa-cubes'/>
        ];
    },

    onNavClick(key, id) {
        const { selectedIds } = this.state;
        this.setState({ selectedIds: { ...selectedIds, [key]: id } });
    },

    render() {
        const { selectedIds } = this.state;
        const { onNavClick } = this;

        return (
            <FlexRow>
                <Container>
                    <SideNav onClick={ (id) => onNavClick(1, id) } selectedId={selectedIds['1']} >
                        { this.createItems(1) }
                    </SideNav>
                </Container>
                <Container>
                    <SideNav scheme='dark' highlightScheme='green' onClick={(id) => onNavClick(2, id) } selectedId={selectedIds['2']} >
                        { this.createItems(2) }
                    </SideNav>
                </Container>
                <Container>
                    <SideNav highlightScheme='blue' scheme='dark' onClick={(id) => onNavClick(3, id) } selectedId={selectedIds['3']} >
                        { this.createItems(3) }
                    </SideNav>
                </Container>

                <Container>
                    <SideNav highlightScheme='warning' scheme='dark' onClick={(id) => onNavClick(4, id) } selectedId={selectedIds['4']} >
                        { this.createItems(4) }
                    </SideNav>
                </Container>
           </FlexRow>
        );
    }
});

const el = document.createElement('div');
document.body.appendChild(el);

render(<App />, el);
// <NavGroup id='3' text='Products' icon='fa fa-cube'>
//                             <NavItem id='3.1' text='Inventory Levels' icon='fa fa-bar-chart'/>
//                             <NavItem id='3.2' text='Sales Report' icon='fa fa-dollar'/>
//                         </NavGroup>
//  <NavSection title='MAIN'>
//                             <NavItem id='dollar' text='Dollar' icon='fa fa-dollar'/>
//                             <NavItem id='cube' text='Cube' icon='fa fa-cube'/>
//                             <NavItem id='comment' text='Comment' icon='fa fa-comment-o'/>
//                         </NavSection>
//                         <NavSection title='PRODUCTS'>
//                             <NavItem id='addproduct' text='Add Product' icon='fa fa-cubes'/>
//                             <NavItem id='cube2' text='Cube' icon='fa fa-cube'/>
//                             <NavGroup id='smenu1' text='Comment' icon='fa fa-bars'>
//                                 <NavItem id='dollar2' text='Dollar' icon='fa fa-dollar'/>
//                                 <NavItem id='cube3' text='Cube Sub 1' icon='fa fa-cube'/>
//                                 <NavItem id='cube4' text='Cube Sub 2' icon='fa fa-cube'/>
//                             </NavGroup>
//                             <NavItem id='comment2' text='Comment' icon='fa fa-comment-o'></NavItem>
//                         </NavSection>