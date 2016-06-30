import React, { PropTypes } from 'react';

export const NavItem = ({background, flex, children, style}) => (
    <nav role='navigation' style={{background, flex: flex || '0 1 auto', ...style   }}>{children}</nav>
);

NavItem.propTypes = {
    flex: PropTypes.string,
    children: PropTypes.node
};

export const SectionItem = ({background, flex, children}) => (
    <section style={{background, flex: flex || '1 1'}}>{children}</section>
);


export const Flex = ({style,children}) => <div style={{display: 'flex', ...style}}>{children}</div>;
export const FlexColumn = (props) => <Flex style={{flexDirection: 'column'}}>{props.children}</Flex>;

FlexColumn.propTypes = {
    children: PropTypes.node
};
