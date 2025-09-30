import Hero from "./components/home/Hero";
import KeyStrength from "./components/home/KeyStrength";
import Manufacturing from "./components/home/Manufacturing";
import News from "./components/home/News";
import NewsLetter from "./components/home/NewsLetter";
import OurClients from "./components/home/OurClients";
import OurHistory from "./components/home/OurHistory";
import OurMission from "./components/home/OurMission";
import ProductCategories from "./components/home/ProductCategories";
import Quality from "./components/home/Quality";
import WhoWeAre from "./components/home/WhoWeAre";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhoWeAre />
        <OurMission />
        <OurHistory />
        <ProductCategories />
        <OurClients />
        <Manufacturing />
        <KeyStrength />
        <News />
        <Quality />
        <NewsLetter />
      </main>
    </>
  );
}
