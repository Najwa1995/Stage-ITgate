import React from 'react'
import ServiceCard from "./ServiceCard"
import { Col } from "react-bootstrap"

import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import img9 from '../assets/images/img9.jpg'

const ServiceList = () => {

    const serviceData = [


        {
            imgUrl: img7,
            title: "dhahri najwa",
            desc: "Lorem  ipsum dolor sit amet"
        },
        {
            imgUrl: img8,
            title: "dhahri najwa",
            desc: "Lorem  ipsum dolor sit amet"
        },

        {
            imgUrl: img9,
            title: "dhahri najwa",
            desc: "Lorem  ipsum dolor sit amet"
        }


    ]
    return (
        <>
            {
                serviceData.map((item, index) =>
                    <Col lg="3" key={index}><
                        ServiceCard item={item} /></Col>)
            }
        </>
    )
}

export default ServiceList