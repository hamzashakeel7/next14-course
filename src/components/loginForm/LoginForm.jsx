"use client";

import styles from "./LoginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { login } from "@/lib/action";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, 0);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
