import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@pages/Layout';
import GenerateIdea from '@pages/GenerateIdea';
import GenerateIdeaChooseBlogs from '@pages/GenerateIdeaChooseBlogs';
import SavedIdeas from '@pages/SavedIdeas';
import UpgradeAccount from '@pages/UpgradeAccount';
import AccountSettings from '@pages/AccountSettings';
import CreateProject from '@pages/CreateProject';
// Auth Routes
import Signup from '@pages/Signup';
import Login from '@pages/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-project" element={<CreateProject />} />
        {/* Layout routes */}
        <Route path="/generate-idea-choose-blogs" element={<Layout />}>
          <Route index element={<GenerateIdeaChooseBlogs />} />
          <Route path="generate-idea" element={<GenerateIdea />} />
          <Route path="saved-ideas" element={<SavedIdeas />} />
          <Route path="upgrade-account" element={<UpgradeAccount />} />
          <Route path="account-settings" element={<AccountSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
