import should from 'should';
import { mergeStyles as mstyles , ternStyle as tstyle } from 'reactor-ui/util/mergeStyles';

describe('mergeStyles tests', () => {
    it('returns all styles as normal', () => {
        const result = mstyles({background: 'A'}, {color: 'red'});
        should( result ).be.ok();
        should(result).have.property('background', 'A');
        should(result).have.property('color', 'red');
    });

    it('ternStyle on single argument works', () => {
        const result = tstyle({ background: 'A' });
        should(result).have.property('background', 'A');
    });
    it('ternStyle on falsy argument works', () => {
        const falsys = [undefined, null, 0, '', false];
        falsys.forEach( falsy => {
            const result = tstyle(falsy,undefined,{ isFalsy: true });
            should(result).have.property('isFalsy', true);
        });
    });
    it('ternStyle on truth argument works', () => {
        const truthys = [{}, true, 12, 'a'];

        truthys.forEach( truthy => {
            const result = tstyle(truthy, {background: 'red'},{ isFalsy: true });
            should(result).have.property('background', 'red');
        });
    });
});
