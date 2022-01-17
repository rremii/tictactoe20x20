import {NavLink} from "react-router-dom";
import css from './MainPage.module.sass'

const MainPage = () => {
    return <div className={css.mainPage}>
        <div className={css.container}>

            <NavLink to='/TicTacToe'>TicTacToe</NavLink>
            <NavLink to='/FiveInARow'>FiveInARow</NavLink>
        </div>
    </div>
}
export default MainPage