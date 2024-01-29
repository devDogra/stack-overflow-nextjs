import Navbar from "@/components/shared/navbar/Navbar";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar></Navbar>

      <div className="flex items-center justify-center">
        <div>Left Sidebar</div>
        <section className="min-h-screen items-center justify-center">
          <div>{children}</div>
        </section>
        <div>Right Sidebar</div>
      </div>
    </main>
  );
}
