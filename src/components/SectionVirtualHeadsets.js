import React, { Component } from 'react'
import IconStar from './imgfirstscreen/SectionVH/Star 6.png'
import Elipse from './imgfirstscreen/SectionVH/Ellipse 1200.png'
import Untitled from './imgfirstscreen/SectionVH/Untitled-1 1.png'

export class SectionVirtualHeadsets extends Component {
  render() {
    return (
      <div className='SectionVirtualHeadsets'>
        <div className='sectionVHLeft'>
            <img className='elipse' src={Elipse}/>
            <img className='untitled' src={Untitled}/>
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