"use server";
import { redirect } from "next/navigation";
import createSession from "../lib/session";
import { signIn } from "../server";

export async function authenticate(formData: FormData) {
  const result = await signIn(formData);

  if (result) {
    createSession(result);
    redirect("/");
  }
}
