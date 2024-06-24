import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";
import { MdImage } from "react-icons/md";

const FormComp = () => {
  return (
    <div className="flex justify-center items-center p-2 border-b">
      <div className="border p-3 rounded-md w-[400px] flex flex-col gap-4 mb-5 ">
        Make a Post
        <div>
          <hr />
        </div>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-sans text-[12px] font-semibold">
              Post Description
            </label>
            <div className="flex w-full gap-2">
              <input
                placeholder="Your post description"
                className="p-1 w-[90%] outline-none border border-gray-300 rounded-sm placeholder:text-[12px]"
                type="text"
              />

              <div className="flex items-center w-[10%]">
                <label htmlFor="pixID" className="text-[18px]">
                  <MdImage />
                </label>
                <input
                  className="hidden outline-none"
                  type="file"
                  name="image"
                  id="pixID"
                />
              </div>
            </div>
          </div>
          <button className="bg-gray-600 p-1 rounded-sm text-white text-[14px]">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComp;
