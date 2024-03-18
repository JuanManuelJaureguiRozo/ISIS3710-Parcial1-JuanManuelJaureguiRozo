import React from 'react';
import Row from 'react-bootstrap/Row';
import './Header.css';

function Header() {
    return (
        <>
            <Row className="cs-h1-header">
                <h1>TuSegundazo.com</h1>
            </Row>
            <Row className="hr-row">
                <hr className="cs-hr" />
            </Row>
            <Row className="cs-image">
                <img src="/header.png" alt="header" />
            </Row>
            <Row className="hr-row">
                <hr className="cs-hr2" />
            </Row>
        </>
    );
}

export default Header;

