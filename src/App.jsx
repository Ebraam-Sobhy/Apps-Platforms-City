import { Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SocialMediaCity from './components/City';
import Reddit from './components/Reddit';
import Youtube from './components/Youtube';
import Instagram from './components/Instagram';
import LinkedIn from './components/LinkedIn';
import GitHub from './components/GitHub';
import Discord from './components/Discord';
import Pinterest from './components/Pinterest';
import StackOverflow from './components/Stackoverflow';
import Udemy from './components/Udemy';
import Notion from './components/Notion';
import Google from './components/Google';
import Udacity from './components/Udacity';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/City" element={<SocialMediaCity />} />
      <Route path="/reddit" element={<Reddit />} />
      <Route path="/youtube" element={<Youtube />} />
      <Route path="/instagram" element={<Instagram />} />
      <Route path="/linkedin" element={<LinkedIn />} />
      <Route path="/github" element={<GitHub />} />
      <Route path="/discord" element={<Discord />} />
      <Route path="/pinterest" element={<Pinterest />} />
      <Route path="/stackoverflow" element={<StackOverflow />} />
      <Route path="/udemy" element={<Udemy />} />
      <Route path="/notion" element={<Notion />} />
      <Route path="/google" element={<Google />} />
      <Route path="/udacity" element={<Udacity />} />
    </Routes>
  );
}

export default App;