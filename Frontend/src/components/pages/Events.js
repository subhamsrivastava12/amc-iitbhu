import React, {useEffect, useState} from 'react';
import '../../App.css';
import '../event.css';


export default function Events() {

  const [events, setEvents] = useState([{
    
    name: '', 
    date: '',
    month: '',
    year: '',
    day: '',
    time: '',
    venue: ''
  }])

  useEffect(() => {
    fetch('https://amc-iitbhu.herokuapp.com/events')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setEvents(jsonRes))
  },[])

  return (
    <div className="event-section">
      <div className="heading">
        <h1>Our Events</h1>
        <div className="underline"></div>
      </div>
      <div className="event-card">
        <div className="meta">
          <div className="photo" style={{backgroundImage: 'url(https://bloximages.chicago2.vip.townnews.com/idahostatejournal.com/content/tncms/assets/v3/editorial/d/49/d49c4781-2898-5938-accb-1b942da145f0/576aef1365686.image.jpg?resize=1200%2C851)'}} />
          <ul className="details">
            <li className="item1">Water Rocket Pro</li>
           
          </ul>
        </div>
        <div className="description">
          <h1>Water Rocket Pro</h1>
     
          <p>Newton’s third law was never so interesting before. An event preceded by a workshop, to start your high throttle journey and let the water push your own fabricated and designed rocket to breach the sky-hall.</p>
          
        </div>
      </div>
      <div className="event-card alt">
        <div className="meta">
          <div className="photo" style={{backgroundImage: 'url(https://hartzellprop.com/wp-content/uploads/GettyImages-520239587-1200x800.jpg)'}} />
          <ul className="details">
            <li className="item1">Aviator</li>
           
          </ul>
        </div>
        <div className="description">
          <h1>Aviator</h1>
      
          <p> A series of workshops which introduces a newbie to the science of flight and teaches the nitty-gritty of fabricating an RC plane from scratch. It is followed by an event to test your concepts and design of the RC Plane.</p>
          
        </div>
      </div>
      <div className="event-card">
        <div className="meta">
          <div className="photo" style={{backgroundImage: 'url(https://www.mydronelab.com/wp-content/uploads/2016/04/Qadcopter-With-Gopro-810x456.jpg)'}} />
          <ul className="details">
            <li className="item1">Quadcopters</li>
       
          </ul>
        </div>
        <div className="description">
          <h1>Quadcopters</h1>
          
          <p>A quadcopter is the apple of any aeromodeller's eyes. A set of workshops introduces the neophytes to the vast field of quadcopter drones, their wide applications, basic design, construction and flying.</p>
         
        </div>
      </div>
      <div className="event-card alt">
        <div className="meta">
          <div className="photo" style={{backgroundImage: 'url(https://oscarliang.com/ctt/uploads/2018/06/Speedybee-F4-AIO-FC-connection-diagram-wiring-pinout.jpg)'}} />
          <ul className="details">
            <li className="item1">Flight Controllers</li>
         
          </ul>
        </div>
        <div className="description">
          <h1>Flight Controllers</h1>
       
          <p>Ever wondered about the unmistakable stability and great manoeuvrability of multi-rotors like like quadcopters or hexacopters? These are the go-to workshops! Learn about various flight controllers, their built-in sensors, processes involved in the execution of a signal and how to configure them.</p>
        </div>
      </div>
      <div className="event-card">
        <div className="meta">
          <div className="photo" style={{backgroundImage: 'url(https://content.instructables.com/ORIG/FCG/G0FN/HD4VGPZV/FCGG0FNHD4VGPZV.jpg?auto=webp&frame=1&width=800&height=1024&fit=bounds&md=dcbf86d7788ea2cfc8f24308ac8a4de5)'}} />
          <ul className="details">
            <li className="item1">Hovercraft</li>
          
          </ul>
        </div>
        <div className="description">
          <h1>Hovercraft</h1>
          
          <p>These workshops on hovercrafts- an amphibious vehicle which has gone obscure in the present ages- aim at providing an opportunity to experiment with the all-terrain craft and revive it in the modern engineering. It covers the working of an ACV(Air Cushion Vehicle) and other rudiments.</p>
        </div>
      </div>
    </div>
  );
}
