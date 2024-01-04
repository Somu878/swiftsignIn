import React from "react";
import styles from "./signin.module.css";
function Login() {
  return (
    <div className={styles.signinContainer}>
      <div className={styles.signin}>Signin</div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" required spellCheck="false" />
        <label htmlFor="password">Password</label>
        <input type="password" required />
      </form>
      <p>
        Don't have an account? <a href="/signup">Signup </a>
      </p>
      <button>Signin</button>
    </div>
  );
}

export default Login;
