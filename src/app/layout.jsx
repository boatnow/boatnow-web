import "./globals.scss";

export const metadata = {
  metadataBase: new URL("https://booknaav.com"),
  title: {
    default: "BookNaav — Boat Rentals in India",
    template: "%s • BookNaav",
  },
  description: "Book boats in India with ease, track your journey, and get 24/7 support.",
  openGraph: {
    type: "website",
    url: "/",
    title: "BookNaav — Boat Rentals in India",
    description: "Book boats in India with ease, track your journey, and get 24/7 support.",
    siteName: "BookNaav",
    images: [
      { url: "/favicon.svg", width: 1200, height: 630, alt: "BookNaav" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BookNaav — Boat Rentals in India",
    description: "Book boats in India with ease, track your journey, and get 24/7 support.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="min-h-screen flex flex-col">
          <link rel="icon" href="/favicon.svg" sizes="any" />
          {children}
        </div>
      </body>
    </html>
  );
}
