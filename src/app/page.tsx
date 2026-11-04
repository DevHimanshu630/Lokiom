import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Crafts from "@/components/Crafts";
import Story from "@/components/Story";
import Collections from "@/components/Collections";
import Beliefs from "@/components/Beliefs";
import Quote from "@/components/Quote";
import Process from "@/components/Process";
import Ahead from "@/components/Ahead";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Crafts />
        <Story />
        <Collections />
        <Beliefs />
        <Quote />
        <Process />
        <Ahead />
        <Register />
      </main>
      <Footer />
    </>
  );
}
