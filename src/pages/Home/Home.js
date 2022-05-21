import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import AppNavbar from '../AppNavbar';
import Memo from '../Memo/Memo';
import Game from '../Game/Game';
import Tools from '../Tools/Tools';
import { Modal, Button, Form } from 'react-bootstrap';
import About from './About';
import Footer from '../Footer';
import './About.css'


const Home = () => {
    const [isModalShow, setIsModalShow] = useState(false);
    const [name, setName] = useState("Stranger");

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    }

    const handleNameOnChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = () => {
        setIsModalShow(false);
    }

    const handleSkip = () => {
        setIsModalShow(false);
    }

    return (
        <div className='home-page'>
            <Modal show={isModalShow} onHide={handleSkip}>
                <Modal.Header closeButton>
                    <Modal.Title>Hello</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Tell me who you are</Form.Label>
                        <Form.Control type="name"
                            placeholder="Enter your nickname"
                            onChange={handleNameOnChange}
                            onKeyPress={handleKeyPress}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your nickname with anyone else.
                        </Form.Text>
                        <br />
                        <div className="modal-button">
                            <Button variant="primary" disabled={name === ""} onClick={handleSubmit} style={{ marginRight: "5px" }}>Submit</Button>
                            <Button variant="secondary" onClick={handleSkip}>Skip</Button>
                        </div>
                    </Form>
                </Modal.Body>

            </Modal>

            <HashRouter>
                <AppNavbar name={name} />
                <Switch>
                    <Route exact path="/" render={() => <About name={name} />} />
                    <Route path="/memo" component={Memo} />
                    <Route path="/tools" component={Tools} />
                    <Route path="/game" component={Game} />
                </Switch>
                <Footer />
            </HashRouter>
            
        </div>
    )
}

export default Home;