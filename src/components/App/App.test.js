import React from 'react'
import { shallow, mount } from 'enzyme'

import App from './'

describe('<App />', () => {
  it('is alive at application start', () => {
    const app = shallow(<App />)
    expect(app.find('button').exists()).toBeTruthy()
  })

  // it('changes state on click', () => {
  //   const app = mount(<App />)
  //   app.find('button').simulate('click')
  //   expect(app).not.toHaveState({ pokemon: [] })
  // })
})
