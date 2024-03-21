import Container from "@/components/Container";
import SideMenu from "@/components/sidemenu/SideMenu";
import VideoType from "@/components/videotypes/VideoType";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="flex flex-row gap-4 fixed z-10 pt-16 pb-4">
            <SideMenu/>
            <VideoType/>
        </div>
        

      </Container>
    </main>
  );
}
