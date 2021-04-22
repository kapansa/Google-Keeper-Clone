import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function Home() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note />
      <Footer />
    </div>
  );
}
