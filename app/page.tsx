import Footer from "./Footer";
import Navbar from "./Navbar";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import JustForYou from "./components/justForYou/JustForYou";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Trending />
      <JustForYou />
      <Footer />
    </div>
  );
}
