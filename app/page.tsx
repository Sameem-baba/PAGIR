import About from "@/components/About";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import OurSpace from "@/components/OurSpace";
import Community from "@/components/Community"

export default function Home() {
  return (
    <main className="">
      <Header />

      <Banner />

      <About />

      <OurSpace />

      <Community />
    </main>
  );
}
