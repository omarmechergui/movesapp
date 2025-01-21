import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Editfilme({film ,movies }) {
   const [show, setShow] = useState(false);
const [title, settitle] = useState(film.title);
const [poster, setposter] = useState(film.poster);
const [ratings, setratings] = useState(film.ratings);
const [trailer, settrailer] = useState(film.trailer);
const [Description, setDescription] = useState(film.Description);
const [year, setyear] = useState(film.year);
const [dirctor, setdirctor] = useState(film.dirctor);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (newid) => {
        const newfilme = {
            id : film.id,
            title,
            poster,
            ratings,
            trailer,
            Description,
            year,
            dirctor,
        }
        const newlistfilmes = [...movies, newfilme];
        handleClose();
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                edit filme
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="title"
                                autoFocus
                                onChange={(e) => settitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>poster</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="poster"
                                autoFocus
                                onChange={(e) => setposter(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ratings</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="ratings"
                                min="0.5"
                                max="10"
                                step="0.5"
                                autoFocus
                                onChange={(e) => setratings(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>trailer</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="trailer"
                                autoFocus
                                onChange={(e) => settrailer(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>year</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="year"
                                autoFocus
                                onChange={(e) => setyear(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>dirctor</Form.Label>
                            <Form.Control
                                type="title"
                                placeholder="dirctor"
                                autoFocus
                                onchange={(e) => setdirctor(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Editfilme;