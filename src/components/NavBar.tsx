import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.jpeg";

function NavBar() {
  return (
    <>
      <div className="flex justify-between py-4 pl-4 pr-8 border-b">
        <img src={logo} alt="logo" />
        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
      </div>
    </>
  );
}

export default NavBar;
