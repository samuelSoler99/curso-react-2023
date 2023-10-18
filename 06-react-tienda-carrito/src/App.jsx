import './App.css';
import {useState} from 'react';
import {products as initialProducts} from './mocks/products.json';
import {Products} from './components/Products.jsx';
import {Header} from './components/Header.jsx';
import {useFilters} from './hooks/useFilters.js';
import {Footer} from './components/Footer.jsx';
import {IS_DEVELOPMENT} from './config.js';
import {Cart} from "./components/Cart.jsx";
import {CartProvider} from "./context/cartContext.jsx";

function App() {
    const [products] = useState(initialProducts);
    const {filterProducts} = useFilters();
    const filteredProducts = filterProducts(products);

    return (
        <CartProvider>
            <Header></Header>
            <Cart></Cart>
            <Products produtcs={filteredProducts}></Products>
            {IS_DEVELOPMENT && <Footer></Footer>}
        </CartProvider>
    );
}

export default App;
