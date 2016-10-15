

export const Render = (props) => {
    if ( props.predicate ) {
        return props.children;
    }
    return null;
};

export default Render;