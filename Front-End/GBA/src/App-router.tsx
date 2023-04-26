import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaulLayout from './layouts/default-layout';
import ReportSalles from './pages/report-salles';


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<DefaulLayout />}>
                    <Route path="report-salles" element={<ReportSalles />} />
                    <Route path="*" element={<DefaulLayout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
