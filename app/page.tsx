import About from "@/components/About";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import OurSpace from "@/components/OurSpace";
import Community from "@/components/Community"
import PeopleOfPagir from "@/components/PeopleOfPagir";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main className="">
      <Header />

      <Banner />

      <About />

      <OurSpace />
      <Community />
      <PeopleOfPagir />

      <Events />
    </main>
  );
}
