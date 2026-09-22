import './App.css';
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
