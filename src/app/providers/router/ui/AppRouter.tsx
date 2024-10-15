import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPageAsync } from "@/pages/MainPage";
import { AboutPageAsync } from "@/pages/AboutPage";

export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainPageAsync />} />
        <Route path="/about" element={<AboutPageAsync />} />
      </Routes>
    </Suspense>
  );
}
