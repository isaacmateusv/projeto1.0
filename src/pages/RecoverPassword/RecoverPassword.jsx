import React, { useState } from "react";
import "./RecoverPassword.css";

function RecoverPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Por favor, insira um e-mail válido.");
      return;
    }

    setMessage(`Um e-mail para recuperação foi enviado para ${email}.`);
    setEmail("");
  };

  return (
    <div className="recover-container">
      <div className="recover-box">
        <h2 className="recover-title">Recuperar Senha</h2>
        <p className="recover-description">Digite seu e-mail para receber o link de recuperação.</p>
        <form className="recover-form" onSubmit={handleSubmit}>
          <input
            className="recover-input"
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="recover-button" type="submit">Enviar</button>
        </form>
        {message && <p className="recover-message">{message}</p>}
      </div>
    </div>
  );
}

export default RecoverPassword;
