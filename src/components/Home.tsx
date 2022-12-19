import React from "react";
import BodyCard from "./BodyCard";
import { Header } from "./Header";

export default function Home() {
  return (
    <div className="m-8 border-solid border-4 border-black rounded  bg-white dark:bg-black">
      <Header />
      <BodyCard />
    </div>
  );
}
