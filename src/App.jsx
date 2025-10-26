import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Suspense } from "react";
import Description from "./pages/Description";
import PostJob from "./pages/PostJob";
import JobTable from "./components/jobTable/JobTable";
import FeaturedJobs from "./pages/FeaturedJobs";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/descriptionPage/:id" element={<Description />} />
          <Route path="/descriptionPage" element={<Description />} />
          <Route path="/categories/:id" element={<FeaturedJobs />} />
          <Route path="/postJob" element={<PostJob />} />
          <Route path="/jobTable" element={<JobTable />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
