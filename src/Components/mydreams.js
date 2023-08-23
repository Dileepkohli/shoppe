import { Paper, TextField } from '@mui/material';
import { Button } from 'bootstrap'
import React, { useEffect } from 'react';
import { useState  } from 'react';
import { useFormik } from 'formik';
import Modal from 'react-bootstrap/Modal';
import { Tab, TabList, TabPanel, Tabs  } from 'react-tabs';
import dreamServices from '../services/dreamServices';


export default function mydreams() {
    const [show, setShow] = useState(false);
    const [dreams,setDreams] = useState([]);

    useEffect(()=>{
        getDreams();
    },[])

    const getDreams = () => {
        dreamServices.getAll("dream/list").then(response => {
            if (response != undefined) {
                console.log(response);
                var testArr = response.data;
                console.log(testArr);
                setDreams(response.data)
               
            }
        })
    }

    const formik = useFormik({
        initialValues:{
            image:'',
            title:'',
            date:'',
            orderId:'',
            thoughts:''
        },
        onSubmit:(values) => {
            console.log(values)
        }
    });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='p-4'>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light p-4">
            <h2>Group Dreams</h2>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto mt-3">
                            <li class="nav-item ms-5 ">BUILD A DREAM</li>
                            <li class="nav-item ms-5">INSPIRE</li>
                            <li class="nav-item ms-5">COMMUNITY</li>
                            <li class="nav-item ms-5">MY DREAMS</li>
                            <li class="nav-item ms-5">LOGOUT</li>
                        </ul>
                    </div>
                </nav>
        </header><br/><br/><br/>
        <section>
            <div className='d-flex p-3'>
                <h4 className='text-primary'>List Of My All Dreams</h4>
                <button className='btn btn-outline-success ms-auto ' style={{width:150,height:37}} onClick={handleShow}>Create</button>
            </div>    
            <Tabs>
                <TabList className='tab'>
                    <Tab className='p-1' style={{marginLeft:-10}}><button className='btn btn-primary'>Pending</button></Tab>
                    <Tab className='p-1'><button className='btn btn-primary'>Fulfilled</button></Tab>
                </TabList>
               <TabPanel className='p-3'>
                    
               <div className='d-flex flex-wrap pt-4' style={{ marginLeft: -20 }}>
                        {dreams.map((item, index) => {
                            return <Paper className='m-4' key={index} elevation={12} style={{ width: 565, borderRadius: 20 }}>
                                
                                <section className='p-4'>
                                   <p className='text-primary'>{item.author}.17 Mar,2023</p>
                                   <div className='row p-2 d-flex'>
                                        <div className='col-sm-3' style={{marginLeft:20}} >
                                            <img className='image'    width={140} height={140} style={{borderRadius:70,}} />
                                        </div>                     
                                        <div className='col-sm-7'>
                                           <h2  className='p-5' ><BiSolidQuoteRight className='icon32'/> {item.title} <BiSolidQuoteRight className='icon32'/></h2>
                                        </div>
                                    </div>
                                    <p className='pt-2' style={{ textAlign: 'justify' }}>{item.description}</p>
                                </section>
                            </Paper>
                        })}</div>
               </TabPanel>
               <TabPanel className='p-3'>
                    Fullfill
               </TabPanel>
            </Tabs>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create Dream</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <Paper className='p-4' elevation={12}>
                                
                                    <TextField type='file' variant='standard' name='image' value={formik.values.image} onChange={formik.handleChange} fullWidth required /><br/><br/>
                                    <TextField type='text' variant='standard' name='title' value={formik.values.title}  onChange={formik.handleChange} label='Title of the dream' fullWidth required /><br/><br/>
                                    <TextField type='date' variant='standard' name='date' value={formik.values.date}  onChange={formik.handleChange} fullWidth required/><br/><br/>
                                    <TextField type='text' variant='standard' name='orderId' value={formik.values.orderId}  onChange={formik.handleChange} label='Order Id' fullWidth required/><br/><br/>
                                    <TextField type='text' variant='standard' name='thoughts' value={formik.values.thoughts}  onChange={formik.handleChange} label='Your Thoughts' fullWidth required/><br/><br/>
                                
                            </Paper>
                            <div className='d-flex pt-4'>
                                <button className='btn btn-dark ms-auto'  onClick={handleClose}>
                                  Cancel
                                </button>
                                <button className='btn btn-primary ms-4' type='submit' >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
               
            </Modal>

        </section>
        <footer></footer>
    </div>
  )
}
