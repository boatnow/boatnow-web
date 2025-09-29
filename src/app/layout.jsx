import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BoatNow — Boat Rentals in India",
  description: "Book boats, yachts, and charters across India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 24px',borderBottom:'1px solid #e5e5e5',background:'rgba(255,255,255,0.8)',backdropFilter:'saturate(180%) blur(8px)'}}>
            <a href="/" style={{fontSize:20,fontWeight:600}}>BoatNow</a>
            <div style={{display:'flex',alignItems:'center',gap:16,fontSize:14}}>
              <a href="/listings" style={{textDecoration:'none'}}>Listings</a>
              <a href="/booking" style={{textDecoration:'none'}}>Bookings</a>
              <a href="/sign-in" style={{textDecoration:'none'}}>Sign in</a>
              <a href="/sign-up" style={{padding:'6px 10px',borderRadius:8,background:'#000',color:'#fff'}}>Sign up</a>
            </div>
          </nav>
          <main style={{flex:1 as number}}>{children}</main>
          <footer style={{borderTop:'1px solid #e5e5e5',padding:'24px',fontSize:14,color:'#525252'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <p>© {new Date().getFullYear()} BoatNow</p>
              <p>Made for boat rentals in India</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
