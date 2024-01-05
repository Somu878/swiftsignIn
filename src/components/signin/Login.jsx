import React, { useState } from "react";
import styles from "./signin.module.css";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../config";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    } finally {
      setLoading(false);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className={styles.signinContainer}>
      <div className={styles.signin}>Sign In</div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          spellCheck="false"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a style={{ color: "dodgerblue" }} href="/forgotpassword">
          Forgot Password
        </a>
      </form>
      <p>
        Don't have an account?{" "}
        <a className={styles.signupRoute} href="/signup">
          Signup{" "}
        </a>
      </p>
      <button disabled={loading} onClick={handleLogin}>
        {loading ? "..." : "signin"}
      </button>
    </div>
  );
}

export default Login;
