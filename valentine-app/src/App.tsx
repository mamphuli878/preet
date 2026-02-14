import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proposal from './pages/Proposal';
import Celebration from './pages/Celebration';
import DatePlanner from './pages/DatePlanner';
import LoveMeter from './pages/LoveMeter';
import Timeline from './pages/Timeline';
import Reasons from './pages/Reasons';
import Coupons from './pages/Coupons';
import Finale from './pages/Finale';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Proposal />} />
                <Route path="/celebration" element={<Celebration />} />
                <Route path="/planner" element={<DatePlanner />} />
                <Route path="/love-meter" element={<LoveMeter />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/reasons" element={<Reasons />} />
                <Route path="/coupons" element={<Coupons />} />
                <Route path="/finale" element={<Finale />} />
            </Routes>
        </Router>
    );
}

export default App;
