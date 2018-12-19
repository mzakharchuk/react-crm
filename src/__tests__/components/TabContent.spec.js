import React from 'react'
import {TabContent} from '../../components/message'
import {GroupsBlock} from '../../components/_common'

describe("<TabContent/> component",() => {
    const props ={
        item:{
            messages:[
                {
                    chat:{type:'private',id:1,name:'test 1'}
                },
                {
                    chat:{type:'channel',id:1,name:'test 2'}
                }
            ]
            },
        selectedChat:'',
        onSelectGroup:() =>{},
        onChange:() =>{},
        onDelete:() =>{},
        onSendMessage:() =>{},
        messages:[]

    }
    
    beforeEach(()=>{
        console.log('before each')
    })

    it('Should render tab content',() => {
       const wrapper = shallow(<TabContent {...props}/>)
        expect(wrapper.find('.container-message').length).toBe(1)
    })
   

})