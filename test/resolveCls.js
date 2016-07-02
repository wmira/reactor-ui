
/**
 * passing 'ul.sideNav' returns 'ul.' + styles['sidenav']
 */
export const resolveCls = styles => (classStr) => {
    const paths = classStr.split('.');
    if ( paths.length > 1 ) {
        return `${paths[0]}.${styles[paths[1]]}`;
    } else {
        return `.${styles[paths[0]]}`;
    }
};
