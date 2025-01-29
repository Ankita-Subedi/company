import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Team from "./Routes/Team";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";
import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import NoMatch from "./Routes/NoMatch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="team" element={<Team />} />
      <Route path="service" element={<Service />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoMatch/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
