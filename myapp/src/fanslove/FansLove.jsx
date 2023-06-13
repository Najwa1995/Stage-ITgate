import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fans1 from '../assets/images/fans1.jpg'
import fans2 from '../assets/images/fans2.jpg'
import fans3 from '../assets/images/fans3.jpg'
import fans4 from '../assets/images/fans4.jpg'
import fans5 from '../assets/images/fans5.jpg'
import fans6 from '../assets/images/fans6.jpg'

const FansLove = () => {

    // testimoial
    const settings = {

        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    }
    return (

        <Slider {...settings} mb-10>

            <div className='testimonial py-4 px-3 '>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias animi, expedita, omnis esse incidunt alias quos mollitia accusantium, accusamus ex cum! Culpa explicabo veniam debitis hic obcaecati </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={fans1} className='rounded-circle w-25 h-25 shadow-1-strong' />
                    <div >
                        <h6 className='mb-0 mt-3'>Najwa Dhari</h6>
                        <p>Dhari</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3 '>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias animi, expedita, omnis esse incidunt alias quos mollitia accusantium, accusamus ex cum! Culpa explicabo veniam debitis hic obcaecati </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={fans2} className='rounded-circle w-25 h-25 shadow-1-strong' />
                    <div>
                        <h6 className='mb-0 mt-3'>Najwa Dhari</h6>
                        <p>Dhari</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3 '>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias animi, expedita, omnis esse incidunt alias quos mollitia accusantium, accusamus ex cum! Culpa explicabo veniam debitis hic obcaecati </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={fans3} className='rounded-circle w-25 h-25 shadow-1-strong' />
                    <div >
                        <h6 className='mb-0 mt-3'>Soulef Dhari</h6>
                        <p>Dhari</p>
                    </div>
                </div>
            </div>
            <div className='testimonial py-4 px-3 '>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias animi, expedita, omnis esse incidunt alias quos mollitia accusantium, accusamus ex cum! Culpa explicabo veniam debitis hic obcaecati </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={fans3} className='rounded-circle w-25 h-25 shadow-1-strong' />
                    <div >
                        <h6 className='mb-0 mt-3'>Soulef Dhari</h6>
                        <p>Dhari</p>
                    </div>
                </div>
            </div>
            <div className='testimonial py-4 px-3 '>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias animi, expedita, omnis esse incidunt alias quos mollitia accusantium, accusamus ex cum! Culpa explicabo veniam debitis hic obcaecati </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={fans5} className='rounded-circle w-25 h-25 shadow-1-strong' />
                    <div >
                        <h6 className='mb-0 mt-3'>Soulef Dhari</h6>
                        <p>Dhari</p>
                    </div>
                </div>
            </div>


        </Slider>

    )
}

export default FansLove