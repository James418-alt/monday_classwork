import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";

const page = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] border p-2">
      <div className="border p-3 rounded-md w-[400px] min-h-[300px] flex flex-col gap-4 ">
        SignIn Form
        <div>
          <hr />
        </div>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-sans text-[12px] font-semibold">Email</label>
            <input
              placeholder="Enter your email"
              className="p-1 outline-none border border-gray-300 rounded-sm placeholder:text-[12px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-sans text-[12px] font-semibold">
              Password
            </label>
            <input
              placeholder="Enter your password"
              className="p-1 outline-none border border-gray-300 rounded-sm placeholder:text-[12px]"
              type="text"
            />
          </div>
          <div className="w-[100%] flex flex-col gap-2">
            <button className="bg-gray-700 p-2 text-white font-sans text-[16px] rounded-sm w-full">
              Sign In
            </button>
            <p className="text-[10px] text-center">
              Don't have an account?{" "}
              <span className="text-blue-950 italic">Register Here</span>
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-[12px] font-sans font-semibold">Socials</p>
            </div>
            <div className="flex justify-between ">
              <div className="bg-red-500 w-[49%] flex justify-center items-center p-2 rounded-sm">
                <GrGoogle className="text-white text-[20px]" />
              </div>
              <div className="bg-gray-700 w-[49%] flex justify-center items-center p-2 rounded-sm">
                <BsGithub className="text-white text-[20px]" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
