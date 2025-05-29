import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainLayout from '../layouts/MainLayout';
import JobPages from '../pages/Jobpages';
import NotFoundPage from '../pages/NotFoundPage';
import Jobpage, { jobLoader } from '../pages/JobPage';
import AddJobPage from '../pages/AddJobPage';
import EditJobPage from '../pages/EditJobPage';
import { addJob, deleteJob, updateJob } from '../api/Jobs';
import AboutPage from '../pages/AboutPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
      <Route path='/' element={<MainLayout />}>
        <Route index element={<AboutPage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='jobs' element={<JobPages />} />
        <Route path='add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='jobs/:id' element={<Jobpage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>

      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
    </>
  )
);

export default router;
