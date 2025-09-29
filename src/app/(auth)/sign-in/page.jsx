"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter email and password");
      return;
    }
    localStorage.setItem("boatnow_user", JSON.stringify({ email }));
    router.push("/listings");
  }

  return (
    <section style={{ padding: "48px 24px" }}>
      <div className="container" style={{ maxWidth: 480 }}>
        <h1 style={{ fontSize: 28, fontWeight: 600 }}>Sign in</h1>
        <form onSubmit={onSubmit} style={{ marginTop: 16, display: "grid", gap: 12 }}>
          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 14 }}>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid #e5e5e5", borderRadius: 8 }}
            />
          </label>
          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 14 }}>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid #e5e5e5", borderRadius: 8 }}
            />
          </label>
          {error && <p style={{ color: "#b91c1c", fontSize: 14 }}>{error}</p>}
          <button type="submit" style={{ marginTop: 8, background: "#000", color: "#fff", padding: "10px 14px", borderRadius: 8 }}>Sign in</button>
        </form>
        <p style={{ marginTop: 12, fontSize: 14 }}>
          Don&apos;t have an account? <a href="/sign-up" style={{ textDecoration: "underline" }}>Sign up</a>
        </p>
      </div>
    </section>
  );
}


