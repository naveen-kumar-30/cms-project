import { Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import JobPages from "../pages/Jobpages";
import Jobpage, { jobLoader } from "../pages/JobPage";
import AddJobPage from "../pages/AddJobPage";
import EditJobPage from "../pages/EditJobPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { addJob, deleteJob, updateJob } from "../api/Jobs";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="jobs" element={<JobPages />} />
          <Route path="add-job" element={<AddJobPage addJobSubmit={addJob} />} />
          <Route
            path="edit-job/:id"
            element={<EditJobPage updateJobSubmit={updateJob} />}
            loader={jobLoader}
          />
          <Route path="jobs/:id" element={<Jobpage deleteJob={deleteJob} />} loader={jobLoader} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
