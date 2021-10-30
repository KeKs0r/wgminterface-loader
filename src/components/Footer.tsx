import logo from "../img/WGMI_Logo.png";

export function Footer() {
  return (
    <div className="w-full text-center mb-2">
      Made with <span className="mr-1">❤️</span> for{" "}
      <a href="https://wgminterfaces.com">
        <img
          src={logo}
          alt="WGMI Interfaces"
          className="inline-block h-[20px]"
        />
      </a>
    </div>
  );
}
