import React from "react";
import FormComp from "./static/formComp";
import DisplayScreen from "./static/DisplayScreen";

const page = () => {
  return (
    <div className="border p-[20px] min-h-[100vh]">
      <FormComp />
      <DisplayScreen />
    </div>
  );
};

export default page;
