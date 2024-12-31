import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import CreateProject from './pages/CreateProject';
import 'font-awesome/css/font-awesome.min.css';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
}
