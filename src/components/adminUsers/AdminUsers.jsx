import React from "react";
import styles from "./adminUsers.module.css";
import { getUsers } from "@/lib/data";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {users.map((user) => (
        <div key={user.id} className={styles.user}>
          <Image
            src={user.img || "/noavatar.png"}
            alt="avatar"
            height={50}
            width={50}
          />
          <span className={styles.postTitle}>{user.username}</span>
          <div className={styles.details}>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className={styles.postButton}>Delete</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
