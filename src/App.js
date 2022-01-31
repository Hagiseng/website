import React from "react";
import { Routes, Route } from "react-router-dom";
import Landingpage from './views/homepage/index'
import Leistungen from './views/leistungen/index'
import About from './views/about/index'
import References from './views/references/index'
import Mitgliedschaften from './views/memberships/index'
import Kontakt from './views/contact/index'
import Datenschutz from './views/datenschutz/index'

function App() {
  return (
    <Routes>
      <Route path="/" element={< Landingpage/>} />
      <Route path="/leistungen" element={< Leistungen/>} />
      <Route path="/ueberuns" element={< About/>} />
      <Route path="/referenzen" element={< References/>} />
      <Route path="/mitgliedschaften" element={< Mitgliedschaften/>} />
      <Route path="/kontakt" element={< Kontakt/>} />
      <Route path="/datenschutz" element={< Datenschutz/>} />
    </Routes>
  );
}

export default App;
