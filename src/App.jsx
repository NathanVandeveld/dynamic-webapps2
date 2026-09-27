import {useState} from "react";
import "modern-normalize";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {PageRouter} from "./components/navigation/PageRouter.jsx";
import {SandboxNavBar} from "./components/navigation/SandboxNavBar.jsx";
import {NAV_EXERCISES} from "./constants/navConstants.js";

function App() {
    const [activeNavBarItem, setActiveNavBarItem] = useState(NAV_EXERCISES);

    return (
        <>
            <SandboxNavBar
                activeNavBarItem={activeNavBarItem}
                onSelectNavBarItem={setActiveNavBarItem}
            />
            <PageRouter
                activeNavBarItem={activeNavBarItem}
                onSelectNavBarItem={setActiveNavBarItem}
            />
        </>
    );
}

export default App;
