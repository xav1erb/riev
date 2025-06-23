import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "De Beauty Blog - 5 Populaire Foundations Getest",
  description: "Wij hebben 5 populaire foundations getest – Dit is de verrassende winnaar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MSLQSGST');`
        }}
      />
      <body className="antialiased bg-white text-black">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSLQSGST"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
