"use client"

import { authClient } from "./auth-client";

export function findSessionData() {

  const { data: session } = authClient.useSession();
  return session;
}
