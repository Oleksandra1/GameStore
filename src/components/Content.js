import React, { Component } from 'react'
import SectionVirtualHeadsets from './SectionVirtualHeadsets'
import SectionTopGames from './SectionTopGames'

export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        <SectionVirtualHeadsets />
        <SectionTopGames />

      </div>
    )
  }
}
