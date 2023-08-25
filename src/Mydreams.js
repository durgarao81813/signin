import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import './mydreams.css'
import { Paper } from '@mui/material';


export default function Mydreams() {
    const [show, setShow] = useState(false);
    const [data, setdata] = useState([]);
    const [submit, setsubmit] = useState(true);
    const [editindex, seteditindex] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formik = useFormik({
        initialValues: {
            image: "",
            title: "",
            date: "",
            orderId: "",
            thoughts: ""
        },
        onSubmit: (values) => {
            if (submit) {
                setdata(prev => [...prev, values])
                formik.resetForm()
                handleClose()

            }
            else {
                
                
                const newdata=data
                newdata.splice(editindex,1,values)
                setdata(newdata)
                formik.resetForm()
                handleClose()
                
            }
        }
    })

    const deleteOf = (i) => {
        const newdata = [...data]
        newdata.splice(i, 1)
        setdata(newdata)


    }

    const createdream = () => {
        setsubmit(true)
        handleShow()

    }

    const editOf = (i) => {
        setsubmit(false)
        seteditindex(i)
        handleShow()
        
        

    }

    


    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='row m-2'>
                    <div className='col-12 d-flex justify-content-end ms-auto'>

                        <Button variant="secondary" onClick={createdream}>
                            Create Dream
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create card</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={formik.handleSubmit}>
                                    <Form >
                                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                            <Form.Control size="sm" type="file" placeholder="Small text" name="image" value={formik.values.image} onChange={formik.handleChange} required />
                                        </Form.Group>
                                        <Form.Group
                                            className="mt-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Control size="sm" type="text" placeholder="Title" name="title" value={formik.values.title} onChange={formik.handleChange} required />
                                        </Form.Group>
                                        <Form.Group
                                            className="mt-3" x
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Control size="sm" type="date" placeholder="" name="date" value={formik.values.date} onChange={formik.handleChange} required />
                                        </Form.Group>
                                        <Form.Group
                                            className="mt-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Control size="sm" type="text" placeholder="Order Id:" value={formik.values.orderId} name="orderId" onChange={formik.handleChange} required />
                                        </Form.Group>
                                        <Form.Group
                                            className="mt-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Control size="sm" type="text" placeholder="Your Toughts" value={formik.values.thoughts} name="thoughts" onChange={formik.handleChange} required />
                                        </Form.Group>
                                    </Form>
                                    <hr />
                                    <Button variant="secondary" className="m-1" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" className="m-1" type="submit">
                                        Submit
                                    </Button>
                                </form>
                            </Modal.Body>

                        </Modal>







                    </div>
                </div>
                <div >
                    <div className='d-flex flex-wrap'>
                        {
                            data.map((eachitem, i) => {
                                return (
                                    <Paper elevation={10} style={{ "border-radius": "20px", "width": "650px" }} className='m-3 p-3'>
                                        {console.log(i)}
                                        <div>
                                            <div className='d-flex'>
                                                <a href="name" className='mt-2'>durgarao81813@gmail.com</a>
                                                <div className='ms-auto'>
                                                    <button className='btn' key={i} onClick={() => editOf(i)}><BiEdit style={{ "font-size": "40px" }} /></button>
                                                    <button className='btn' key={i} onClick={() => deleteOf(i)}><RiDeleteBin6Line style={{ "font-size": "40px" }} /></button>
                                                </div>
                                            </div>
                                            <div className='border d-flex row p-3'>
                                                <div className='col-sm-3'>
                                                    <img src="avatar.avif" alt="props" height={110} width={110} className='imageround' />

                                                </div>
                                                <div className='col-sm-5 mt-3'>
                                                    <h3 className='h-2'>{eachitem.title}</h3>
                                                    <h5>Upcoming:{eachitem.date}</h5>

                                                    <h5 className='mt-1'>OrderId:{eachitem.orderId}</h5>

                                                </div>
                                                <div className='col-sm-4 mt-4'>
                                                    <button className='btn btn-primary rounded-pill ml-5'>pending</button>

                                                </div>




                                            </div>
                                            <div className='border p-3 ' style={{ "text-align": "justify" }}>
                                                <p>{eachitem.thoughts}</p>

                                            </div>
                                        </div>

                                    </Paper>


                                )
                            })
                        }
                    </div>

                </div>



            </div>
            <Footer />
        </>



    )
}
