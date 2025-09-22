import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
        {/* LAYER 0: THE 3D CANVAS */}
        {/* We place the canvas container first. */}
        {/* It is fixed to the background and has a zIndex of 0, making it our base layer. */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
          <Experience />
        </div>

        {/* LAYER 1: THE UI CONTENT */}
        {/* We wrap the 'children' (our page content) in a <main> tag. */}
        {/* 'position: relative' gives it its own stacking context. */}
        {/* 'zIndex: 1' explicitly places it ON TOP of the canvas. */}
        {/* 'pointer-events: none' is the key: this container is "see-through" to mouse events... */}
        <main style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
          
          {/* ...BUT, the actual content inside ('children') will still receive clicks */}
          {/* because child elements with 'pointer-events: auto' (the default) override the parent. */}
          {/* We also need a div here to re-enable pointer events for the content. */}
          <div style={{ pointerEvents: 'auto' }}>
            {children}
          </div>

        </main>
      </body>
    </html>
  );
}