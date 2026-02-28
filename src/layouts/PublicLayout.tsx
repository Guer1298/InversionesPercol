import { Outlet } from "react-router-dom";
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";

export default function PublicLayout() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}