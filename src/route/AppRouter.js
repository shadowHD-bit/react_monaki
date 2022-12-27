import React from "react";
import { Route, Routes } from "react-router";
import { router } from "./Router";

export default function AppRouter() {
  return (
    <Routes>
      {router.map(({ path, element }) => (
        <Route key={path} path={path} element={element} exact />
      ))}
    </Routes>
  );
}
