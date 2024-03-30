import Categories from "./components/Category/Categories";
import { Videotypes } from "./data/videoType";

export default function Home() {
  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
      <div className="w-60">Sidebar</div>
      <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <Categories categories={Videotypes} />
        </div>
      </div>
    </div>
  );
}
