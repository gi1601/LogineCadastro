import React, { useState } from 'react';
import css from './Login.module.css';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleEntrar = (e) => {
        e.preventDefault();
        console.log('Usuário:', usuario);
        console.log('Senha:', senha);
        setUsuario('');
        setSenha('');
    };

    return (

        <div className="container">
            <div className={css.tudo}>
                <div>
                    <img className={css.logo} src="./logo.png" alt=""/>
                </div>
                <div className={css.formcontainer}>
                    <h1>Login</h1>
                </div>
                <form className={css.form} onSubmit={handleEntrar}>

                    <div>
                        <input
                            type="text"
                            id="usuario"
                            placeholder={'Usuario:'}
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="senha"
                            placeholder={'Senha:'}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button className={css.botao} type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
        ;
}

export default Login;