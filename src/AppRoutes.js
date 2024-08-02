import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { About } from "./components/pages/About";
import { Skills } from "./components/pages/Skills";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element = {<Skills />} />
            </Routes>
        </Router>
    )
}
