import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { Providers } from "@/context/providers";
import { proximaNova } from "@/font";
import { defaultMetada } from "@/libs/metadata";
import AOSAnimation from "@/utils/aosInit";
import type { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = defaultMetada;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const cookies = headerStore.get("cookie");

  return (
    <html lang="en">
      <body className={`${proximaNova.className} antialiased`}>
        <Providers cookies={cookies}>
          <AOSAnimation>
            <Navbar />
            {children}

            <Footer />
          </AOSAnimation>
        </Providers>
      </body>
    </html>
  );
}
