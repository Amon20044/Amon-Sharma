import Navbar from "@/components/navbar";
import LandingPageImage from "@/components/LandingPageImage";
import LandingPageText from "@/components/LandingPageText";

export default function LandingPage({ winCheck, cursorPosition }) {
  return (
    <div className="landingpage max-[850px]:h-[90vh] h-[100vh] w-screen block overflow-hidden">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="h-auto  w-screen -z-10 overflow-hidden">
      <LandingPageImage winCheck={winCheck} />
      <LandingPageText winCheck={winCheck} />
      </div>
    </div>
  );
}
