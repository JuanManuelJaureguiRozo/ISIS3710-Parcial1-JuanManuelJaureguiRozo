import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage } from 'react-intl';
import './Footer.css';

function Footer() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center">
                        <footer>
                            <p className="cs-footer">
                                <FormattedMessage id="Contact us"></FormattedMessage>: +57 3102105253 - info@tusegundazo.com - @tusegundazo
                            </p>
                        </footer>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;