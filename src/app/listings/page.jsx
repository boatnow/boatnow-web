const boats = [
  { id: 1, name: "Goa Sunset Cruise", price: 2999, location: "Goa" },
  { id: 2, name: "Kerala Houseboat", price: 3999, location: "Alleppey" },
  { id: 3, name: "Mumbai Yacht Ride", price: 4999, location: "Mumbai" },
  { id: 4, name: "Andaman Snorkel Boat", price: 3499, location: "Havelock" },
];

export default function ListingsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 style={{ fontSize: 28, fontWeight: 600 }}>All listings</h1>
        <div className="grid grid-3" style={{ marginTop: 20 }}>
          {boats.map((b) => (
            <a key={b.id} className="card" href={`/listings/${b.id}`}>
              <div className="card-media" />
              <div className="card-body">
                <h3 style={{ margin: 0, fontWeight: 600 }}>{b.name}</h3>
                <p className="muted" style={{ margin: '6px 0 0', fontSize: 14 }}>{b.location} · ₹{b.price}/hour</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


