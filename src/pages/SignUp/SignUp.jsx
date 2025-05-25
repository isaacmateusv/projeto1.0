import './SignUp.css'

function SignUp() {
    return (
        <div className="signup-container">
            <form className="signup-form">
                <h2>Criar Conta</h2>
                <p>Preencha os dados abaixo</p>

                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="Digite seu nome" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite seu email" required />

                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" placeholder="Crie uma senha" required />

                <label htmlFor="confirmar">Confirmar Senha</label>
                <input type="password" id="confirmar" placeholder="Confirme sua senha" required />

                <button type="submit">Criar Conta</button>

                <div className="links">
                    <a href="/">Já tenho conta</a>
                </div>
            </form>
        </div>
    )
}

export default SignUp