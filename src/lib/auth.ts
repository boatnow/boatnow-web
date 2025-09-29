"use client";

export type BoatNowUser = { email: string; name?: string } | null;

export function getCurrentUser(): BoatNowUser {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("boatnow_user");
    return raw ? (JSON.parse(raw) as BoatNowUser) : null;
  } catch {
    return null;
  }
}

export function signOut() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("boatnow_user");
  window.location.href = "/";
}


