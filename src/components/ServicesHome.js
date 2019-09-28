import React, { Component } from 'react'
import Title from './Title';
import {FaRegHandScissors, FaPaintBrush, FaShuttleVan,FaTree, FaHome, FaBroom, FaWalking} from "react-icons/fa";
import { IoLogoBuffer, IoIosConstruct, IoIosHand, IoIosEye} from "react-icons/io";

export default class ServicesHome extends Component {
    state={
        services:[
            {
             icon:<FaHome/>,
             title:"Affordable rooms",
             info:" some information about the service" 
            },
            {
                icon:<FaBroom/>,
                title:"High hygien",
                info:" some information about the service" 
               },
               {
                icon:<FaWalking/>,
                title:"Hiking",
                info:" some information about the service" 
               },
               {
                icon:<FaShuttleVan/>,
                title:"Transport to city",
                info:" some information about the service" 
               }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="Services"></Title>
               <div className="services-center">
                   {this.state.services.map((item, index)=>{
                       return <article key={index} className="service">
                           <span className="service">{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>

                   })}
               </div>
            </section>
        )
    }
}
