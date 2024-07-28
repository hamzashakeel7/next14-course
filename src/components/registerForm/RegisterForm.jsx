"use client";

import React, { useEffect } from "react";
import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, 0);

  const router = useRouter();

  useEffect(() => {
    state?.sucess && router.push("/login");
  }, [state?.sucess, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="Enter password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
