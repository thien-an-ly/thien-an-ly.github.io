import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  // useParams
} from "react-router-dom";

// import { Games, gamesProjects } from "./pages/Games";
// import { Modal } from "./components/page-components/Modal";

import { About } from "./pages/About";
// import Software from "./pages/Software";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";

import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<Navigate to="/" />} />
          {/* <Route path="/games" element={<Games />}>
            {gamesProjects.map((game) => (
              <Route
                path=":url"
                element={
                  <Modal
                    project={
                      gamesProjects.find(
                        (project) => project.url == url,
                      ) as Project
                    }
                  />
                }
              />
            ))}
          </Route>
          <Route path="/software" element={<Software />} /> */}
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
