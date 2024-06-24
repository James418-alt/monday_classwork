import React from "react";
import FormComp from "./static/formComp";
import DisplayScreen from "./static/DisplayScreen";

const page = () => {
  return (
    <div className="border p-[20px] h-[100vh]">
      This is the home screen
      <FormComp />
      <DisplayScreen />
    </div>
  );
};

export default page;
