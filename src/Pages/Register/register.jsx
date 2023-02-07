import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";


const Register = () => {
    const navigate = useNavigate();
    const initialValues = {username:"", email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [backendValidated, setBackendValidated] = useState(false);

    const handleChange = (e) => {
      console.log(formValues);
      const {name, value} = e.target;
      setFormValues({...formValues, [name]:value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      if (Object.keys(formErrors).length === 0) {
        setIsSubmit(true);
      }
    }

    useEffect(() => {
      if (localStorage.getItem('user')) {
        navigate('/profile');
      }
    }, [navigate]);

    useEffect(()=> {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        fetch('https://shy-puce-armadillo-fez.cyclic.app/users/add', {
          method: 'POST',
          body: JSON.stringify(formValues),
          headers: {
            'Content-Type': 'application/json'
          },
        }).then((res) => res.json()).then((data) => {
          setBackendValidated(true);
        })
      }

    },[formErrors])

    const validate = (values) => {
      const errors = {};
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!"
      }
      if (!values.password) {
        errors.password = "Password is required!";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 3 characters!";
      } else if (values.password.length > 10) {
        errors.password = "Password can't exceed 10 characters!";
      }
      return errors;
    }

    return (
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>Hey There...</h1>
            <p>
              You can create an account by filling out the information on the form. 
              Don't forget to click the register button...
            </p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
          </div>
          <div className="right">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="registerForm">
              {isSubmit && backendValidated ? (<div>Succesfully Signed Up!</div>) : (<div></div>)}
              {isSubmit && !backendValidated ? (<div>Account can't be created!</div>) : (<div></div>)}
              <input className="registerInput" onChange={handleChange} value={formValues.username} name="username" type="text" placeholder="Username" />
              <p>{formErrors.username}</p>
              <input className="registerInput" onChange={handleChange} value={formValues.email} name="email" type="text" placeholder="Email" />
              <p>{formErrors.email}</p>
              <input className="registerInput" onChange={handleChange} value={formValues.password} name="password" type="password" placeholder="Password" />
              <p>{formErrors.password}</p>
              <button className="registerButton">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
