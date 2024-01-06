import React, { useState } from "react";
import styles from "../signin/signin.module.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 style={{ marginLeft: "55px" }}>Reset Password</h1>
      <div
        style={{ width: "25vw", paddingTop: "20px" }}
        className={styles.signinContainer}
      >
        <form onSubmit={handleReset}>
          <label htmlFor="email">Email</label>
          <input
            style={{ width: "200px" }}
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            spellCheck="false"
          />
          <button
            style={{ width: "200px", marginLeft: "-1px", marginTop: "15px" }}
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
