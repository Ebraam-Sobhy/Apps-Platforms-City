import { Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SocialMediaCity from './components/City';
import Reddit from './components/Reddit';
import Youtube from './components/Youtube';
import Instagram from './components/Instagram';
import LinkedIn from './components/LinkedIn';
import GitHub from './components/GitHub';
import Discord from './components/Discord';

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
    </Routes>
  );
}

export default App;