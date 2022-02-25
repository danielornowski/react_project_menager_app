import  './index.css';
import Navbar from './components/Navbar'
import ProjectsList from './components/ProjectList/ProjectsList';
import AddForm from './components/ProjectList/AddForm';
import CommentSection from './components/ProjectList/CommentSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectList/ProjectDetails';
import EditForm from './components/ProjectList/EditForm';
import Login from './components/Login';

function App() {
  return (
      <div className="App">
        <Navbar />
          <Router>
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/ProjectList' element={<ProjectsList/>} />
              <Route path='/AddForm' element={<AddForm/>} />
              <Route path='/EditForm/:id' element={<EditForm/>} />
              <Route path='/project/:id' element={<ProjectDetails />} />
              <Route path='/CommentSection/:id' element={<CommentSection />} />
            </Routes>
          </Router>
          
       </div>
  );
}

export default App;
