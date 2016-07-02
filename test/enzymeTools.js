
const hasProps = (props, item) => {
    if ( !props ) {
        return true;
    }
    const keys = Object.keys(props);
    return keys.reduce( (result, key) => {
        debugger;
        if ( !result ) {
            return result;
        }
        if ( item.prop(key) !== props[key] ) {
            return false;
        }
        return result;
    }, true);
};

export const findTypeWithProps = (element, props) =>
    item => item.type() === element && hasProps(props, item);
