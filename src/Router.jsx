import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GenerateIdeaChooseBlogs from '@pages/GenerateIdeaChooseBlogs';
import AccountSettings from '@pages/AccountSettings';
import UpgradeAccount from '@pages/UpgradeAccount';
import CreateProject from '@pages/CreateProject';
import GenerateIdea from '@pages/GenerateIdea';
import SavedIdeas from '@pages/SavedIdeas';

// Auth Routes
import Signup from '@pages/Signup';
import Login from '@pages/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/generate-idea" element={<GenerateIdea />} />
        <Route
          path="/generate-idea-choose-blogs"
          element={<GenerateIdeaChooseBlogs />}
        />

        <Route path="/saved-ideas" element={<SavedIdeas />} />
        <Route path="/upgrade-account" element={<UpgradeAccount />} />
        <Route path="/account-settings" element={<AccountSettings />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
