import React from "react";
import "../../shared/styles/generic.css"
import "./register.css";
import registrationService from "../../shared/api/services/post/registrationService.ts";


const Register: React.FC = () => {
    return (
    <div>
        <div className="background"></div>
        <div className="wrapper colorable">
            <form onSubmit={registrationService} action="http://localhost:5173/home" method="post">
                <h1 id="registerMainHeader">Register</h1>

                <div className="Input">
                    <input name="username" type="text" maxLength={20} required/>
                    <label>Username</label>
                    <img className="loginICONS" src="../../../public/Auth/user.png"/>
                </div>

                <br/>

                <div className="Input">
                    <input name="email" type="text" required/>
                    <label>Email</label>
                    <img className="loginICONS" src="../../../public/Auth/email.png"/>
                </div>

                <br/>

                <div className="Input">
                    <input name="password" id="password" type="password" required/>
                    <label>Password</label>
                    <img className="loginICONS" src="../../../public/Auth/lock_closed.png"/>
                </div>

                <br/>

                <div className="Input" id="passwordRepeatDIV">
                    <input name="repeatedPasswordINPUT" id="repeatedPassword" type="password" required/>
                    <label>Repeat password</label>
                    <img className="loginICONS" src="../../../public/Auth/lock_repeat.png"/>
                </div>

                <div id="chooseALanguageLevelDIV">
                    <label id="chooseALanguageLevelLABEL">Pick your level of English: </label>
                    <select name="levelOfEnglish" id="languageLevelOptions">
                        <option id="A0">A0</option>
                        <option id="A1">A1</option>
                        <option id="A2">A2</option>
                        <option id="B1">B1</option>
                        <option id="B2">B2</option>
                        <option id="C1">C1</option>
                        <option id="C2">C2</option>
                    </select>
                </div>
                <div id="alreadyHaveAnAccountDIV">
                    <p>Already have an account? <a id="alreadyHaveAnAccountLink" href="http://localhost:5173/login">Login</a> </p>
                </div>
                <div id="registerButtonDIV">
                    <button type="submit" id="registerButton">Register</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Register;
