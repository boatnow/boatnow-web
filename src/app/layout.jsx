// @ts-nocheck
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

export const metadata = {
  metadataBase: new URL("https://booknaav.com"),
  title: {
    default: "BookNaav — Boat Rentals in India",
    template: "%s • BookNaav",
  },
  description: "Discover and book boats, houseboats, and yachts across India.",
  openGraph: {
    type: "website",
    url: "/",
    title: "BookNaav — Boat Rentals in India",
    description: "Discover and book boats, houseboats, and yachts across India.",
    siteName: "BookNaav",
    images: [
      { url: "/favicon.svg", width: 1200, height: 630, alt: "BookNaav" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BookNaav — Boat Rentals in India",
    description: "Discover and book boats, houseboats, and yachts across India.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <link rel="icon" href="/favicon.svg" sizes="any" />
          <nav className="navbar">
            <a href="/" style={{ fontSize: 20, fontWeight: 600 }}>
              BoatNow
            </a>
            <div className="navlinks">
              <a href="/listings" style={{ textDecoration: "none" }}>
                Listings
              </a>
              <a href="/booking" style={{ textDecoration: "none" }}>
                Bookings
              </a>
              <a href="/sign-in" style={{ textDecoration: "none" }}>
                Sign in
              </a>
              <a
                href="/sign-up"
                style={{
                  padding: "6px 10px",
                  borderRadius: 8,
                  background: "#000",
                  color: "#fff",
                }}
              >
                Sign up
              </a>
            </div>
          </nav>
          <main style={{ flex: 1 }}>{children}</main>
          <footer
            style={{
              borderTop: "1px solid #e5e5e5",
              padding: "24px",
              fontSize: 14,
              color: "#525252",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>© {new Date().getFullYear()} BoatNow</p>
              <p>Made for boat rentals in India</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
