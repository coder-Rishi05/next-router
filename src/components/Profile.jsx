import React from "react";

const Profile = () => {
  return (
    <div className="about w-full  flex item-end flex-col gap-20 ">
      <h1 className="fontSt text-7xl  tracking-tight px-80 text-start font-extrabold  ">
        Welcome
      </h1>
      <div className="para py-10 w-full px-80 flex item-center flex-col justify-center ">
        <p className="text-lg py-14 font-normal font-mono">
          Hi, I'm ऋषिः ( ऋषभः • २. ) — a Product Designer based in beautiful
          Connecticut, where I live with my amazing wife, two wonderful
          daughters, a goofy pup, and a grumpy old cat.
        </p>
        <p className="text-lg py-14 font-normal font-mono">
          I’ve worn many hats in the past 25 years — product designer,
          entrepreneur, mentor, and strategist. I’ve worked for world-class
          companies, built startups from scratch, led them to profitability or
          acquisition, and even experienced the thrill of an IPO as an
          early-stage employee.
        </p>

        <p className="text-lg py-14 font-normal font-mono">
          Outside of work, you’ll find me reading historical non-fiction, making
          music, cooking up a storm, or traveling to new places.
        </p>

        <p className="text-lg py-14 font-normal font-mono">
          {" "}
          Welcome to my website, feel free to coorect me....
        </p>
      </div>
    </div>
  );
};

export default Profile;
