import React from "react";
import { Hero } from "./components/Hero";
import { Featureproduct } from "./components/Featureproduct";
import { Testmonial } from "./components/Testmonial";
import { Faq } from "./components/Faq";
export const Homepage = () => {
  return (
    <main>
      <Hero />
      <Featureproduct />
      <Testmonial />
      <Faq />
    </main>
  );
};
