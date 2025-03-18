import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// PAGES
import HomePage from "./pages/Home/HomePage";

// LAYOUT
const Layout = React.lazy(() => import("./components/Layouts/Layout"));

function App() {
  return (
    <>
      <Suspense
        // PRELOADER
        fallback={""}
      >
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index name="Home Page" element={<HomePage />} />
          </Route>
        </Routes>
        <ScrollToTop /> {/* Ensures scroll resets on route change */}
      </Suspense>
    </>
  );
}

export default App;
