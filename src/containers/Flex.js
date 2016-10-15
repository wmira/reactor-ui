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


export const Flex = ({className, style, children}) => (<div className={className} style={{ display: 'flex', ...style }}>{children}</div>);
export const FlexColumn = (props) => (<Flex {...props} style={{flexDirection: 'column', ...props.style }}>{props.children}</Flex>);
export const FlexRow = (props) => (<Flex {...props} style={{flexDirection: 'row', ...props.style}}>{props.children}</Flex>);
export const FlexItem = ({ className, style, grow = 0, shrink = 1,  basis = 'auto', flex, children }) => {
    return <div style={{ ...(flex ? flex : { flexBasis: basis, flexGrow: grow, flexShrink: shrink}), ...style }} className={className}>{children}</div>;
};

Flex.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string
};

FlexColumn.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string
};

FlexRow.propTypes = FlexColumn.propTypes;

FlexItem.propTypes = {
    children: PropTypes.node,
    grow: PropTypes.number,
    shrink: PropTypes.number,
    basis: PropTypes.string,
    flex: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string
};