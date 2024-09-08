import React, { Component } from 'react'
import Item from '../Item/Item'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Items.css'

export class Items extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (

      <div className='SectionTopGames'>
        <h3>Top Games</h3>
        <p>If you buy 2 video games, you will receive 1 video game for free, along with a <span className="sale">50% </span>discount.</p>
      <div className='carts'>  
        <Slider {...settings}>
        {this.props.items.map(el => (
          <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
        ))}
        </Slider>
        </div>
      </div>
    )
  }
}

export default Items