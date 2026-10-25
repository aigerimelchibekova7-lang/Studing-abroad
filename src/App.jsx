import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css"

import Home from "./pages/Home";
import About from "./pages/About";
import Countries from "./pages/Countries";
import Universities from "./pages/Universities";
import HowToApply from "./pages/HowToApply";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import UniversityDetails from "./pages/UniversityDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLayout from "./admin/AdminLayout";
import AdminMessages from "./admin/AdminMessages";
import AdminUniversities from "./admin/AdminUniversities";
import AdminCountries from "./admin/AdminCountries";
import { LanguageProvider } from "./components/LanguageContext"
import { ThemeProvider } from "./components/ThemeContext";

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/how-to-apply" element={<HowToApply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route
          path="/universities/:slug"
          element={<UniversityDetails />}
        />
        <Route path="/admin" element={<AdminLayout />}>
       <Route index element={<AdminDashboard />} />
     <Route path="messages" element={<AdminMessages />} />
    <Route path="universities" element={<AdminUniversities />}
  />
  <Route path="countries" element={<AdminCountries/>}></Route>
</Route>
      </Routes>
      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
   <ThemeProvider>
     <LanguageProvider>
      <BrowserRouter>
      <AppContent />
    </BrowserRouter>
    </LanguageProvider>
   </ThemeProvider>
  );
}

export default App;