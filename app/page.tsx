import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import JustForYou from "./components/justForYou/JustForYou";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Trending />
      <JustForYou />
    </div>
  );
}
