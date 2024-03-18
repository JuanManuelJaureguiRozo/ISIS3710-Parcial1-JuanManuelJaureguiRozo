import { useState } from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { FormattedMessage } from 'react-intl';
import './Login.css';

function Login() {

    const [formValues, setFormValues] = useState({ login: "", password: "" });
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        })
            .then(response => {
                if (response.status === 200) {
                    setError(false);
                    window.location.href = "/cars";
                } else {
                    setError(true);
                }
            })
            .catch(error => {
                console.log(error);
            }
            );
    }

    const handleCancel = (e) => {
        window.location.href = "/";
    }

    return (
        <>
            <div>
                    <Row className="justify-content-center align-items-center">
                        <Col xs={11} md={9} xl={6} xxl={6}>
                            <div className="cs-row-sesion">
                                <FormattedMessage id="Log In"></FormattedMessage>
                            </div>
                            <Card className="cs-row">
                                <Card.Body className="cs-card-body">
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <Card.Subtitle className="cs-username">
                                                <strong>
                                                    <FormattedMessage id="Username"></FormattedMessage>
                                                </strong>
                                            </Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <input type="text" className={`custom-textbox ${error ? 'border border-danger' : ''}`} onChange={(e) => setFormValues({ ...formValues, login: e.target.value })} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <Card.Subtitle className="cs-username">
                                                <strong>
                                                    <FormattedMessage id="Password"></FormattedMessage>
                                                </strong>
                                            </Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <input type="password" className={`custom-textbox ${error ? 'border border-danger' : ''}`} onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} />
                                        </Col>
                                    </Row>
                                    <Row className="cs-row-buttons">
                                        <Col xs={6} md={6}>
                                            <button className="cs-sign-button" onClick={handleSubmit}>
                                                <FormattedMessage id="Sign In"></FormattedMessage>
                                            </button>
                                        </Col>
                                        <Col xs={6} md={6} className="text-end">
                                            <button className="cs-logout-button" onClick={handleCancel}>
                                                <FormattedMessage id="Cancel"></FormattedMessage>    
                                            </button>
                                        </Col>
                                    </Row>
                                    {error &&
                                        <Row>
                                            <Col xs={12} md={12} xl={12} xxl={12}>
                                                <p className="error-cs">
                                                    <FormattedMessage id="Authentication error. Check your credentials"></FormattedMessage>
                                                </p>
                                            </Col>
                                        </Row>
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </div >
        </>
    );

}

export default Login;