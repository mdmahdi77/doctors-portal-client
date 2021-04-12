import React, { useContext } from 'react';
import loginPic from '../../../images/loginPic.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }

    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const newUserLoggedIn = { name: displayName, email }
                setUserLoggedIn(newUserLoggedIn)
                storeAuthToken()
                console.log(newUserLoggedIn)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage, errorCode)
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken)
            history.replace(from);
        }).catch(function (error) {
            // Handle error
        });
    }
    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-6 p-5 shadow">
                    <h2 className="text-center text-brand">Login</h2>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" name="" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="Password" className="form-control" name="" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger" >Forget Your Password</label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className="img-fluid" src={loginPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;