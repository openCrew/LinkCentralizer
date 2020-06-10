import React, { useState } from 'react';

//Styles
import '../css/login.css';

function LoginAdmin() {

    const [image, setImage] = useState("");

    return(
        <div id="login-admin">
            <logo>
                <div id="profile">
                <img src="https://image.flaticon.com/icons/png/512/90/90379.png" alt="Logo"/>
                <h3>Access your <strong>mylinker</strong> account</h3>
                </div>
            </logo>
            <form>
                <div className="input-block">
                    <label htmlFor="">Username</label>
                    <input name="Username" id="username" required />
                </div>
                <div className="input-block">
                    <label htmlFor="">Password</label>
                    <input name="Password" id="password" required />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );

}

export default LoginAdmin;
