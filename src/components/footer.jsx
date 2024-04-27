import React from 'react';

import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol>


                        <section className=''>
                            <br></br>
                            <br></br>
                            <br></br>
                        </section>

                    </MDBCol>
                    <MDBCol>


                        <section className=''>
                            <form action=''>
                                <MDBRow className='d-flex justify-content-center'>
                                    <MDBCol size="auto">
                                        <p className='pt-2'>
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </MDBCol>

                                    <MDBCol md='5' start>
                                        <MDBInput contrast type='email' label='Type ur Email address and See other projects' className='mb-4' />
                                    </MDBCol>

                                    <MDBCol size="auto">
                                        <MDBBtn outline color='light' type='submit' className='mb-4' onClick={() => window.location.href = 'https://github.com/Rajar12345'}>
                                            Subscribe
                                        </MDBBtn>

                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </section>

                    </MDBCol><MDBCol>


                        <section className=''>
                            <br></br>
                            <br></br>
                            <br></br>
                        </section>

                    </MDBCol>

                    <MDBCol>

                        <section className='mb-10'>
                            <p>
                            Discover the ultimate movie experience with our app. Access a vast library of films across genres, personalized recommendations, high-quality streaming, and exclusive content. Enjoy seamless browsing, multi-device compatibility, and interactive features. Join a thriving community of movie lovers and immerse yourself in cinematic delight like never before.                            </p>
                        </section>
                    </MDBCol>
                </MDBRow>
                <section className=''>
                    <MDBRow>
                        <MDBCol lg='5' md='6' className='mb-8 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Download Links 📥
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Watch Online ▶
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Rating  ⭐
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Reviews 💬
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Download Links 📥
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Watch Online ▶
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Rating  ⭐
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Reviews 💬
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Download Links 📥
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Watch Online ▶
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Rating  ⭐
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Reviews 💬
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Download Links 📥
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Watch Online ▶
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Rating  ⭐
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        All movies Reviews 💬
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center py-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', justifyContent: 'stretch' }}>
                <span style={{ marginRight: '40%' }}>© 2020 Copyright:</span>
                <a className='text-white' href='https://github.com/Rajar12345'>
                ©️PROHUB
                </a>
            </div>
        </MDBFooter>
    );
}
