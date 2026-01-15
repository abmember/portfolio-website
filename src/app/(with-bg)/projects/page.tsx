'use client';
import '../../components/Background/bg_style.css';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

const WorkPage: React.FC = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <>
            <section className="projects-area">
                <div className="container">
                    <h1 className="section-heading" data-aos="fade-up"><img src="/images/star-2.png"
                                                                            alt=""/> All Projects <img
                        src="/images/star-2.png" alt="Star"/></h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div data-aos="zoom-in">
                                <div className="project-item shadow-box">
                                    <Link className="overlay-link" href="https://devpost.com/software/elenchus-lvjeki"
                                          target="_blank" rel="noopener noreferrer"></Link>
                                    <img src="/images/ele1.png" alt="" className="bg-img"/>
                                    <div className="project-img">
                                        <img src="/images/projects/update5172025/v1/ele1.png" style={{width: '350px', height: '300px'}} alt="PrescribeRX "/>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>Astro JS, MERN</p>
                                            <h2>Elenchus App</h2>
                                            <p style={{fontSize: '14px'}}>Research Tool</p>
                                        </div>
                                        <Link href="https://devpost.com/software/elenchus-lvjeki" target="_blank" rel="noopener noreferrer"
                                              className="project-btn">
                                            <img src="/images/icon.svg" alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in">
                                <div className="project-item shadow-box">
                                    <Link className="overlay-link" href="https://www.cartier.com/en-au"
                                          target="_blank" rel="noopener noreferrer"></Link>
                                    <img src="/images/bg1.png" alt="" className="bg-img"/>
                                    <div className="project-img">
                                        <img src="/images/projects/update5172025/v1/car1.png" style={{width: '350px', height: '300px'}} alt="Cartier"/>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>React, Three.js</p>
                                            <h2>Cartier</h2>
                                            <p style={{fontSize: '14px'}}>Watchmaker Offical Website</p>
                                        </div>
                                        <Link href="https://www.cartier.com/en-au" target="_blank" rel="noopener noreferrer"
                                              className="project-btn">
                                            <img src="/images/icon.svg" alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in">
                                <div className="project-item shadow-box">
                                    <Link className="overlay-link" href="https://ozcart.com/"
                                          target="_blank" rel="noopener noreferrer"></Link>
                                    <img src="/images/bg1.png" alt="" className="bg-img"/>
                                    <div className="project-img">
                                        <img src="/images/projects/update5172025/v1/cart1.png" style={{width: '350px', height: '300px'}} alt="cart1"/>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>GSAP, PHP, MySQL</p>
                                            <h2>Ozcart</h2>
                                            <p style={{fontSize: '14px'}}>
                                                Ozcart is a hosted online shopping cart solution with country-specific features.
                                            </p>
                                        </div>
                                        <Link href="https://ozcart.com/" target="_blank" rel="noopener noreferrer"
                                              className="project-btn">
                                            <img src="/images/icon.svg" alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <h2 className="section-heading" data-aos="fade-up"><img src="/images/star-2.png"
                                                                                    alt=""/> All Projects <img
                                src="/images/star-2.png" alt="Star"/></h2>

                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <Link className="overlay-link"
                                              href="https://devpost.com/software/tatacliq-platform"
                                              target="_blank" rel="noopener noreferrer"></Link>
                                        <img src="/images/bg1.png" alt="" className="bg-img"/>
                                        <div className="project-img">
                                            <img src="/images/projects/update5172025/v1/fab1.png"
                                                 style={{width: '350px', height: '300px'}}
                                                 alt="The Fabulous"/>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>Android, Mobile App</p>
                                                <h2>The Fabulous</h2>
                                                <p style={{fontSize: '16px'}}>Child Safety & Vehicle Integration</p>
                                            </div>
                                            <Link href="https://devpost.com/software/tatacliq-platform"
                                                  target="_blank" rel="noopener noreferrer" className="project-btn">
                                                <img src="/images/icon.svg" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <Link className="overlay-link"
                                              href="https://devpost.com/software/crowdchain"
                                              target="_blank" rel="noopener noreferrer"></Link>
                                        <img src="/images/bg1.png" alt="" className="bg-img"/>
                                        <div className="project-img">
                                            <img src="/images/projects/update5172025/v1/crod1.png"
                                                 style={{width: '350px', height: '300px'}} alt="CrowdChain"/>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>Next, TypeScript, Solidity, Wagmi</p>
                                                <h2>CrowdChain</h2>
                                                <p style={{fontSize: '14px'}}>Blockchain and Crypto Project</p>
                                            </div>
                                            <Link href="https://devpost.com/software/e-commerce-app-b5lrem"
                                                  target="_blank" rel="noopener noreferrer"
                                                  className="project-btn">
                                                <img src="/images/icon.svg" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <Link className="overlay-link" href="https://devpost.com/software/cryptus-nine"
                                              target="_blank" rel="noopener noreferrer"></Link>
                                        <img src="/images/bg1.png" alt="" className="bg-img"/>
                                        <div className="project-img">
                                            <img src="/images/projects/update5172025/v1/cry2.png" style={{width: '350px', height: '300px'}} alt="AstrosDebugger"/>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>Next.js, TypeScript, TailwindCSS</p>
                                                <h2>Cryptus Nine</h2>
                                                <p style={{fontSize: '14px'}}>Data-Driven Debugging Tool</p>
                                            </div>
                                            <Link href="https://devpost.com/software/cryptus-nine" target="_blank" rel="noopener noreferrer"
                                                  className="project-btn">
                                                <img src="/images/icon.svg" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <Link className="overlay-link" href="https://www.jacadatravel.com/"
                                              target="_blank" rel="noopener noreferrer"></Link>
                                        <img src="/images/bg1.png" alt="" className="bg-img"/>
                                        <div className="project-img">
                                            <img src="/images/projects/update5172025/v1/jaca.png" style={{width: '350px', height: '300px'}}
                                                 alt="$SeeTheFuture"/>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>React, Next.js, PHP, MySQL</p>
                                                <h2>Jacada</h2>
                                                <p style={{fontSize: '14px'}}>Tours in Australia</p>
                                            </div>
                                            <Link href="https://devpost.com/software/seethefuture" target="_blank" rel="noopener noreferrer"
                                                  className="project-btn">
                                                <img src="/images/icon.svg" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">

                                        <img src="/images/bg1.png" alt="" className="bg-img"/>
                                        <div className="project-img">
                                            <img src="/images/projects/update5172025/v1/soon.png"
                                                 style={{width: '350px', height: '300px'}}
                                                 alt="RestoreIO"/>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">

                                        <img src="/images/bg1.png" alt="" className="bg-img"/>
                                        <div className="project-img">
                                            <img src="/images/projects/update5172025/v1/soon.png"
                                                 style={{width: '350px', height: '300px'}} alt="MemoryPalace"/>
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

export default WorkPage;