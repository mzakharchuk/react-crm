import React from 'react'
import {Header} from '../../components/_common'

describe('The header ', () =>{
    it('should renders  snapshot', ()=>{
        const wrapper = shallow(<Header/>)
        expect(wrapper.find('.sub-menu').text()).toBe("<NavLink />")
    })
})