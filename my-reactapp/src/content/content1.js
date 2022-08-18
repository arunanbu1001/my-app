import React, { Component } from 'react'
import './contant1.css'
import image2 from "../images/image2.jpg"

import image1 from "../images/image1.jpg"
export class Content1 extends Component {
  render() {
    return (
      <div> 
         <div className="autem">
        <div className="c1">
            <img src={image2} alt="" />
            <h2>Autem sunt earum</h2>
            <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore
            </p>
            <div >
              <span className="spanbutton">GET STARTED </span>
            </div>
        </div>
        <div className="c1">
        <img src={image2} alt="" />
            <h2> Nobis et tempore</h2>
            <p>Ut quas omnis est. Non et aut tempora dignissimos similique in dignissimos. Sit incidunt et odit iusto
            </p>
            <div >
              <span className="spanbutton">GET STARTED </span>
            </div>
        </div>
        <div className="c1">
        <img src={image2} alt="" />
            <h2>Facere quia quae dolores</h2>
            <p> Modi ut et delectus. Modi nobis saepe voluptates nostrum. Sed quod consequatur quia provident dera</p>
            <div >
              <span className="spanbutton">GET STARTED </span>
            </div>
        </div>
    </div>
    <div className="contact-container">
    <div className="contact">

                <h2>CONTACT</h2>
                <p>Magnam dolores commodi suscipituia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <div className="map"><iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.69862189123!2d77.29696873659503!3d8.964100679884865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c15ac547f7%3A0x9a707276cd8ae327!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1652702035867!5m2!1sen!2sin"></iframe>
                </div>
            </div>
            </div>
   
      </div>
    )
  }
}

export default Content1