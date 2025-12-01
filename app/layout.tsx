import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { MusicProvider } from "@/contexts/MusicContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MusicControl from "@/components/MusicControl";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const playfairForNames = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-great-vibes",
  display: "swap",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover", // Support for notched devices
  themeColor: "#faf9f6",
};

export const metadata: Metadata = {
  title: "Wedding Invitation | Save the Date",
  description: "You are invited to celebrate our special day. Join us for our wedding celebration.",
  openGraph: {
    title: "Wedding Invitation",
    description: "You are invited to celebrate our special day",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Wedding Invitation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${playfairForNames.variable}`}>
      <body className="antialiased">
        <MusicProvider>
          <LanguageProvider>
            <MusicControl />
            <LanguageSwitcher />
            {children}
          </LanguageProvider>
        </MusicProvider>
      </body>
    </html>
  );
}

