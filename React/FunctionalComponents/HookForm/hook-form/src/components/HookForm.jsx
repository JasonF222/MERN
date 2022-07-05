import React, { useState } from 'react';

const HookForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [submit, setSubmit] = useState("");

    const handleSubmit = () => {

        if(!firstName || firstNameErrorMessage) {
            setSubmit("");
        }
        if(!lastName || lastNameErrorMessage) {
            setSubmit("");
        }
        if(!email || emailErrorMessage) {
            setSubmit("");
        }
        if(!password || passwordErrorMessage) {
            setSubmit("");
        }
        if(!confirmPassword || confirmPasswordErrorMessage) {
            setSubmit("");
        } else {
            setSubmit(true);
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        if(!submit) {
            return;
        }
        const newUser = { firstName, lastName, email, password, confirmPassword };
        setHasBeenSubmitted(true);
    };

    const firstNameHandle = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameErrorMessage("Must be at least 2 characters.")
        } else {
            setFirstNameErrorMessage("");
            handleSubmit();
        } 
    }

    const lastNameHandle = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameErrorMessage("Must be at least 2 characters.")
        } else {
            setLastNameErrorMessage("");
            handleSubmit();
        } 
    }

    const emailHandle = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailErrorMessage("Must be at least 5 characters.")
        } else {
            setEmailErrorMessage("");
            handleSubmit();
        } 
    }

    const passwordHandle = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordErrorMessage("Must be at least 8 characters.")
        } else {
            setPasswordErrorMessage("");
            handleSubmit();
        } 
    }

    const confirmPasswordHandle = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordErrorMessage("Passwords must match.")
        } else {
            setConfirmPasswordErrorMessage("");
            handleSubmit();
        } 
    }

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	        return "Your form has been submitted!";
	} else {
	        return "Welcome, submit your form";
	}
    };

    return(
        <>
            <h3>{ formMessage() }</h3>
            <form onSubmit= { createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange = { firstNameHandle }></input>
                    {
                        firstNameErrorMessage ?
                        <p>{ firstNameErrorMessage }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange = { lastNameHandle }></input>
                    {
                        lastNameErrorMessage ?
                        <p>{ lastNameErrorMessage }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange = { emailHandle }></input>
                    {
                        emailErrorMessage ?
                        <p>{ emailErrorMessage }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange = { passwordHandle }></input>
                    {
                        passwordErrorMessage ?
                        <p>{ passwordErrorMessage }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange = { confirmPasswordHandle }></input>
                    {
                        confirmPasswordErrorMessage ?
                        <p>{ confirmPasswordErrorMessage }</p> :
                        ''
                    }
                </div>
                <div>
                    {
                        submit ?
                        <input type="submit" value="Create User"></input> :
                        ''
                    }
                </div>
            </form>

        </>
    );

};

export default HookForm;