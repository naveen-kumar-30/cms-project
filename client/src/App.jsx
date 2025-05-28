import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider,} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import JobPages from './pages/Jobpages';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import Jobpage from './pages/JobPage';



const App = () => {

 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path='/' element={<MainLayout/>}>
     <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobPages/>} />
     <Route path='/add-job' element={<AddJobPage/>}  />
      <Route path='/edit-job/:id' element={<EditJobPage/>}/>
      <Route path='/jobs/:id' element={<Jobpage/>} />
     <Route path='*' element={<NotFoundPage/>} />
     </Route>
   )
 );

  return <RouterProvider router={router}/>;
};

export default App