import BrowseByCategory from "./components/BrowseByCategory";
import Highlight from "./components/Highlight";

export default function Home() {
  return (
    <div className="mt-10">
      <BrowseByCategory />
      <Highlight />
    </div>
  );
}
