import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToggleTheme } from "@/components/toggle-theme";
import { I18NextHtmlProvider } from "@/libs/i18n-next/i18n-next-html-provider";
import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "picollo",
  description: "YouTube System Made Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18NextHtmlProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="p-4 flex gap-4 flex-col">
            <div className="flex justify-between items-center">
              <ToggleTheme />

              <LanguageSwitcher />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </I18NextHtmlProvider>
  );
}
