'use client';
import '../../components/Background/bg_style.css';
import '../../globals.css'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";


const AboutPage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <>
            <section className="about-area">
                <div className="container">
                    <div className="d-flex about-me-wrap align-items-start gap-24">
                        <div data-aos="zoom-in">
                            <div className="about-image-box shadow-box">
                                <img src="/images/bg1.png" alt="" className="bg-img"/>
                                <div className="image-inner">
                                    <img src="/images/LOGO/aboutme.png" alt="About Me"/>
                                </div>
                            </div>
                        </div>

                        <div className="about-details" data-aos="zoom-in">
                            <h2 className="section-heading" data-aos="fade-up"><img src="/images/star-2.png"
                                                                                    alt="Star"/> Self-summary <img
                                src="/images/star-2.png" alt=""/></h2>
                            <div className="about-details-inner shadow-box">
                                <img src="/images/icon2.png" alt=""/>
                                <h1 style={{marginTop: '-35px'}}><span>Cameron Cooke</span></h1>
                                <p>
                                    Senior Full-Stack Developer with 7+ years of experience building scalable web and mobile applications using modern stacks like React, TypeScript, Node.js, Next.js, and Python/Django. 
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="row mt-24">
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-edc-exp about-experience shadow-box">
                                <img src="/images/bg1.png" alt="" className="bg-img"/>
                                <h2>EXPERIENCE</h2>

                                <ul>
                                    <li>
                                            <p className="date">11/2024 - Present</p>
                                            <h2>Senior Full-Stack Developer</h2>
                                            <p className="type"><Link href="https://redisoftware.com.au/"
                                                                    style={{color: '#98D2E6', fontSize: '18px'}} target='_blank'>Redi Software</Link>
                                            </p>
                                    </li>
                                    <li>
                                        <p className="date">05/2023 - 10/2024</p>
                                        <h2>Full-Stack Developer</h2>
                                        <p className="type"><Link href="https://softcircles.com/"
                                                                    style={{color: '#98D2E6', fontSize: '18px'}}>SoftCircles</Link></p>
                                    </li>
                                    <li>
                                        <p className="date">09/2021 - 04/2023</p>
                                        <h2>Web Developer</h2>
                                        <p className="type"><Link href="https://www.lancesoft.com/"
                                                                    style={{color: '#98D2E6', fontSize: '18px'}}>LanceSoft Inc</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-edc-exp about-education shadow-box">
                                <img src="/images/bg1.png" alt="" className="bg-img"/>
                                <ul>
                                    <li>
                                        <p className="date">03/2019 - 08/2021</p>
                                        <h2>Front-End Developer</h2>
                                        <p className="type"><Link href="https://www.phocassoftware.com/"
                                                                  style={{color: '#98D2E6', fontSize: '18px'}}>Phocas Software</Link></p>
                                    </li>
                                    <li>
                                        <p className="date">12/2017 - 02/2019</p>
                                        <h2>Jnuior Front-End Developer</h2>
                                        <p className="type"><Link href="https://ausnepit.com.au/"
                                                                  style={{color: '#98D2E6', fontSize: '18px'}}>Odesа
                                            AusNep IT Solutions</Link></p>
                                    </li>
                                </ul>
                                <hr />
                                <h2>EDUCATION</h2>
                                <ul>
                                    <li>
                                        <p className="date">2014 - 2017</p>
                                        <h2>B.S. in Computer Science</h2>
                                        <p className="type"><Link href="https://www.uts.edu.au/"
                                                                  style={{color: '#98D2E6', fontSize: '18px'}}>University of Technology Sydney</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-24">
                        <div className="col-md-12">
                            <div className="d-flex profile-contact-credentials-wrap gap-24">

                                <div data-aos="zoom-in">
                                    <div className="about-profile-box info-box shadow-box h-full">
                                        <img src="/images/bg1.png" alt="" className="bg-img"/>
                                        <div className="inner-profile-icons shadow-box">
                                            <Link target="_blank" rel="noopener noreferrer" className="linkedln"
                                                  href="https://www.linkedin.com/in/cameron95/">
                                                <i className="iconoir-linkedin"></i>
                                            </Link>
                                            <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1nzOif1kATDvgbn4NRIX1QvftYuD4mFJf">
                                                <i className="iconoir-search-engine"></i>
                                            </Link>
                                            <Link target="_blank" rel="noopener noreferrer"
                                                  href="https://github.com/abmember">
                                                <i className="iconoir-github"></i>
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>LET&apos;S CONNECT</h4>
                                                <h2>My Social Profiles</h2>
                                            </div>

                                            <Link href='../contact' className="about-btn">
                                                <img src="/images/icon.svg" alt=""/>
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="about-contact-box info-box shadow-box">
                                        <Link className="overlay-link" href='../contact'></Link>
                                        <img src="/images/bg1.png" alt="" className="bg-img"/>
                                        <img src="/images/icon2.png" alt="" className="star-icon"/>
                                        <h2>Let&apos;s <br/>work <span>together.</span></h2>
                                        <Link href='../contact' className="about-btn">
                                            <img src="/images/icon.svg" alt="Button"/>
                                        </Link>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="h-full">
                                    <div className="about-crenditials-box info-box shadow-box">
                                        <Link className="overlay-link" href="https://drive.google.com/file/d/1nzOif1kATDvgbn4NRIX1QvftYuD4mFJf" target="_blank" rel="noopener noreferrer"></Link>
                                        <img src="/images/bg1.png" alt="" className="bg-img"/>
                                        <img src="/images/resume.png" style={{height: '124px'}} alt="Resume preview icon"/>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>View My </h4>
                                                <h2>Updated Resume</h2>
                                            </div>

                                            <a href="https://drive.google.com/file/d/1nzOif1kATDvgbn4NRIX1QvftYuD4mFJf" target="_blank" rel="noopener noreferrer" className="about-btn">
                                                <img src="/images/icon.svg" alt=""/>
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default AboutPage;