import { addPost, deletePost } from "@/lib/action";
import React from "react";

const serverTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="desc" placeholder="desc" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button>Create Post</button>
      </form>

      <form action={deletePost}>
        <input type="text" name="id" placeholder="postId" />
        <button>Delete post</button>
      </form>
    </div>
  );
};

export default serverTestPage;
