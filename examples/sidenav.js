import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import { SideNav, NavItem, NavGroup } from 'reactor-ui/sidenav';
import { FlexRow } from 'reactor-ui/containers/Flex';

import 'reactor-ui/css/sidenav.css';

import { createAndRender } from './index';

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


createAndRender(App);