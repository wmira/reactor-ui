
import React from 'react';
import { shallow } from 'enzyme';
import should from 'should';

import { divWith } from 'reactor-ui/hoc/elementWith';

/**
 * divWith is a higher order component that can be used to create div
 * with fixed className, styles or attributes
 *
 */
describe('divWith specs', () => {

    it('renders div with fixed className', () => {
        const DivMyCls = divWith({className: 'mycls'});
        const wrapper = shallow(<DivMyCls className='abc'/>);
        //single
        should(wrapper.find('.mycls').length).be.exactly(1);
        //concat
        should(wrapper.find('.mycls.abc').length).be.exactly(1);
    });
    it('renders div with fixed styles', () => {
        const Left = divWith({style: {float: 'left'}});
        const wrapper = shallow(<Left style={{position: 'absolute'}}/>);
        should(wrapper.prop('style').float).be.exactly('left');
        should(wrapper.prop('style').position).be.exactly('absolute');
    });

    it('renders div with fixed styles and cant be overwritten', () => {
        const Left = divWith({style: {float: 'left'}});
        const wrapper = shallow(<Left style={{left: 'right'}}/>);
        should(wrapper.prop('style').float).be.exactly('left');
    });

});
