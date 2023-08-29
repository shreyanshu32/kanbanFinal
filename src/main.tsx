import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles.css";
import Container from "./components/Container";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <section className=" bg-red-400 min-h-screen flex ">
      <aside className="bg-white h-screen sticky top-0 text-center py-2 p-1 flex flex-col justify-between">
        <p>top</p>
        <p>bottom</p>
      </aside>
      <section className="flex gap-2 p-2 mx-auto flex-wrap ">
        <Container state="Planned" />
        <Container state="In Progress" />
        <Container state="In Review" />
        <Container state="Completed" />
      </section>
    </section>
  </React.StrictMode>
);
