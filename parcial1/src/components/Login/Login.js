import { useState } from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { FormattedMessage } from 'react-intl';

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
                    <Row>
                        <Col>
                            <div>
                                <FormattedMessage id="Log In"></FormattedMessage>
                            </div>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Subtitle>
                                                <strong>
                                                    <FormattedMessage id="Username"></FormattedMessage>
                                                </strong>
                                            </Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input type="text" className={`form-control mb-2 ${error}`} onChange={(e) => setFormValues({ ...formValues, login: e.target.value })} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card.Subtitle>
                                                <strong>
                                                    <FormattedMessage id="Password"></FormattedMessage>
                                                </strong>
                                            </Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <input type="password" className={`form-control mb-2x ${error}`} onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <button onClick={handleSubmit}>
                                                <FormattedMessage id="Sign In"></FormattedMessage>
                                            </button>
                                        </Col>
                                        <Col>
                                            <button  onClick={handleCancel}>
                                                <FormattedMessage id="Cancel"></FormattedMessage>    
                                            </button>
                                        </Col>
                                    </Row>
                                    {error &&
                                        <Row>
                                            <Col>
                                                <p>
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