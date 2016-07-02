import React from 'react';
import { shallow } from 'enzyme';
import should from 'should';
import sinon from 'sinon';

import { SideNav, NavItem, NavGroup, DEFAULT_THEME } from 'reactor-ui/sidenav';
import styles from 'reactor-ui/sidenav/SideNav.css';

import { resolveCls } from '../resolveCls';
import { findTypeWithProps } from '../enzymeTools';

const css = resolveCls(styles);
describe('SideNav tests', () => {

    const findSingleNavItem = findTypeWithProps(NavItem, { id: 'dollar'});
    const createBasic = (onClick, selectedId) => {
        return shallow(
            <SideNav selectedId={selectedId} onClick={onClick}>
                <NavItem id='dollar' text='Dollar' icon='fa fa-dollar'></NavItem>
                <NavItem id='cube' text='Cube' icon='fa fa-cube'></NavItem>
            </SideNav>,
            { context: {ruiSideNavTheme: DEFAULT_THEME }}
        );
    };
    it('Renders a list of navigation items', () => {

        const wrapper = shallow(
            <SideNav>
                <NavItem id='dollar' text='Dollar' icon='fa fa-dollar'></NavItem>
                <NavItem id='cube' text='Cube' icon='fa fa-cube'></NavItem>
                <NavItem id='comment' text='Comment' icon='fa fa-comment-o'></NavItem>
            </SideNav>,
            { context: {ruiSideNavTheme: DEFAULT_THEME }}
        );
        should(wrapper.find(NavItem).length).be.exactly(3);
        should(wrapper.find(css('sidenav')).length).be.exactly(1);

    });

    it('onClick props is called from children', () => {
        const onClick = sinon.spy();
        const wrapper = createBasic(onClick);
        const single = wrapper.findWhere( findSingleNavItem );
        single.simulate('click');
        should(onClick.callCount).be.exactly(1);
    });

    it('click doesnt throw error if no onClick listener', () => {
        const wrapper = createBasic();
        const single = wrapper.findWhere( findSingleNavItem );
        single.simulate('click'); //this shouldn't die
    });

    it('passes selected id prop', () => {
        const onClick = sinon.spy();
        const wrapper = createBasic(onClick, 'dollar');
        const single = wrapper.findWhere( findSingleNavItem );
        //check
        should(single.prop('selectedId')).be.exactly('dollar');
        //all should work
        single.simulate('click');
        should(onClick.callCount).be.exactly(1);
    });

    it('renders groups', () => {
        const wrapper = shallow(
            <NavGroup id='cube' text='Cube' icon='fa fa-cube'>
                <NavItem id='dollar' text='Dollar' icon='fa fa-dollar'></NavItem>
            </NavGroup>,
            { context: {ruiSideNavTheme: DEFAULT_THEME }}
        );
        //there will be 3 nav items here, 1 is for main, 2, for the group, 3 is for the actual navitem
        should(wrapper.find(NavItem).length).be.exactly(3);
        should(wrapper.find(css('sidenav-grp')).length).be.exactly(1);
    });
});
