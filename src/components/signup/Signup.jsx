import React from "react";
import styles from "./signup.module.css";
function Signup() {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signup}>Signup</div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" required spellCheck="false" />
        <label htmlFor="password">Password</label>
        <input type="password" required />
      </form>
      <p>
        Already have an account? <a href="/signin">Login</a>
      </p>
      <button>Signup</button>
    </div>
  );
}

export default Signup;
