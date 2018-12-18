import React from 'react'
import {Header} from '../../components/_common'
import renderer from 'react-test-renderer'

describe('The header ', () =>{
    it('should renders  snapshot', ()=>{
        const tree =renderer
        .create(<Header/>)
        .toJSON();

        expect(tree).toMatchSnapshot()
    })
})