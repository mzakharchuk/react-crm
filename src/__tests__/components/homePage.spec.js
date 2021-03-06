import React from 'react'
import {HomePage} from '../../components/home'
//jest.dontMock(HomePage)

import TestUtils from 'react-dom/test-utils'

describe("<HomePage/>",() =>{
    it('display test',()=>{
        const item = {
            id:3,
            name:'asd',
            price:25
        } 

        const homepage = TestUtils.renderIntoDocument(
            <HomePage/>
        )
        const label = TestUtils.findRenderedDOMComponentWithTag(homepage,'h1')

        expect(label.textContent).toEqual("Hello! it's home page")
    })
})