import Header from "../components/Header";
import Banner from "../components/Banner";
import Facility from "../components/Facilities";
import PrincipalMessage from "../components/PrincipleMessage";
import Notification from "../components/Notification";
import FluidGlass from "../components/FluidGlass";

export default function HomePage() {
    return (
        <div>
        <Banner />
        <Facility />
        <PrincipalMessage />
        <Notification />
        <FluidGlass />
        </div>
    )
}