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
import Freecodecamp from './components/Freecodecamp';
import Coursera from './components/Coursera';
import Chatgpt from './components/Chatgbt';
import Gemini from './components/Gemini';
import Behance from './components/Behance';
import SharkTank from './components/SharkTank';
import KhanAcademy from './components/KhanAcademy';

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
      <Route path="/freecodecamp" element={<Freecodecamp />} />
      <Route path="/udemy" element={<Udemy />} />
      <Route path="/notion" element={<Notion />} />
      <Route path="/google" element={<Google />} />
      <Route path="/coursera" element={<Coursera />} />
      <Route path="/Chatgpt" element={<Chatgpt />} />
      <Route path="/gemini" element={<Gemini />} />
      <Route path="/behance" element={<Behance />} />
      <Route path="/sharktank" element={<SharkTank />} />
      <Route path="/khanacademy" element={<KhanAcademy />} />
    </Routes>
  );
}

export default App;