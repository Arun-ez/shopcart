
import './App.css';
import Navbar from './components/Header/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Viewer from './components/Viewer/Viewer';
import Products from './components/Products/Products';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';


function App() {

  const routeList = [
    { path: "/", element: <HomePage /> },
    { path: "products/:category", element: <Products title="Smartphones" param="smartphone" /> },
    { path: "/products/:category/:id", element: <Viewer /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/cart", element: <Cart /> },
    { path: "/*", element: <NotFound /> }
  ]

  return (
    <div className="App">
      <Navbar />
      <div id='content'>
        <Routes>
          {routeList.map(({ path, element }, id) => {
            return <Route path={path} element={element} key={id} />
          })}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
