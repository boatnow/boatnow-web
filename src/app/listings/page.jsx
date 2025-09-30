"use client";
import { useMemo, useState } from "react";

const boats = [
  { id: 1, name: "Goa Sunset Cruise", price: 2999, location: "Goa" },
  { id: 2, name: "Kerala Houseboat", price: 3999, location: "Alleppey" },
  { id: 3, name: "Mumbai Yacht Ride", price: 4999, location: "Mumbai" },
  { id: 4, name: "Andaman Snorkel Boat", price: 3499, location: "Havelock" },
  { id: 5, name: "Varanasi Ganga Aarti Ride", price: 1999, location: "Varanasi" },
  { id: 6, name: "Udaipur Lake Pichola Boat", price: 2799, location: "Udaipur" },
  { id: 7, name: "Rishikesh Ganges Rafting", price: 2599, location: "Rishikesh" },
];

 

export default function ListingsPage() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All");

  const filtered = useMemo(() => {
    return boats.filter(b => {
      const matchesCity = city === "All" || b.location.toLowerCase() === city.toLowerCase();
      const matchesQuery = query.trim().length === 0 || `${b.name} ${b.location}`.toLowerCase().includes(query.toLowerCase());
      return matchesCity && matchesQuery;
    });
  }, [query, city]);

  const cities = ["All","Goa","Kerala","Mumbai","Varanasi","Udaipur","Rishikesh","Andaman"];

  return (
    <section className="section">
      <div className="container">
        <h1 style={{ fontSize: 28, fontWeight: 600 }}>All listings</h1>
        <div style={{marginTop:12, display:'flex', gap:12, flexWrap:'wrap'}}>
          <input
            type="text"
            placeholder="Search boats, e.g. Varanasi, Yacht, Houseboat…"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            style={{flex:'1 1 280px', padding:'10px 12px', border:'1px solid #e5e5e5', borderRadius:10}}
          />
          <div className="chips">
            {cities.map((p)=> (
              <button key={p} onClick={()=>setCity(p)} className={`chip ${city===p? 'active':''}`} style={{cursor:'pointer', background:'transparent'}}>{p}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-3" style={{ marginTop: 20 }}>
          {filtered.map((b) => (
            <a key={b.id} className="card" href={`/listings/${b.id}`}>
              <div className="card-media" />
              <div className="card-body">
                <h3 style={{ margin: 0, fontWeight: 600 }}>{b.name}</h3>
                <p className="muted" style={{ margin: '6px 0 0', fontSize: 14 }}>{b.location} · ₹{b.price}/hour</p>
              </div>
            </a>
          ))}
          {filtered.length === 0 && (
            <div className="card" style={{gridColumn:'1 / -1'}}>
              <div className="card-body">
                <p className="muted">No results. Try a different city or keyword.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


