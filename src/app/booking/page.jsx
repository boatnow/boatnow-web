"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { getCurrentUser } from "@/lib/auth";

const boats = [
  { id: 1, name: "Goa Sunset Cruise", price: 2999 },
  { id: 2, name: "Kerala Houseboat", price: 3999 },
  { id: 3, name: "Mumbai Yacht Ride", price: 4999 },
  { id: 4, name: "Andaman Snorkel Boat", price: 3499 },
];

export default function BookingPage() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }} className="container">Loading…</div>}>
      <BookingContent />
    </Suspense>
  );
}

function BookingContent() {
  const router = useRouter();
  const params = useSearchParams();
  const boatId = Number(params.get("boatId"));
  const boat = useMemo(() => boats.find(b => b.id === boatId) ?? boats[0], [boatId]);
  const user = getCurrentUser();

  const [date, setDate] = useState("");
  const [hours, setHours] = useState(2);
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [confirmed, setConfirmed] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email || !date || !hours) return;
    setConfirmed(true);
    setTimeout(() => router.push("/listings"), 1500);
  }

  return (
    <section style={{ padding: "32px 24px" }}>
      <div className="container" style={{ maxWidth: 640 }}>
        <h1 style={{ fontSize: 28, fontWeight: 600 }}>Booking</h1>
        <p style={{ marginTop: 6 }}>{boat.name} · ₹{boat.price}/hour</p>
        <form onSubmit={onSubmit} style={{ marginTop: 16, display: 'grid', gap: 12 }}>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 14 }}>Date</span>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ padding: '10px 12px', border: '1px solid #e5e5e5', borderRadius: 8 }} />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 14 }}>Hours</span>
            <input type="number" min={1} value={hours} onChange={e => setHours(Number(e.target.value))} style={{ padding: '10px 12px', border: '1px solid #e5e5e5', borderRadius: 8 }} />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 14 }}>Name</span>
            <input type="text" value={name} onChange={e => setName(e.target.value)} style={{ padding: '10px 12px', border: '1px solid #e5e5e5', borderRadius: 8 }} />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 14 }}>Email</span>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ padding: '10px 12px', border: '1px solid #e5e5e5', borderRadius: 8 }} />
          </label>
          <button type="submit" style={{ marginTop: 8, background: '#000', color: '#fff', padding: '10px 14px', borderRadius: 8 }}>Confirm booking</button>
          {confirmed && <p style={{ color: '#16a34a', fontSize: 14 }}>Booking confirmed! Redirecting…</p>}
        </form>
      </div>
    </section>
  );
}


