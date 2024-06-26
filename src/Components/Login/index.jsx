import React from "react";
import "./styles.modules.scss";
import { useState } from "react";

export const Login = ({setUser}) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || pass === "") {
      setError(true);
      return;
    }
    setError(false)
    setUser ([name])
  };

  return (
    <section>
      <div>
        <h1> Login </h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button>Iniciar Sesion</button>
        </form>
        {error && <p> Todos los campos son obligatorios</p>}
      </div>
    </section>
  );
};

export default Login;
