import React from "react";

const MainSection = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className=" bg-gray-700 w-[100vw] ">
          <img className="mx-auto" src="AbstractDesign.png" alt="logo" />
        </div>
      </div>
      <div className="flex justify-center ">
        <h1 className="text-3xl">The Best Streaming Experience</h1>
      </div>
      <div className="text-center mx-auto w-full max-w-lg px-2 mt-4">
        <p className="text-gray-600">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
        </p>
        <p className="text-gray-600">
          With StreamVibe, you can enjoy a wide variety of content, including
          the latest blockbusters, classic movies, popular TV shows, and more.
        </p>
        <p className="text-gray-600">
          You can also create your own watchlists, so you can easily find the
          content you want to watch.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <button className="flex items-center bg-[#E50000] h-16 px-6 text-white">
          <img className="mr-2" src="./rectangle.svg" alt="Start Watching " />
          Start Watching Now
        </button>
      </div>
    </>
  );
};

export default MainSection;
