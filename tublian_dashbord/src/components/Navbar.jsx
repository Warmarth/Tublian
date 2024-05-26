import ImageCard from "./cardImage";
import dashboard from "/icons/element-3.png";
import money from "/icons/money-2.png";
import notifications from "/icons/notification.svg";
export default function NavBar() {
  return (
    <nav className="menu space-y-2 transition-all w-full ">
      <ul className=" w-full border ">
        <ImageCard
          className="flex items-center justify-start "
          src={dashboard}
          imageClassname="hidden lg:flex"
          nameClassname="lg:hidden xl:flex"
          name="dashboard"
        />
        <ImageCard
          className="flex  items-center gap-2"
          src={money}
          imageClassname="hidden lg:flex"
          nameClassname="lg:hidden xl:flex"
          name="monitization"
        />
        <ImageCard
          className="flex  items-center gap-2"
          src={notifications}
          imageClassname="hidden lg:flex"
          nameClassname="lg:hidden xl:flex"
          name="notifications"
        />
      </ul>
      <ul>
        <ImageCard
          className="flex  items-center gap-2"
          src={dashboard}
          name="logout"
        />
        <ImageCard
          className="flex  items-center gap-2"
          src={dashboard}
          name="settings"
        />
      </ul>
    </nav>
  );
}
