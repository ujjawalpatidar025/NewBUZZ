import React from "react";

const Loading = () => {
  return (
    <div className="flex w-full items-center justify-center h-screen">
      <div
        class="w-12 h-12 rounded-full animate-spin
                    border-8 border-dashed border-blue-500 border-t-transparent"
      ></div>
    </div>
  );
};

export default Loading;
