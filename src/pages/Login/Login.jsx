import './Login.css'

function Login() {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Entrar</h2>
                <p>Acesse sua conta para continuar</p>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite seu email" required />

                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" placeholder="Digite sua senha" required />

                <button type="submit">Entrar</button>

                <div className="links">
                    <a href="/recoverpassword">Esqueceu a senha?</a>
                    <a href='/signup'>Criar conta</a>
                </div>
            </form>
        </div>
    )
}

export default Login