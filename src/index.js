import './styles.css'
import './/scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { Modal } from 'bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import ProjectButton from './components/Project_Button_Component.js';
import ProjectButtonController from './controller/Project_Button_Controller.js';



let projectButtonController = new ProjectButtonController()

console.log("Hello Worldssss!");

const saveProject = document.querySelector('#save-project')
saveProject.addEventListener('click', () => {
    let projectName = document.querySelector('#project-name')
    projectButtonController.addProject(projectName.value)
    projectButtonController.removeNodesInsideButtonContainerThenRender()
    projectName.value = ""
})