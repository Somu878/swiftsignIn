import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import styles from "./home.module.css";
function Home() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/signin");
  });
  return (
    <div className={styles.homeContainer}>
      {" "}
      <h1>Welcome {user?.email}</h1>
      <button
        style={{ width: "130px", marginLeft: "-15px" }}
        onClick={() => signOut(firebaseAuth)}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Home;
