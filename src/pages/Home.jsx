import HeroSection from "../components/landingPage/hero/HeroSection";
import Categories from "../components/landingPage/categories/Categories";
import Featured from "../components/landingPage/featured/Featured";
import Layout from "../layouts/Layout";

function Home() {
  return (
    <Layout style={{ overflowX: "hidden" }}>
      <HeroSection />
      <Categories />
      <Featured />
    </Layout>
  );
}

export default Home;
