import React from 'react';
import { shallow } from 'enzyme';
import should from 'should';
//import sinon from 'sinon';
import { findTypeWithProps } from '../enzymeTools';
import { BtnGrp, Btn } from 'reactor-ui/buttons';

import { INACTIVE_THEME } from 'reactor-ui/buttons/BtnGrp';

describe('BtnGrp tests', () => {

    const create = (active, onClick) => {
        return shallow(
            <BtnGrp active={active} onClick={onClick}>
                <Btn value='database' icon='fa fa-database'/>
                <Btn value='diamond' icon='fa fa-diamond'/>
            </BtnGrp>
        );
    };

    it('Renders Child Buttons and highlight selected', () => {
        const wrapper = create('database');
        should(wrapper.find(Btn).length).be.exactly(2);
        const findInactive = findTypeWithProps(Btn, { value: 'diamond'});
        const activeBtn = wrapper.findWhere(findInactive);
        should(activeBtn.prop('theme')).be.exactly(INACTIVE_THEME);
    });
});
