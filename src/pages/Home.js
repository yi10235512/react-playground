import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import AppNavbar from './AppNavbar';
import Memo from './Memo/Memo';
import Game from './Game/Game';
import Calculator from './Calculator/Calculator';
import Tools from './Tools/Tools';
import { Modal, Button, Form } from 'react-bootstrap';


const Home = () => {
    const [ isModalShow, setIsModalShow] = useState(true);
    const [ name, setName] = useState("");

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
        if(name === "") {
            setName("Stranger");
        }
    }

    return (
        <React.Fragment>
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
                        <Button variant="primary" disabled={name === ""} onClick={handleSubmit} style={{marginRight: "5px"}}>Submit</Button>
                        <Button variant="secondary" onClick={handleSkip}>Skip</Button>
                    </div>
                </Form>
                </Modal.Body>
                
            </Modal>

            <HashRouter>
                <AppNavbar/>
                <Switch>
                    <Route exact path="/" render={() => <About name={name} />} />
                    <Route path="/memo" component={Memo} />
                    <Route path="/calculator" component={Calculator} />
                    <Route path="/game" component={Game} />
                    <Route path="/tools" component={Tools} />
                </Switch>
            </HashRouter>
        </React.Fragment>
    )
}

const About = ({name}) => {
    return(
        <div>
            <h1> Hi! {name}!</h1>
            <h1> This is about page.</h1>
        </div>
    )
}

export default Home;