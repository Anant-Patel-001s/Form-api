import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import axios from 'axios'
// import Table from 'react-bootstrap/Table';
// import { useLocation } from 'react-router-dom';


const EditForm = (props) => {

  const data = props.userData;
  console.log(data);

  useEffect(() => {
    if(props){
      setFirst({ fname: data.fname, lname: data.lname, gender: data.gender, birthdate: data.birthdate, email: data.email, password: data.password, address: data.address, city: data.city, state: data.state, zip: data.zip})
    }
  }, [props])
  
  const [error, setError] = useState({});
    const [first, setFirst] = useState({ fname: "", lname: "", gender: "", birthdate: "", email: "", password: "", address: "", city: "", state: "", zip: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('called');
            var body = new FormData();
            const { fname, lname, gender, birthdate, email, password, address, city, state, zip } = first;
            body.append('fname', fname);
            body.append('lname', lname);
            body.append('gender', gender);
            body.append('birthdate', birthdate);
            body.append('email', email);
            body.append('password', password);
            body.append('address', address);
            body.append('city', city);
            body.append('state', state);
            body.append('zip', zip);
            axios({
                url: "http://localhost:8000/api/addUser",
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                data: body
            }).then((response) => {
                console.log(response.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

  const onChange = (e) => {
    setFirst({ ...first, [e.target.name]: e.target.value }) // add or overwrite
}

function validate() {

    let isValid = true;
    let err = {};

    if (!first.fname) {
        err['fname_err'] = "Please provide your first name!"
        isValid = false;
    }
    if (!first.lname) {
        err['lname_err'] = "Please provide your last name!"
        isValid = false;
    }
    if (!first.gender) {
        err['gender_err'] = "Please provide your gender!"
        isValid = false;
    }
    if (!first.birthdate) {
        err['birthdate_err'] = "Please provide your birthdate!"
        isValid = false;
    }
    if (!first.email) {
        err['email_err'] = "Please provide your email!"
        isValid = false;
    }
    if (!first.password) {
        err['password_err'] = "Please provide your password!"
        isValid = false;
    }
    if (!first.address) {
        err['address_err'] = "Please provide your address!"
        isValid = false;
    }
    if (!first.city) {
        err['city_err'] = "Please provide your city!"
        isValid = false;
    }
    if (!first.state) {
        err['state_err'] = "Please provide your state!"
        isValid = false;
    }
    if (!first.zip) {
        err['zip_err'] = "Please provide your zip!"
        isValid = false;
    }
    //         alert("Please provide your First Name!");
    //             return false;
    //     if (document.myForm.lname.value === "") {
    //         alert("Please provide your Last Name!");
    //         document.myForm.lname.focus();
    //         return false;
    //     }
    //     if( document.myForm.gender.value === "-1" ) {
    //         alert( "Please provide your Gender!" );
    //         return false;
    //      }
    //      if (document.myForm.email.value === "") {
    //         alert("Please provide your Email");
    //         document.myForm.email.focus();
    //         return false;
    //     }
    //     if( document.myForm.password.value === "" ||
    //     document.myForm.password.value.length !== 8 ) {
    //     alert( "Minimum chacrcter 8!" );
    //     document.myForm.zip.focus() ;
    //     return false;
    //  }
    //     if (document.myForm.address.value === "") {
    //         alert("Please provide your Address!");
    //         document.myForm.address.focus();
    //         return false;
    //     }
    //     if (document.myForm.city.value === "") {
    //         alert("Please provide your City!");
    //         document.myForm.city.focus();
    //         return false;
    //     }
    //     if( document.myForm.state.value === "-1" ) {
    //         alert( "Please provide your State!" );
    //         return false;
    //      }
    //     if( document.myForm.zip.value === "" || isNaN( document.myForm.zip.value ) ||
    //     document.myForm.zip.value.length !== 6 ) {
    //     alert( "Please provide a Currect Zip!" );
    //     document.myForm.zip.focus() ;
    //     return false;
    //  }
    setError(err);
    return isValid;
};

  return (
    <div>
    <h3>Edit Form</h3>
    <form className='row g-3 mt-3' name="myForm" onClick={validate}>
                <div className='col-md-5'>
                    <label htmlFor='fname' className='form-label'>First Name</label>
                    <input type='text' className='form-control' name='fname' value={first.fname} id='fname' onChange={onChange} required />
                    <div className='error'>{error.fname_err}</div>
                </div>
                <div className='col-md-5'>
                    <label htmlFor='lname' className='form-label'>Last Name</label>
                    <input type='text' className='form-control' name='lname' id='lname' onChange={onChange} value={first.lname} required />
                    <div className='error'>{error.lname_err}</div>
                </div>
                <div className='col-md-3'>
                    <label className='form-label' htmlFor='gender'>Gender</label>
                    <select className='form-select' id='gender' name='gender' onChange={onChange} value={first.gender} required>
                        <option selected>Choose..</option>
                        <option >Male</option>
                        <option>Female</option>
                    </select>
                    <div className='error'>{error.gender_err}</div>
                </div>
                <div className='col-md-4' style={{}}>
                    <label className='form-label' htmlFor='birthdate'>Birthdate</label> <br />
                    <TextField
                        id="date"
                        label="Choose your birthdate"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        onChange={onChange}
                        value={first.birthdate}
                        name='birthdate'
                        required />
                    <div className='error'>{error.birthdate_err}</div>
                </div>
                <div className='col-md-6'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input type='email' className='form-control' name='email' id='email' value={first.email} onChange={onChange} required />
                    <div className='error'>{error.email_err}</div>
                </div>
                <div className='col-md-6'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' className='form-control' name='password' id='password' onChange={onChange}  value={first.password} minLength={5} required />
                    <div className='error'>{error.password_err}</div>
                </div>
                <div className='col-12'>
                    <label htmlFor='address' className='from-label'>Address</label>
                    <input type='text' className='form-control' id='address' name='address' placeholder="1234 Main St" onChange={onChange} value={first.address} required />
                    <div className='error'>{error.address_err}</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name='city' onChange={onChange} required value={first.city}/>
                    <div className='error'>{error.city_err}</div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <select id="state" name='state' className="form-select" onChange={onChange} required value={first.state}>
                        <option selected>Choose...</option>
                        <option >Gujarat</option>
                        <option>Mumbai</option>
                    </select>
                    <div className='error'>{error.state_err}</div>
                </div>
                <div className="col-md-2">
                    <label htmlFor="zip" className="form-label">Zip Code</label>
                    <input type="number" className="form-control" id="zip" name='zip' onChange={onChange} value={first.zip} required />
                    <div className='error'>{error.zip_err}</div>
                </div>
                <div className="col-12 mt-4">
                    <button type='button' onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
            </form>    
    </div>
  )
}

export default EditForm