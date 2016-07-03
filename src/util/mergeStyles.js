

const isFalsy = (arg) => {
    return arg === false || arg === undefined || arg === null
        || arg === 0 || arg === '';
};

const isTruthy = arg => !isFalsy(arg);

const ternSingleArgCombinator = function(f) {
    return function() {
        if ( arguments.length === 1 ) {
            return arguments[0];
        }
        return f(...Array.from(arguments));
    };
};

export const overrideStyles = ( base, override ) => {
    return Object.keys(base).reduce( (result, key) => {
        if ( override[key] ) {
            return { ...result, [key]: override[key] };
        }
        return {...result, [key]: base[key] };
    }, {});
};

export const ternStyle = ternSingleArgCombinator((possiblePredicate, truthy, falsy) => {
    return isFalsy(possiblePredicate) ? falsy : truthy;
});

const merge = ( styles, style ) => ({...styles, ...style});

export const mergeStyles = (...args) => args.filter(isTruthy).map( style => {
    const keys = Object.keys(style||{});
    return keys.reduce( (accumulated, key) => {
        if ( style[key] !== undefined ) {
            accumulated[key] = style[key];
        }
        return accumulated;
    }, {});
}).reduce( merge, {} );
