import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/react/About";
import Contact from "./components/react/Contact";
import Educations from "./components/react/Educations";
import Hero from "./components/react/Hero";
import Mac from "./components/react/mac/Mac";
import Project from "./components/react/project/Project";
import Projects from "./components/react/Projects";
import Skills from "./components/react/Skills";
import Testimonials from "./components/react/Testimonials";
import Layout from "./components/Layout";
import Courses from "./components/react/Courses";
import Blogs from "./components/react/Blogs";
import Window from "./components/react/mac/Window";
const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/mac" element={<Mac />} />
        <Route path="/mac/about" element={<About />} />
        <Route path="/mac/:page" element={<Hero />} />
        <Route path="/mac/blogs" element={<Blogs />} />
        <Route path="/mac/contact" element={<Contact />} />
        <Route path="/mac/education" element={<Educations />} />
        <Route path="/mac/projects" element={<Projects />} />
        <Route path="/mac/projects/:id" element={<Project />} />
        <Route path="/mac/skills" element={<Skills />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
