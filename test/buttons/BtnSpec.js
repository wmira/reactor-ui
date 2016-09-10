import React from 'react';
import { shallow } from 'enzyme';
import should from 'should';
import sinon from 'sinon';

import { Btn, IconText } from 'reactor-ui/buttons';

describe('Btn tests', () => {

    it('Renders Icon and Text and classes', () => {
        const wrapper = shallow(
            <Btn text='Test' icon='fa-icon'/>
        );

        const iconText = wrapper.find(IconText);
        should(iconText.length).be.exactly(1);

        should(iconText.prop('icon')).be.exactly('fa-icon');
        should(iconText.prop('text')).be.exactly('Test');

        should(wrapper.find('.rui-btn').length).be.exactly(1);
    });

    it('Calls OnClick', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(
            <Btn value={'test'} text='Test' icon='fa-icon' onClick={onClick}/>
        );
        wrapper.simulate('click');
        should(onClick.callCount).be.exactly(1);

        const [e, value] = onClick.args[0];
        should(value).be.exactly('test');
        should(e).be.exactly(undefined); //FIXME: we should render fully so we have the actual element
    });

    it('Renders custom children', () => {
        const wrapper = shallow(
            <Btn ><span className='custom'/></Btn>
        );
        should(wrapper.find(IconText).length).be.exactly(0);
        should(wrapper.find('span.custom').length).be.exactly(1);
    });
});
