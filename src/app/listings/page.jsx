const boats = [
  { id: 1, name: "Goa Sunset Cruise", price: 2999, location: "Goa" },
  { id: 2, name: "Kerala Houseboat", price: 3999, location: "Alleppey" },
  { id: 3, name: "Mumbai Yacht Ride", price: 4999, location: "Mumbai" },
  { id: 4, name: "Andaman Snorkel Boat", price: 3499, location: "Havelock" },
];

export default function ListingsPage() {
  return (
    <section style={{ padding: "32px 24px" }}>
      <div className="container">
        <h1 style={{ fontSize: 28, fontWeight: 600 }}>All listings</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24, marginTop: 24 }}>
          {boats.map((b) => (
            <a key={b.id} href={`/listings/${b.id}`} style={{ display: 'block', border: '1px solid #e5e5e5', borderRadius: 12, background: '#fff' }}>
              <div style={{ aspectRatio: '16/9', background: '#f3f4f6', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
              <div style={{ padding: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 600 }}>{b.name}</h3>
                <p style={{ margin: '6px 0 0', fontSize: 14, color: '#6b7280' }}>{b.location} · ₹{b.price}/hour</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


