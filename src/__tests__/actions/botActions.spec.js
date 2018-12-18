import React from 'react'
import * as botActions from '../../_actions/botActions'
import * as types from '../../types'
jest.mock('../../_actions/botActions')

import TestUtils from 'react-dom/test-utils'

describe("Bot actions",() => {
  
    it('should load bots', async () => {
       const action = await botActions.loadBots()
        expect(action).toEqual({ name: 'hello' })
    })
})


    // beforeEach(function(){
    //     global.fetch = jest.fn().mockImplementation(() => {
    //         var p = new Promise((resolve, reject) => {
    //             resolve({
    //             ok: true, 
    //             Id: '123', 
    //             json: function() { 
    //                 return {Id: '123'}
    //             }
    //             })
    //         })

    //         return p
    //     })
    // })



    //     it('should fetch these bots', async ()=>{
    //         const gen = await loadBots()

    //     })