import './App.css';
import 'node_modules/modern-normalize/modern-normalize.css';
import {MenuCard} from "./components/MenuCard.jsx";
import {PRODUCTS_DATA} from "./data/data.jsx";

function App() {

    return (
        <>
            <MenuCard products={PRODUCTS_DATA}/>
        </>
    );
}

export default App;
