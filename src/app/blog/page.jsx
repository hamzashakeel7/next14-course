import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
};

const Blog = async () => {
  // fetch by api
  const posts = await getData();

  // fetch witout api
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
