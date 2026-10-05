import {ExercisesPage} from "../../pages/ExercisesPage.jsx";
import {MenuCardPage} from "../../pages/MenuCardPage.jsx";
import {PersonsPage} from "../../pages/PersonsPage.jsx";
import {
    NAV_EXERCISES, NAV_INPUT,
    NAV_MENU,
    NAV_NUMBERS,
    NAV_PERSONS,
    NAV_STATE,
    NAV_SYNTHETIC_EVENT
} from "../../constants/navConstants.js";
import {StatePage} from "../../pages/StatePage.jsx";
import {EventPage} from "../../pages/EventPage.jsx";
import {FavoriteNumberPage} from "../../pages/FavoriteNumberPage.jsx";
import {InputPage} from "../../pages/InputPage.jsx";

export function PageRouter(props) {
    const {activeNavBarItem, onSelectNavBarItem} = props;

    switch (activeNavBarItem) {
        case NAV_EXERCISES:
            return <ExercisesPage onSelectExercise={onSelectNavBarItem}/>;
        case NAV_MENU:
            return <MenuCardPage/>;
        case NAV_PERSONS:
            return <PersonsPage/>;
        case NAV_STATE:
            return <StatePage/>;
        case NAV_SYNTHETIC_EVENT:
            return <EventPage/>;
        case NAV_NUMBERS:
            return <FavoriteNumberPage/>;
            case NAV_INPUT:
                return<InputPage/>;
        default:
            return <ExercisesPage onSelectExercise={onSelectNavBarItem}/>;
    }
}
