import React, { useState } from "react";
import styles from "../signin/signin.module.css";
import { getAuth, updateEmail, sendEmailVerification } from "firebase/auth";

function UpdateEmail() {
  const [email, setemail] = useState(undefined);
  const [confirmemail, setconfirmemail] = useState(undefined);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (email !== confirmemail) {
      console.error("Emails do not match");
      return;
    }

    try {
      const auth = getAuth();
      await sendEmailVerification(auth.currentUser);
      await updateEmail(auth.currentUser, email);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ paddingTop: "30px" }} className={styles.signinContainer}>
      <form onSubmit={handleUpdate}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setemail(e.target.value)}
          spellCheck="false"
          name="email"
        />
        <label htmlFor="confirm-email">Confirm Email</label>
        <input
          type="email"
          value={confirmemail}
          required
          onChange={(e) => setconfirmemail(e.target.value)}
          spellCheck="false"
          name="confirm-email"
        />
        <button
          style={{ marginTop: "20px", marginLeft: "100px" }}
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateEmail;
