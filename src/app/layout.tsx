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
      <body className="bg-light-blue">{children}</body>
    </html>
  );
}
