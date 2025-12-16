import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { PostProvider } from "./contexts/PostContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import PostForm from "./components/PostForm";
import "./App.css";
import { PostProvider } from "./contexts/PostContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <PostProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/new" element={<PostForm />} />
              <Route path="/admin/edit/:id" element={<PostForm />} />
            </Routes>
          </PostProvider>
        </main>
      </div>
    </Router>
  );
}

export default App;
