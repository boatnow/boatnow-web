import Link from "next/link";

const boats = [
  { id: 1, name: "Goa Sunset Cruise", price: 2999, location: "Goa", description: "Enjoy a serene sunset over the Arabian Sea." },
  { id: 2, name: "Kerala Houseboat", price: 3999, location: "Alleppey", description: "Cruise the backwaters with traditional meals." },
  { id: 3, name: "Mumbai Yacht Ride", price: 4999, location: "Mumbai", description: "Skyline views and sea breeze on a premium yacht." },
  { id: 4, name: "Andaman Snorkel Boat", price: 3499, location: "Havelock", description: "Snorkel the reefs in crystal clear waters." },
];

export default function ListingDetails({ params }: { params: { id: string } }) {
  const boat = boats.find(b => String(b.id) === params.id);
  if (!boat) return <div style={{ padding: 24 }} className="container">Not found</div>;

  return (
    <section style={{ padding: "32px 24px" }}>
      <div className="container" style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr', maxWidth: 900 }}>
        <div style={{ aspectRatio: '16/9', background: '#f3f4f6', borderRadius: 12 }} />
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 600 }}>{boat.name}</h1>
          <p style={{ color: '#6b7280' }}>{boat.location} · ₹{boat.price}/hour</p>
          <p style={{ marginTop: 12 }}>{boat.description}</p>
          <div style={{ marginTop: 16 }}>
            <Link href={`/booking?boatId=${boat.id}`} style={{ background: '#000', color: '#fff', padding: '10px 14px', borderRadius: 8 }}>Book now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


