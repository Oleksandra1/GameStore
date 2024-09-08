import './SectionVirtualHeadsets.css';
import React, { Component } from 'react'

export class SectionVirtualHeadsets extends Component {
  render() {
    return (
      <div className='SectionVirtualHeadsets'>
        <div className='sectionVHLeft'>
            <img className='elipse' src="/img/SectionVH/Ellipse1200.png"/>
            <img className='untitled' src="/img/SectionVH/Untitled.png"/>
        </div>
        <div className='sectionVHRight'>
            <h2>Our Virtual Headsets Shine with Unique 
            Features!</h2>
            <ul className='customList'>
                <li>High-resolution OLED or LCD screens: Provide sharp and clear visuals.</li>
                <li>Inside-out tracking: Built-in sensors (cameras or other sensors).</li>
                <li>Refresh rate: Higher refresh rates reduce motion sickness and provide.</li>
                <li>Eye tracking: Monitors the movement of the user's eyes, allowing for more.</li>
                <li>High-resolution OLED or LCD screens: Provide sharp and clear visuals.</li>
                <li>Refresh rate: Higher refresh rates reduce motion sickness and provide.</li>
            </ul>            
        </div>
      </div>
    )
  }
}

export default SectionVirtualHeadsets