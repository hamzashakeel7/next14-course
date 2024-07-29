import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { getPost } from "@/lib/data";
import { Suspense } from "react";
import PostUser from "@/components/postUser/PostUser";

const getData = async (slug) => {
  const res = await fetch(
    `https://next14-course-omega.vercel.app/api/blog/${slug}`
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
};

// ----------------------- Dynamic SEO---------------
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePagePost = async ({ params }) => {
  const { slug } = params;

  // fetch with api
  const post = await getData(slug);

  // fetch without api
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.left}>
          <Image src={post.img} alt="image" fill className={styles.img} />
        </div>
      )}
      <div className={styles.right}>
        <h1>{post.title}</h1>
        <div className={styles.details}>
          <div className={styles.profileImg}>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}
          </div>

          <div className={styles.date}>
            <span>Published</span>
            <p>{post.createdAt.toString().slice(4, 16)}</p>
          </div>
        </div>
        <div className={styles.desc}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePagePost;
