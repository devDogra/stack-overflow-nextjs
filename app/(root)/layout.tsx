import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/leftsidebar/LeftSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar></Navbar>

      <div className="flex bg-yellow-300 ">
        <section className="min-h-screen bg-light-900 dark:bg-dark-400 pt-32 p-4 sticky left-0 w-64 overflow-y-auto max-w flex flex-col  gap-4 h-screen custom-scrollbar">
          <LeftSidebar />
        </section>

        <section className="min-h-screen items-center justify-center bg-primary-100 pt-32 w-fit">
          <div>ho2euho</div>
          <div>{children}</div>
        </section>

        <section className="min-h-screen items-center justify-center bg-green-300 pt-32 fixed right-0 w-[22rem]">
          <div>Right Sidebar</div>
        </section>
      </div>
    </main>
  );
}
