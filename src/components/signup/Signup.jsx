import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "..//../config";
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    console.log("onAuthStateChanged", currentUser);
    if (currentUser) navigate("/");
  });

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signup}>Signup</div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="text"
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
      </form>
      <p>
        Already have an account? <a href="/signin">Login</a>
      </p>
      <button onClick={handleSignup} disabled={loading}>
        {loading ? "Signing up..." : "Signup"}
      </button>
    </div>
  );
}
export default Signup;
