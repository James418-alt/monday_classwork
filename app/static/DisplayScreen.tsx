import { revalidateTag } from "next/cache";
import Image from "next/image";
import React from "react";
import moment from "moment";
import { MdDelete } from "react-icons/md";

const DisplayScreen = async () => {
  const url = "https://monday-classwork.vercel.app/api/post";
  const res = await fetch(url, {
    method: "GET",
  });

  revalidateTag("image");
  const data = await res.json();

  return (
    <div>
      <div className="mt-4 flex flex-wrap gap-3 p-3 gap-y-10 justify-center">
        {data?.data
          ?.map((el: any) => (
            <div
              className="border border-gray-500 w-[200px] h-[280px]"
              key={el._id}
            >
              <Image
                src={el.image}
                alt={el.desc}
                width={500}
                height={500}
                className="h-[90%] w-full object-cover"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[12px] p-2 font-sans text-gray-500">
                    {el.desc}
                  </p>
                </div>
                <div>
                  <p className="text-[12px] text-gray-500 p-2">
                    {moment
                      .utc(`${el?.createdAt}`)
                      .local()
                      .startOf("seconds")
                      .fromNow()}
                  </p>
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default DisplayScreen;
