import React from "react";
import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import SectionVirtualHeadsets from "./Components/SectionVirtualHeadsets/SectionVirtualHeadsets";
import Accordion from "./Components/Accordion/Accordion";
import Footer from "./Components/Footer/Footer";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          namecarts: 'Horizon : Call of the mountain',
          img: 'Horizon.jpg',
          price: '50',
        },
        {
          id: 2,
          namecarts: 'Half-Life : ALYX',
          img: 'Alyx.jpg',
          price: '60',
        },
        {
          id: 3,
          namecarts: 'Fight Night Champion',
          img: 'Champion.jpg',
          price: '55',
        },
        {
          id: 4,
          namecarts: 'Call of Duty : Cold War',
          img: 'CofD.png',
          price: '65',
        },
      ],

      
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render () {
    const faqList = [
      {
        q: "What are the different types of virtual headsets available?",
        a: "There are tethered (Oculus Rift S, HTC Vive Pro), standalone (Meta Quest 2), mobile (Samsung Gear VR), mixed reality (Microsoft HoloLens), and console-specific (PlayStation VR) VR headsets. They differ in connection type, graphics quality, and compatibility with various platforms.",
      },
      {
        q: "How does a virtual headset work?",
        a: "A virtual headset works through screens, lenses, and sensors that track head movements. The screens create a 3D image, and the lenses expand the field of view. Sensors like gyroscopes and accelerometers sync the image with the user's movements, providing immersion in virtual reality.",
      },
      {
        q: "Do I need a powerful computer to use a virtual headset?",
        a: "It depends on the headset. Tethered VR headsets like the Oculus Rift or HTC Vive require a powerful computer for smooth performance. However, standalone headsets like Meta Quest 2 don’t need a PC, as they have built-in processors for VR experiences.",
      },
      {
        q: "What are the main applications of virtual headsets?",
        a: "Virtual headsets are mainly used in gaming, education, training simulations, virtual tourism, and healthcare. They offer immersive experiences for entertainment, skill development, remote collaboration, and therapeutic treatments like pain management or phobia exposure therapy.",
      },
    ]
    return (
      <div className="wrapper">
        <Header id="home" orders={this.state.orders} onDelete={this.deleteOrder}/>
        <div className="content">
          <SectionVirtualHeadsets />
          <Items id="top-games" items={this.state.items} onAdd={this.addToOrder}/>
          <Accordion id="faq" faqList={faqList} />
          <Footer />
        </div>
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
        isInArray = true 
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})

  }
}

export default App;
