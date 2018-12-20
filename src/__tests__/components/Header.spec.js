import React from 'react'
import {Header} from '../../components/_common'

describe('<Header/> sub component ', () =>{
    it('should renders  snapshot', ()=>{
        const wrapper = shallow(<Header/>)
        expect(wrapper.find('.sub-menu').text()).toBe("<NavLink />")
    })
})