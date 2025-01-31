import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import CreateProject from './pages/CreateProject';
import GenerateIdea from './pages/GenerateIdea';
import GenerateIdeaChooseBlogs from './pages/GenerateIdeaChooseBlogs';

import SavedIdeas from './pages/SavedIdeas';
import UpgradeAccount from './pages/UpgradeAccount';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/generate-idea" element={<GenerateIdea />} />
      <Route
        path="/generate-idea-choose-blogs"
        element={<GenerateIdeaChooseBlogs />}
      />

      <Route path="/saved-ideas" element={<SavedIdeas />} />
      <Route path="/upgrade-account" element={<UpgradeAccount />} />

      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
}
