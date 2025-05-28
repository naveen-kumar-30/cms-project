import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainLayout from '../layouts/MainLayout';
import JobPages from '../pages/Jobpages';
import NotFoundPage from '../pages/NotFoundPage';
import Jobpage, { jobLoader } from '../pages/JobPage';
import AddJobPage from '../pages/AddJobPage';
import EditJobPage from '../pages/EditJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="jobs" element={<JobPages />} />
      <Route path="add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path="edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
      <Route path="jobs/:id" element={<Jobpage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
