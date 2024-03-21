import Container from "@/components/Container";
import SideMenu from "@/components/sidemenu/SideMenu";
import VideoType from "@/components/videotypes/VideoType";

export default function Home() {
  return (
    <main>
      <SideMenu/>
      <VideoType/>
        {/* <div className="flex flex-row gap-4 fixed z-5 mt-16 mb-4 border-[1px]">
            
           
        </div> */}
    </main>
  );
}
