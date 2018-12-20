import React from 'react'
import {mapStateToProps, MessagePage ,TabContent} from '../../components/message/'
jest.mock('../../_actions/botActions')

describe("<MessagePage/>component", () => {

    let wrapper = null
    const props = {
        botItems: [{ id:1,name:'test1'}],
        actions:{
            loadBots:() =>{return Promise.resolve()},
            getUpdates:() => {return Promise.resolve()},
            loadMessages :() => {return Promise.resolve()}
        }
    }
    beforeEach(() =>{
        wrapper = shallow(<MessagePage {...props} />)
    })

    it('Should display component', () =>{
        expect(wrapper.find(TabContent).length).toBe(1)
    })

    it('Should mapStateToProps correctly', () => {
        // arrange
        const appState = {
            bots:[{id:1,name:'bot 1'}]
        }
        // act
        const state = mapStateToProps(appState)

        // assert
        expect(state.botItems).toEqual(appState.bots)
    })
})