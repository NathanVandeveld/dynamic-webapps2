import "modern-normalize";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
