import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles.css";
import Container from "./components/Container";
import Header from "./components/Header";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className=" bg-red-400 min-h-screen dark:bg-[#23272F] ">
      <Header />
      <section className="flex gap-2 p-2 py-4 mx-auto w-fit flex-wrap ">
        <Container state="Planned" />
        <Container state="In Progress" />
        <Container state="In Review" />
        <Container state="Completed" />
      </section>
    </div>
  </React.StrictMode>
);
