import React from "react";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={`${s.home} container`}>
      <h1 className={s.title}>Welcome to the Contacts app</h1>
    </section>
  );
};

export default HomePage;
