// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Step 3.1: Import our new 3D component.
import { Experience } from "@/components/3d/Experience";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Living Mind Map",
  description: "An immersive 3D portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Step 3.2: Render the Experience component. */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <Experience />
        </div>

        {/* Page content overlays the 3D canvas. */}
        {children}
      </body>
    </html>
  );
}
