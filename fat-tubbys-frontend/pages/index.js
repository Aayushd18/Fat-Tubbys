import { NextSeo } from "next-seo";
import { useSnackbar } from "notistack";

// Components
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Home/Hero";
import Latest from "../components/Home/Latest";


export default function Home() {

  return (
    <div>
      <NextSeo
        title="Fat Tabbys"
        description="Decentralised Room Rental Service"
      />
      <Navbar />

      <Hero />
      <Latest />
    </div>
  );
}
