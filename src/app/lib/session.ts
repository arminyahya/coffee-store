import "server-only"
import { cookies } from "next/headers";

export default function createSession(userId: number) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = JSON.stringify({userId});
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    path: "/",
  });
}

import 'server-only'
import { cache } from "react";
 
export const verifySession = cache(async () => {
  const cookie = cookies().get('session')?.value
  if(cookie) {
    const userId = JSON.parse(cookie).userId;
    return { isAuth: true, userId }
  } else {
    return { isAuth: false }
  }
 
})