import React from 'react'
import { shallow, mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'
import fetchMock from 'fetch-mock-jest'

import App from './'

describe('<App />', () => {
  beforeEach(() => {
    fetchMock.restore()
  })

  it('is alive at application start', () => {
    const app = shallow(<App />)
    expect(app.find({ children: 'Get Many Pokemon' }).exists()).toBeTruthy()
  })

  it('changes state on click', async () => {
    const testPokemon = [
      { name: 'test pokemon one', url: 'http://example.com/1' },
      { name: 'test pokemon two', url: 'http://example.com/2' }
    ]
    fetchMock.getAny({ results: testPokemon })
    const app = mount(<App />)
    app.find({ children: 'Get Many Pokemon' }).simulate('click')
    await waitForExpect(() => {
      expect(app.state('pokemon')).toEqual(testPokemon)
    })
  })
})
