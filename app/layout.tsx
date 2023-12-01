
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplifyClientSide";
import "./globals.css";
import { Amplify } from "aws-amplify";
import amplifyconfiguration from "@/amplifyconfiguration.json";
import { Providers } from "./providers";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(amplifyconfiguration);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'Affable",
  description: "A site for dad jokes, bad jokes, and everything in between.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <>
          <ConfigureAmplifyClientSide />
          <Providers>
          {children}
          </Providers>
        </>
      </body>
    </html>
  );
}
