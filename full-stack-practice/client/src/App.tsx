import { Route, Routes } from 'react-router-dom';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { Header } from './components/Header';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
