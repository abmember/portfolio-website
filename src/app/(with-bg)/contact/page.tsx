'use client';
import Form from '../../components/Form/Form'
import '../../components/Background/bg_style.css';
import {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactPage: React.FC = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <>
            <div>
                <section className="contact-area">
                    <div className="container">
                        <div className="gx-row d-flex justify-content-between gap-24">
                            <div className="contact-infos">
                                <h3 data-aos="fade-up">Contact Info</h3>
                                <ul className="contact-details">
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-map-pin"></i>
                                        </div>
                                        <div className="right">
                                            <span>Location</span>
                                            <h4>Taree, New South Wales, Australia</h4>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-map-pin"></i>
                                        </div>
                                        <div className="right">
                                            <span>Email</span>
                                            <h4>abc@gmail.com</h4>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-map-pin"></i>
                                        </div>
                                        <div className="right">
                                            <span>Phone</span>
                                            <h4>+61 4 5983 6250</h4>
                                        </div>
                                    </li>
                                </ul>

                                <h3 data-aos="fade-up">My Profile</h3>
                                <ul className="social-links d-flex align-center" data-aos="zoom-in">
                                    <li><a className="shadow-box" href="https://www.linkedin.com/in/cameron95/"
                                           target="_blank" rel="noopener noreferrer"><i className="iconoir-linkedin"></i></a></li>
                                    <li><a className="shadow-box" href="https://drive.google.com/file/d/1nzOif1kATDvgbn4NRIX1QvftYuD4mFJf/"
                                           target="_blank" rel="noopener noreferrer"><i className="iconoir-search-engine"></i></a></li>
                                    <li><a className="shadow-box" href="https://github.com/abmember"
                                           target="_blank" rel="noopener noreferrer"><i className="iconoir-github"></i></a></li>

                                </ul>

                            </div>

                            <Form/>

                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default ContactPage;