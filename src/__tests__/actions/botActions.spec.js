import React from 'react'
import * as botActions from '../../_actions/botActions'

jest.mock('../../_actions/botActions')

describe("Actions: botactions",() => {
  
    it('should load bots', async () => {
       const action = await botActions.loadBots()
        expect(action).toEqual({ name: 'hello' })
    })
})