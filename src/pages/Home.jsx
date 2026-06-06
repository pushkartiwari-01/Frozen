import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import BulkOrders from "../components/BulkOrders";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Products />
      <WhyChooseUs />
      <BulkOrders />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;