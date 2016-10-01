
import { get } from 'fkit-js';

const getType = get('type');

export const findChild = (ToFind) => {

    const predicate = (child) => getType(child) === ToFind;

    return (children) => {

        if ( Array.isArray(children) ) {
            return children.filter( predicate )[0];
        }
        return getType(children) === ToFind ? children : null;
    };

};

export default findChild;