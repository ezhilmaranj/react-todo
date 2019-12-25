import React from 'react';
import {fetchTasksForAWeek, fetchTasksForDefaultProject, fetchTasksForToday} from "../../redux/task/task.action";
import {connect, useDispatch, useSelector} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectToggleBurgerMenu} from "../../redux/project/project.selector";
import {toggleBurgerMenuAction} from "../../redux/project/project.action";

const DefaultMenuItems = ({currentUser}) => {
    const dispatch = useDispatch();
    const toggleBurgerMenu = useSelector(selectToggleBurgerMenu);

    const fetchDefaultTasks = () => {
        dispatch(fetchTasksForDefaultProject(currentUser.id));
        if(toggleBurgerMenu)
            dispatch(toggleBurgerMenuAction());
    };

    const fetchTodayTasks = () => {
        dispatch(fetchTasksForToday(currentUser.id));
        if(toggleBurgerMenu)
            dispatch(toggleBurgerMenuAction());
    };

    const fetchWeekTasks = () => {
        dispatch(fetchTasksForAWeek(currentUser.id));
        if(toggleBurgerMenu)
            dispatch(toggleBurgerMenuAction());
    };

    return (
        <ul className="menu-list">
            <li onClick={fetchDefaultTasks}>
                <a href="#"><span className="icon has-margin-right-5" style={{color:'#246fe0'}}><i className="fa fa-inbox"></i></span>Inbox</a>
            </li>
            <li onClick={fetchTodayTasks}>
                <a href="#"><span className="icon has-margin-right-5" style={{color: '#058527'}}><i className="fa fa-calendar-check"></i></span>Today</a>
            </li>
            <li onClick={fetchWeekTasks}>
                <a href="#"><span className="icon has-margin-right-5" style={{color: '#692fc2'}}><i className="fa fa-calendar-alt"></i></span>Next 7 days</a>
            </li>
        </ul>
    );
};
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
});
export default  connect(mapStateToProps)(DefaultMenuItems);