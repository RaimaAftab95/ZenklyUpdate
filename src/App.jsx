import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import CreateProject from './pages/CreateProject';
import GenerateIdea from './pages/GenerateIdea';
import 'font-awesome/css/font-awesome.min.css';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/generate-idea" element={<GenerateIdea />} />
        <Route path="*" element={<Navigate to="/signup" />} />
        <Route path="/generate-project" element={<CreateProject />} />
      </Routes>
    </div>
  );
}
