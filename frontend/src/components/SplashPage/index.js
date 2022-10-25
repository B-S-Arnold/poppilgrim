import './SplashPage.css';

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import * as sessionActions from "../../store/session";
import * as spotActions from '../../store/spot';
import { getSpot } from '../../store/spot';
import ReviewFormModal from '../ReviewModal';
import { getReview } from '../../store/review';
import { getImage } from '../../store/image';


function SplashPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpot())

        dispatch(getImage())
    }, [dispatch])


    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("kjl");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const { spotId } = useParams();

    const history = useHistory();
    // const sessionUser = useSelector(state => state.session.user);




    return (
        <div>
            <div className="blurb">
                <div className ="title">
                    Find places to stay on PopPilgrim
                </div>
                <div className='desc'>
                    Discover entire homes and private rooms perfect for any trip.
                </div>
                <div className='sindiv'>
                    <label className='sinlab' for='loc' >LOCATION</label>
                    <input
                    id='loc'
                    placeholder='Anywhere'
                    className='inloc'>
                    </input>
                </div>
                <div className='sindiv2'>
                    <div className='insindiv'>
                        <label className='sinlab' for='cin'>CHECK IN</label>
                        <input
                        // placeholder='Add Date'
                        id='cin'
                        type='date'
                        className='indate'>
                        </input>
                    </div>
                    <div className='insindiv'>
                        <label className='sinlab' for='cout'>CHECKOUT</label>
                        <input
                            id='cout'
                            type='date'
                            className='indate'>
                        </input>
                    </div>
                </div>
                <div className='sindiv2'>
                    <div className='insindiv'>
                        <label className='sinlab' for='ads'>ADULTS</label>
                        <select
                            id='ads'
                            type='select'
                            className='insel'>
                                <option value='1'>1</option>
                                <option value='2' selected>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                                <option value='13'>13</option>
                                <option value='14'>14</option>
                                <option value='15'>15</option>
                                <option value='16'>16</option>
                        </select>
                    </div>
                    <div className='insindiv'>
                        <label className='sinlab' for='kids'>CHILDREN</label>
                        <select
                            id='kids'
                            type='select'
                            className='insel'>
                                <option value='0'>0</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                        </select>
                    </div>
                </div>
                <div className='amdiv'>
                    <label className='sinlab' for='ambtns' lab>AMENITIES</label>
                    <div id='ambtns' className='ambtndiv'>
                        <button className='ambtn'>Hot tub</button>
                        <button className='ambtn'>Pool</button>
                        <button className='ambtn'>Wifi</button>
                    </div>
                </div>
                <button className='sbtn'>Search</button>


            </div>
            <div className='bkdImageCon'>
                <div className='bkdImage'/>
            </div>
            

            
        </div>
    );
}

export default SplashPage;