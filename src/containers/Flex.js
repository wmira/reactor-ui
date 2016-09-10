import React, { PropTypes } from 'react';

export const NavItem = ({background, flex, children, style}) => (
    <nav role='navigation' style={{background, flex: flex || '0 1 auto', ...style   }}>{children}</nav>
);

NavItem.propTypes = {
    flex: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    background: PropTypes.string
};

export const SectionItem = ({background, flex, children}) => (
    <section style={{ background, flex: flex || '1 1' }}>{children}</section>
);

SectionItem.propTypes = {
    background: PropTypes.string,
    flex: PropTypes.string,
    children: PropTypes.node
};


export const Flex = ({className, style,children}) => <div className={className} style={{display: 'flex', ...style}}>{children}</div>;
export const FlexColumn = (props) => <Flex className={props.className} style={{flexDirection: 'column'}}>{props.children}</Flex>;
export const FlexRow = (props) => <Flex className={props.className} style={{flexDirection: 'row'}}>{props.children}</Flex>;

Flex.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string
};

FlexColumn.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

FlexRow.propTypes = FlexColumn.propTypes;
