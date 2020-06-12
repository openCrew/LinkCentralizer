import React, { useState } from 'react';

//Styles
import '../css/login.css';

function LoginAdmin() {

    const [image, setImage] = useState("");

    return(
        <div id="conteiner-login">
            <logo>
                    <h1>MyLinker.me</h1>
                    <h3>Log in to access MyLinker admin</h3>
                </logo>
            <div id="login-admin">
                <form>
                    <div className="input-block">
                        <label htmlFor="">Username</label>
                        <input name="Username" id="username" required />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Password</label>
                        <input type="password" name="Password" id="password" required />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>    
    );

}

export default LoginAdmin;
