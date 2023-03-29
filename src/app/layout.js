import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "IMDb Clone",
  description: "This is IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
