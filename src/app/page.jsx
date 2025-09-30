export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <h1 style={{fontSize: 36, fontWeight: 600, letterSpacing: -0.5}}>Boat rentals across India</h1>
        <p className="muted" style={{marginTop: 12, maxWidth: 640}}>Discover and book boats, houseboats, and yachts in Goa, Mumbai, Kerala backwaters, Andaman, and more.</p>

        <div className="grid grid-3" style={{marginTop: 24}}>
          {["Goa Sunset Cruise","Kerala Houseboat","Mumbai Yacht Ride"].map((name, idx) => (
            <a key={idx} className="card" href={`/listings/${idx+1}`}>
              <div className="card-media" />
              <div className="card-body">
                <h3 style={{fontWeight: 600}}>{name}</h3>
                <p className="muted" style={{fontSize: 14}}>From ₹{(idx+1)*2999} / hour</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{marginTop: 32}}>
          <a className="btn btn-primary" href="/listings">Browse all listings</a>
        </div>
      </div>
    </section>
  );
}
