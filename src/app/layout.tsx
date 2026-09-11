import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--serif",
});

const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--sans",
});

export const metadata: Metadata = {
  title: "Kay Nakashima — Software Engineer",
  description:
    "Final-year Computer Science student at Dundee, shipping software with real stakes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
