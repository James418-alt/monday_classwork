import Link from "next/link";
import React, { ReactNode } from "react";
import { GoEyeClosed } from "react-icons/go";
import { MdCreate, MdHome, MdLock } from "react-icons/md";

const Header = () => {
  interface iNavs {
    id: number;
    name: string;
    url: string;
    icon: ReactNode;
  }
  const nav: iNavs[] = [
    { id: 1, name: "Home", url: "/", icon: <MdHome /> },
    { id: 2, name: "Secret", url: "/", icon: <MdLock /> },
    { id: 3, name: "Personal", url: "/", icon: <GoEyeClosed /> },
    { id: 4, name: "Create", url: "/", icon: <MdCreate /> },
  ];
  const user = null;
  return (
    <div className="flex justify-center items-center w-full border p-2">
      <div className="flex justify-between items-center w-[90%]">
        <h1>Logo</h1>
        <div className="flex items-center gap-4">
          {nav.map((el: any) => (
            <Link
              key={el.id}
              href={el.url}
              className="border flex rounded-md gap-2 items-center px-3 py-1 text-[15px]"
            >
              <div>{el.icon}</div>
              <div>{el.name}</div>
            </Link>
          ))}
        </div>
        <div className="text-[15px] border px-3 py-1 rounded-md">
          {user ? "Log Out" : "Log In"}
        </div>
      </div>
    </div>
  );
};

export default Header;
