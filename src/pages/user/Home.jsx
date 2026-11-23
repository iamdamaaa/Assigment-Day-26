import Hero from "../../components/user/home/Hero.jsx";
import About from "../../components/user/home/About.jsx";
import FeatureProduct from "../../components/user/home/FeatureProduct.jsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
        <Hero />
        <About />
        <FeatureProduct />
    </main>
  );
}