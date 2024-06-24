import Image from "next/image";
import React from "react";

const DisplayScreen = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="border h-[210px] w-[200px] p-2">
          <Image src="/#" alt="image" width={200} height={200} />
          <p className="text-[12px] font-sans text-gray-500">Name</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayScreen;
