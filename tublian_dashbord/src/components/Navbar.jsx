import ImageCard from "./cardImage";
import dashboard from "/icons/element-3.png";
import money from "/icons/money-2.png";
import notifications from "/icons/notification.svg";
import logout from "/icons/logout.svg";
import settings from "/icons/setting-2.png";
export default function NavBar() {
  return (
    <nav className="menu space-y-2 transition-all lg:w-[5rem] xl:w-[15rem] cl">
      <ul className=" w-full border  ">
        <ImageCard
          className=" flex items-start gap-3 border  w-full "
          src={dashboard}
          imageClassname="hidden lg:flex"
          nameClassname="lg:hidden xl:flex"
          name="dashboard"
        />
        <ImageCard
          className="flex items-start gap-3 border  w-full "
          src={money}
          imageClassname="hidden lg:flex"
          nameClassname="lg:hidden xl:flex"
          name="monitization"
        />
        <ImageCard
          className="flex items-start gap-3 border  w-full"
          src={notifications}
          imageClassname="hidden lg:flex"
          nameClassname="lg:hidden xl:flex"
          name="notifications"
        />
      </ul>
      <ul className="w-full">
        <ImageCard
          className="flex items-start gap-3 border w-full "
          imageClassname="hidden lg:flex"
          nameClassname="lg:hidden xl:flex"
          src={logout}
          name="logout"
        />
        <ImageCard
          className="flex items-start gap-3 border w-full "
          src={settings}
          imageClassname="hidden lg:flex"
          nameClassname="lg:hidden xl:flex"
          name="settings"
        />
      </ul>
    </nav>
  );
}
