import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";
import { MdImage } from "react-icons/md";
import cloudinary from "../utils/cloudinary";
import { revalidateTag } from "next/cache";

const FormComp = () => {
  const formAction = async (formData: FormData) => {
    "use server";
    const desc = formData.get("desc");
    const image = formData.get("image") as File;

    const file = await image.arrayBuffer();
    const buff = new Uint8Array(file);
    const { secure_url }: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (err, result) => {
          if (err) {
            reject(err);
            return;
          } else {
            return resolve(result);
          }
        })
        .end(buff);
    });
    const url = "https://monday-classwork.vercel.app/api/post";
    const res = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ desc, image: secure_url }),
      next: {
        tags: ["image"],
      },
    }).then(() => {
      revalidateTag("image");
    });
  };

  return (
    <div className="flex justify-center items-center p-2 border-b">
      <div className="border p-3 rounded-md w-[400px] flex flex-col gap-4 mb-5 ">
        Make a Post
        <div>
          <hr />
        </div>
        <form action={formAction} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-sans text-[12px] font-semibold">
              Post Description
            </label>
            <div className="flex w-full gap-2">
              <input
                placeholder="Your post description"
                className="p-1 w-[90%] outline-none border border-gray-300 rounded-sm placeholder:text-[12px]"
                type="text"
                name="desc"
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
