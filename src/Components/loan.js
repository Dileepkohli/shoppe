
import * as React from 'react';
import { FiHome } from 'react-icons/fi'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Paper, TextField } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';




const Loan = () => {

    return (
        <div className="container-fluid main">
            <div className='row'>
                <div className='col-md-4  bg-dark first text-white '>

                    <Timeline className='mt-5 mr-4' >
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className='timeline py-0 px-2 bg-white text-dark'>1</TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='mt-2'>Build Your dreams</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className='timeline py-0 px-2 bg-white text-dark'>2</TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='mt-2'>House selected</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className='timeline py-0 px-2 bg-white text-dark'>3</TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='mt-2'>Types of home </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className='timeline py-0 px-2 bg-white text-dark'>4</TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='mt-2'>Property Usage</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className='timeline py-0 px-2 bg-white text-dark'>5</TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='mt-2'>loan details</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className='timeline py-0 px-2 bg-white text-dark'>6</TimelineDot>

                            </TimelineSeparator>
                            <TimelineContent className='mt-2'>Credit score </TimelineContent>
                        </TimelineItem>

                    </Timeline>



                    <div className='d-flex flex-column align-items-center'>
                        <p>Let's start your dream</p>
                        <p>in a few steps!</p>

                    </div>


                </div>
                <div className='col-md-8' style={{ "height": "100vh" }}>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-end mt-3'>
                            <FiHome className='iconsize' />
                        </div>
                    </div>
                    <div className='row m-3'>
                        <div className='col-12 '>
                            <h1>Loan and Additional Details</h1>
                        </div>
                    </div>
                    <div className='row m-3'>
                        <Paper elevation={10} style={{ "margin-top": "20px", "margin-bottom": "20px", }}>
                            <div className='col-12 ml-0'>
                                <ul class="nav nav-tabs m-2">
                                    <li class="active settingshead col-md-4"><a href="#first" data-toggle="tab" className='h3 text-decoration-none'>Home Refinance Flow1</a></li>
                                    <li class="settingshead col-md-4"><a href="#second" data-toggle="tab" className='h3 text-decoration-none'>Home Refinance Flow2</a></li>
                                    <li class="settingshead col-md-4"><a href="#third" data-toggle="tab" className='h3 text-decoration-none'>Home Refinance Flow3</a></li>

                                </ul>
                            </div>

                            <div class=" col-12 mt-3 tab-content">
                                <div class="tab-pane active p-2 m-3" id="first">
                                    <div >
                                        <TextField
                                            id="standard-number"
                                            label="What is the balance on your principal ?"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,

                                            }}
                                            variant="standard"
                                            placeholder='$'
                                            style={{ "width": "100%", }}
                                            sx={{ m: 2 }}
                                        />
                                        <TextField
                                            id="standard-number"
                                            label="What is your estimated home value ?"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                            placeholder='$'
                                            style={{ "width": "100%" }}
                                            sx={{ m: 2 }}
                                        />
                                        <TextField
                                            id="standard-number"
                                            label="What is your household income ?"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                            placeholder='$'
                                            style={{ "width": "100%" }}
                                            sx={{ m: 2 }}
                                        />

                                    </div>
                                </div>
                                <div class="tab-pane p-2 m-3" id="second">
                                    <div class="namedesig">
                                        <div>
                                            <p className='h3 text-secondary'>Do You have a second mortagag?</p>
                                            <br />
                                            <div>
                                                <input type="radio" className='btn-check ' name="first-one" id="success-outlined" />
                                                <label class="btn btn-outline-primary leftside" for="success-outlined">Yes</label>
                                                <input type="radio" className='btn-check' name="first-one" id="success-outlined2" />
                                                <label class="btn btn-outline-primary rightside" for="success-outlined2">No</label>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='h3 text-secondary'>Are you or your spouse in the military. reserve member or verteran </p>
                                            <br />
                                            <div>
                                                <input type="radio" className='btn-check ' name="second-one" id="success-outlined-3" />
                                                <label class="btn btn-outline-primary leftside" for="success-outlined-3">Yes</label>
                                                <input type="radio" className='btn-check' name="second-one" id="success-outlined-4" />
                                                <label class="btn btn-outline-primary rightside" for="success-outlined-4">No</label>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='h3 text-secondary'>Have you been late on your mortgage payment within last year </p>
                                            <br />
                                            <div>
                                                <input type="radio" className='btn-check ' name="third" id="success-outlined5" />
                                                <label class="btn btn-outline-primary leftside" for="success-outlined5">No</label>
                                                <input type="radio" className='btn-check ' name="third" id="success-outlined6" />
                                                <label class="btn btn-outline-primary middle" for="success-outlined6">1 time </label>
                                                <input type="radio" className='btn-check ' name="third" id="success-outlined7" />
                                                <label class="btn btn-outline-primary middle" for="success-outlined7">2 times </label>
                                                <input type="radio" className='btn-check' name="third" id="success-outlined8" />
                                                <label class="btn btn-outline-primary rightsidelong" for="success-outlined8">More than 2 times </label>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='h3 text-secondary'>Have you filed for Bankrupcy or Foreclosure within the last 7 year? </p>
                                            <br />
                                            <div>
                                                <input type="radio" className='btn-check ' name="four" id="success-outlined9" />
                                                <label class="btn btn-outline-primary leftside" for="success-outlined9">No</label>
                                                <input type="radio" className='btn-check ' name="four" id="success-outlined10" />
                                                <label class="btn btn-outline-primary middle" for="success-outlined10" style={{ "width": "90px" }}>Bankrupcy </label>
                                                <input type="radio" className='btn-check' name="four" id="success-outlined11" />
                                                <label class="btn btn-outline-primary rightsidelong" for="success-outlined11">Foreclosure </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="third">
                                    <div class="namedesig p-2 m-3">
                                        <div>
                                            <p className='h3 text-secondary'>Select your employment status? </p>
                                            <br />
                                            <div>
                                                <input type="radio" className='btn-check ' name="third-one" id="success-outlined20" />
                                                <label class="btn btn-outline-primary leftside" for="success-outlined20" style={{ "width": "90px" }}>Empolyed</label>
                                                <input type="radio" className='btn-check ' name="third-one" id="success-outlined21" />
                                                <label class="btn btn-outline-primary middle" for="success-outlined21" style={{ "width": "100px" }}>Unemployed </label>
                                                <input type="radio" className='btn-check ' name="third-one" id="success-outlined22" />
                                                <label class="btn btn-outline-primary middle" for="success-outlined22" style={{ "width": "110px" }}>Self Employed </label>
                                                <input type="radio" className='btn-check ' name="third-one" id="success-outlined23" />
                                                <label class="btn btn-outline-primary middle" for="success-outlined23" style={{ "width": "100px" }}>Retired</label>
                                                <input type="radio" className='btn-check ' name="third-one" id="success-outlined24" />
                                                <label class="btn btn-outline-primary middle" for="success-outlined24" style={{ "width": "70px" }}>Military </label>
                                                <input type="radio" className='btn-check' name="third-one" id="success-outlined25" />
                                                <label class="btn btn-outline-primary rightsidelong" for="success-outlined25">Others </label>
                                            </div>
                                        </div>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Age
                                        </InputLabel>
                                        <NativeSelect
                                            defaultValue={30}
                                            inputProps={{
                                                name: 'age',
                                                id: 'uncontrolled-native',
                                            }}
                                            style={{"width":"100%","margin-top":"0px"}}>
                                        
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>30 years fixed</option>
                                        </NativeSelect>
                                        <TextField
                                            id="standard-number"
                                            label="What is your interest rate?"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,

                                            }}
                                            variant="standard"
                                            placeholder=''
                                            style={{ "width": "100%", }}
                                            
                                        />
                                        <TextField
                                            id="standard-number"
                                            label="What is your Zip code?"
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true,

                                            }}
                                            variant="standard"
                                            placeholder=''
                                            style={{ "width": "100%", }}
                                            
                                        />
                                        <div>
                                            <p className='h3 text-secondary'>What is your desired savings? </p>
                                            <br />
                                            <div>
                                                <input type="radio" className='btn-check ' name="final" id="success-outlined-22" />
                                                <label class="btn btn-outline-primary leftside" for="success-outlined-22" style={{"width":"90px"}}>$Per month</label>
                                                <input type="radio" className='btn-check' name="final" id="success-outlined-23" />
                                                <label class="btn btn-outline-primary rightside" for="success-outlined-23"style={{"width":"90px"}}>intrest %</label>
                                            </div>
                                        </div>
                                        <TextField
                                            id="standard-number"
                                            label=""
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,

                                            }}
                                            variant="standard"
                                            placeholder=''
                                            style={{ "width": "100%", }}
                                            
                                        />
                                    </div>
                                </div>

                            </div>
                        </Paper>
                        <div className='col-12 m-2'>
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-outline-primary m-2 buttonfinal rounded-pill'><AiOutlineArrowLeft /> Back</button>
                                <button className='btn btn-primary m-2 buttonfinal rounded-pill'>Continue<AiOutlineArrowRight /></button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Loan 