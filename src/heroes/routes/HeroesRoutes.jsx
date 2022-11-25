import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { MarvelPage, DcPages, Search, Hero, HeroPages } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPages />} />

          <Route path="/search" element={<Search />} />
          <Route path="/hero/:heroId" element={<HeroPages />} />
          

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
