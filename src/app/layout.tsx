import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devbox",
  description: "Personal development blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Devbox" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-light-blue">{children}</body>
    </html>
  );
}
