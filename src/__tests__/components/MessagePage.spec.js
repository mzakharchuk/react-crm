import React from 'react'
import {mapStateToProps, MessagePage ,TabContent} from '../../components/message/'

describe("Message page component", () => {

    let wrapper = null
    const props = {
        botItems: [{ id:1,name:'test1'}],
        actions:{loadBots:() =>{return Promise.resolve()}}
    }
    beforeAll(() =>{
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