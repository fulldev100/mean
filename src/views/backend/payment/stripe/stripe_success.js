import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Spinner } from 'loading-animations-react';
import Session from 'supertokens-auth-react/recipe/session';
import { useHistory, useLocation } from "react-router-dom";

const StripeSuccess = (props) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const location = useLocation();
    const history = useHistory();
    const params = new URLSearchParams(location.search);
    
    let user_id = Session.getUserId();
    const session_id = params.get('session_id');
    console.log(session_id)

    if(!session_id) {
        history.goBack();
    }

    const lightningUrl = process.env.REACT_APP_LIGHTNING_URL || "https://lightning.playfullscreen.a2hosted.com";
    const backendUrl = process.env.REACT_APP_API_URL || "https://btc.cdn.playfullscreen.com:3001";

    const getCheckoutDetail = async () => {
        fetch(backendUrl+"/users/stripe/saveCheckoutDetail", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({session_id})
        }).then( res => res.json() )
        .then(data => {
            if(data.success) {
                data.type == 'archive'? history.push('/archive'):history.push('/live');
            }
        })
        .catch(error => {
            console.error(error);
        });
        
    }

    useEffect(() => {
        setIsProcessing(true);
        (async () => {
            if (await Session.doesSessionExist()) {
                let jwt = (await Session.getAccessTokenPayloadSecurely()).jwt;
                console.log(user_id, jwt)
            }
        })();

        getCheckoutDetail();
    }, []);

    return (
        <>
            <div className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50">  
                <Container fluid> 
                    <Row className="align-items-center">
                        <Col sm="12">
                            <nav aria-label="breadcrumb" className="text-center iq-breadcrumb-two">
                                <h2 className="title">Stripe Checkout Successed.</h2>
                            </nav>
                        </Col>
                    </Row> 
                </Container>
            </div>
            <main id="main" className="site-main">
                <Container>
                    <Row>
                        <Col lg="12" sm="12">
                            <Row className="contact-detail text-center">
                                <Col md="4">
                                    
                                </Col>
                                <Col md="4">
                                    <div className="iq-contact-list" data-element_type="column">
                                        <div className="icon-box">
                                            <span className="icon-svg icon-svg d-flex justify-content-center">
                                                {isProcessing ? <div className='spinner-container'><Spinner className="stripe-spinner" color1="#0099ff" color2="#206eff" text="" /></div>:<button style={{marginTop: 20}} className='btn btn-primary text-white' type='button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" id="IconChangeColor" height="25" width="25"><path d="M492.4 220.8c-8.9 0-18.7 6.7-18.7 22.7h36.7c0-16-9.3-22.7-18-22.7zM375 223.4c-8.2 0-13.3 2.9-17 7l.2 52.8c3.5 3.7 8.5 6.7 16.8 6.7 13.1 0 21.9-14.3 21.9-33.4 0-18.6-9-33.2-21.9-33.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM122.2 281.1c0 25.6-20.3 40.1-49.9 40.3-12.2 0-25.6-2.4-38.8-8.1v-33.9c12 6.4 27.1 11.3 38.9 11.3 7.9 0 13.6-2.1 13.6-8.7 0-17-54-10.6-54-49.9 0-25.2 19.2-40.2 48-40.2 11.8 0 23.5 1.8 35.3 6.5v33.4c-10.8-5.8-24.5-9.1-35.3-9.1-7.5 0-12.1 2.2-12.1 7.7 0 16 54.3 8.4 54.3 50.7zm68.8-56.6h-27V275c0 20.9 22.5 14.4 27 12.6v28.9c-4.7 2.6-13.3 4.7-24.9 4.7-21.1 0-36.9-15.5-36.9-36.5l.2-113.9 34.7-7.4v30.8H191zm74 2.4c-4.5-1.5-18.7-3.6-27.1 7.4v84.4h-35.5V194.2h30.7l2.2 10.5c8.3-15.3 24.9-12.2 29.6-10.5h.1zm44.1 91.8h-35.7V194.2h35.7zm0-142.9l-35.7 7.6v-28.9l35.7-7.6zm74.1 145.5c-12.4 0-20-5.3-25.1-9l-.1 40.2-35.5 7.5V194.2h31.3l1.8 8.8c4.9-4.5 13.9-11.1 27.8-11.1 24.9 0 48.4 22.5 48.4 63.8 0 45.1-23.2 65.5-48.6 65.6zm160.4-51.5h-69.5c1.6 16.6 13.8 21.5 27.6 21.5 14.1 0 25.2-3 34.9-7.9V312c-9.7 5.3-22.4 9.2-39.4 9.2-34.6 0-58.8-21.7-58.8-64.5 0-36.2 20.5-64.9 54.3-64.9 33.7 0 51.3 28.7 51.3 65.1 0 3.5-.3 10.9-.4 12.9z" id="mainIconPathAttribute" fill="#ffffff"></path></svg> &nbsp;&nbsp;Pay by Stripe</button>}
                                            </span>
                                        </div>                           
                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">
                                                <span>Please Wait...</span>
                                            </h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}
export default StripeSuccess;