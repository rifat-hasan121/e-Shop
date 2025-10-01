import BrowseByCategory from "./components/BrowseByCategory";
import Highlight from "./components/Highlight";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="mt-10">
      <p className="text-2xl font-bold text-center">
        Welcome to e-Shop
      </p>
      <BrowseByCategory />
      <Highlight />
      <WhyChooseUs />
    </div>
  );
}
