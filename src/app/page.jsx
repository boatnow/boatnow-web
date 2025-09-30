export default function Home() {
  return (
    <>
    <section className="hero">
      <div className="container hero-inner">
        <span className="badge">New</span>
        <h1 style={{fontSize: 40, fontWeight: 700, letterSpacing: -0.5, marginTop: 10}}>Boat rentals across India</h1>
        <p className="muted" style={{marginTop: 10, maxWidth: 720}}>Discover and book boats, houseboats, and yachts in Goa, Mumbai, Kerala backwaters, Andaman, Varanasi Ganga aarti rides, and more.</p>
        <div className="cta">
          <a className="btn btn-primary" href="/listings">Browse listings</a>
          <a className="btn btn-accent" href="/booking">Quick book</a>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="chips">
          {["Goa","Kerala","Mumbai","Varanasi","Andaman","Udaipur","Rishikesh"].map((p,i)=> (
            <span key={i} className="chip">{p}</span>
          ))}
        </div>
        <div className="grid grid-3" style={{marginTop: 20}}>
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
    </>
  );
}
