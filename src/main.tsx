import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./components/Container";
import Header from "./components/Header";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className=" bg-red-400 min-h-screen dark:bg-[#23272F] ">
      <Header />
      <div className="flex flex-wrap justify-center gap-2 p-2 py-4 mx-auto sm:justify-start w-fit ">
        <Container state="Planned" />
        <Container state="In Progress" />
        <Container state="In Review" />
        <Container state="Completed" />
      </div>
    </main>
  </React.StrictMode>
);
