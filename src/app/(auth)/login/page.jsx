import { handleGithubLogin, handleGoogleLogin } from "@/lib/serverAction";
import React from "react";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <form action={handleGoogleLogin}>
          <button className={styles.github}>Login with Google</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
