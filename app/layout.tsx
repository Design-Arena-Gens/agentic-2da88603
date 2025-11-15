import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Analyst Job Alerts - Fresher Positions",
  description: "Automated job alerts for fresher Data Analyst positions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
