"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./Utils";
import { signIn } from "./auth";
import bcrypt from "bcryptjs";

// ---------------------------- admin panel ----------------------------------
export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });

    await newPost.save();
    console.log("saved in db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    return { error: "something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("delete from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await User.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("delete from db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img, isAdmin } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
      isAdmin,
    });

    await newUser.save();
    console.log("saved in db");
    revalidatePath("/admin");
  } catch (error) {
    return { error: "something went wrong" };
  }
};

// -------------------------------- Register -----------------------

export const register = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "password doesnot match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "username already exists" };
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved in db");
    return { sucess: true };
  } catch (error) {
    console.log(error);
    return { error: "something went wrong !" };
  }
};

// -------------------------------- Login -----------------------

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {
      username,
      password,
    });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }

    throw error;
  }
};
