import React from 'react';
import './project-items.styles.scss';

import {useDispatch, useSelector} from "react-redux";
import {deleteProjectStartAsync, editProjectModal} from "../../redux/project/project.action";
import {fetchTasksByProject, toggleAddTask, toggleEditTask} from "../../redux/task/task.action";
import {selectToggleAddTask, selectToggleEditTask} from "../../redux/task/task.selector";

const ProjectItem = ({project}) => {

    const dispatch = useDispatch();
    const {hidden: isEditTaskHidden, index} = useSelector(selectToggleEditTask);
    const toggleAddTaskSelector = useSelector(selectToggleAddTask);

    const deleteProject = (e) => {
        e.stopPropagation();
        dispatch(deleteProjectStartAsync(project.id))
    };

    const editProject = (e) => {
        e.stopPropagation();
        dispatch(editProjectModal(project));
    };

    const fetchTasks = () => {
        if(toggleAddTaskSelector) {
            dispatch(toggleAddTask())
        }

        if(!isEditTaskHidden) {
            dispatch(toggleEditTask(index))
        }

        dispatch(fetchTasksByProject(project))
    };

    return (
        <li className="prj-item" onClick={fetchTasks}>
            <a> {project.name}
                <span className="icon prj-icon-delete" onClick={deleteProject}>
                    <i className="fas fa-trash"></i>
                </span>
                <span className="icon prj-icon-edit" onClick={editProject}>
                    <i className="fas fa-edit"></i>
                </span>
            </a>
        </li>
    )
};

export default ProjectItem
