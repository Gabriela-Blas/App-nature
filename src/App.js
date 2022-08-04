import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home.js"
import Product from "./views/Product.js"
import Scan from "./views/Scan.js"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/scan" element={<Scan />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
