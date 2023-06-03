import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DLayout, MainLayout, CLayout, TLayout } from "./layouts";
import {
  Europa,
  Home,
  Mars,
  Moon,
  Titan,
  Douglas,
  Mark,
  Victor,
  Anousheh,
  Vehicle,
  Spaceport,
  Capsule,
} from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/destinations" element={<DLayout />}>
          <Route index element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="/crew" element={<CLayout />}>
          <Route index element={<Douglas />} />
          <Route path="mark" element={<Mark />} />
          <Route path="victor" element={<Victor />} />
          <Route path="anousheh" element={<Anousheh />} />
        </Route>
        <Route path="/technology" element={<TLayout />}>
          <Route index element={<Vehicle />} />
          <Route path="spaceport" element={<Spaceport />} />
          <Route path="capsule" element={<Capsule />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
