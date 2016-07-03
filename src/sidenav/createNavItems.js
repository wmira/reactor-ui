
import React, { Children, cloneElement } from 'react';
import { NavSection } from './NavSection';
import { NavItem } from './NavItem';
import { SNav } from './Nav';

import { noop } from 'reactor-ui/util';

const navItemCloner = (onClick, selectedId, style) => child => {
    return cloneElement(child, {onClick, selectedId, style});
};

export const createNavItems = (children, onClick, selectedId, style = {}) => {
    const cloneNavItem = navItemCloner(onClick, selectedId, style);
    return Children.map( children, child => {
        if ( child.type === NavSection ) {
            const grandC = child.props.children;
            const sectionE = <NavItem selectedId={selectedId} onClick={noop}><SNav {...child.props} /></NavItem>;
            return [sectionE, ...Children.map(grandC,cloneNavItem) ];
        }
        return cloneNavItem(child);
    });
};
