import {Routes, Route} from "react-router-dom"
import { DefaultLayout } from "./Layout/DefaultLayout"


import { Home } from "./pages/Home"
import { About } from "./pages/About/index"
import { Articles } from "./pages/Articles"
import { Stacks } from "./pages/Stacks"
import { Projects } from "./pages/Projects"
import { Contacts } from "./pages/Contacts"


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
      </Route>
    </Routes>
  )
}
