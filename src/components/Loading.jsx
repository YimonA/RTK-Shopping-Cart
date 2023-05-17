import React from "react";
import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Loader color="grape" variant="bars" />;
    </div>
  );
};

export default Loading;
