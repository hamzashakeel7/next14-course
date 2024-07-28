"use client";

import React from "react";
import styles from "./adminUserForm.module.css";
import { addPost, addUser } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="image" />
      <select name="isAdmin">
        <option value="">IsAdmin ?</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <button>Add User</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
