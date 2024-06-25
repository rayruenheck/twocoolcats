'use client'
import Services from "./components/services";
import NavBar from "./components/navbar";
import Header from "./components/header";
import Contact from "./components/contact";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Header />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
