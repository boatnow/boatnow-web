export default function Home() {
  return (
    <section style={{padding: "48px 24px"}}>
      <div className="container">
        <h1 style={{fontSize: 36, fontWeight: 600, letterSpacing: -0.5}}>Boat rentals across India</h1>
        <p style={{marginTop: 12, color: "#525252", maxWidth: 640}}>Discover and book boats, houseboats, and yachts in Goa, Mumbai, Kerala backwaters, Andaman, and more.</p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24, marginTop: 32}}>
          {["Goa Sunset Cruise","Kerala Houseboat","Mumbai Yacht Ride"].map((name, idx) => (
            <a key={idx} href={`/listings/${idx+1}`} style={{display: 'block', border: '1px solid #e5e5e5', borderRadius: 12, background: '#fff', textDecoration: 'none'}}>
              <div style={{aspectRatio: '16 / 9', width: '100%', background: '#f3f4f6', borderTopLeftRadius: 12, borderTopRightRadius: 12}} />
              <div style={{padding: 16}}>
                <h3 style={{fontWeight: 600}}>{name}</h3>
                <p style={{fontSize: 14, color: '#6b7280'}}>From ₹{(idx+1)*2999} / hour</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{marginTop: 40}}>
          <a href="/listings" style={{display: 'inline-block', background: '#000', color: '#fff', padding: '8px 16px', borderRadius: 8}}>Browse all listings</a>
        </div>
      </div>
    </section>
  );
}
