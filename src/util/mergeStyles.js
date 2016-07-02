

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

export const ternStyle = ternSingleArgCombinator((possiblePredicate, truthy, falsy) => {
    return isFalsy(possiblePredicate) ? falsy : truthy;
});

const merge = ( styles, style ) => ({...styles, ...style});

export const mergeStyles = (...args) => args.filter(isTruthy).reduce( merge, {} );
