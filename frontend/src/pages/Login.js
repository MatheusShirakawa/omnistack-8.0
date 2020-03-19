import React , {useState} from 'react';

import logo from '../assets/logo.svg';
import api from '../services/api';

import './Login.css';


function Login({history}){

    const [username , setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { _id } = response.data;

        console.log(response);
        history.push(`/dev/${_id}`);
        
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"/>
                <input 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Digite seu usuário no Github"
                />
                <button type="submit">Enviar</button>
            </form>



        </div>
    );
}

export default Login;