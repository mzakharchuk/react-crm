import React from 'react'
import {TabContent} from '../../components/message'
import {GroupsBlock} from '../../components/_common'
jest.mock('../../selectors/messageSelector',()=>({ getChats: () =>[]}))

describe("<TabContent/> component",() => {
    
    const props ={
            messagesGroup:[
                {id:1,type:'private',name:'test 1'},
                {id:2,type:'channel',name:'test 2'}
            ],
        selectedChat:'',
        onSelectGroup:() =>{},
        onChange:() =>{},
        onDelete:() =>{},
        onSendMessage:() =>{},
        messages:[]

    }
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<TabContent {...props}/>)
    })
    
    it('Should render tab content',() => {
        expect(wrapper.find('.container-message').length).toBe(1)
        expect(wrapper.find('h1').text()).toBe('Please select and start you conversation')
    })
    it('Should render GroupsBlock',() => {
        expect(wrapper.find(GroupsBlock).length).toBe(2)
     })

})