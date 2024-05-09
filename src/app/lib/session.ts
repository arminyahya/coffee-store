import "server-only"
import { cookies } from "next/headers";

export default function createSession(userId: number) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = `sessionIs${userId}`;

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    path: "/",
  });
}
