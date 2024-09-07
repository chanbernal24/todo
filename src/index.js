import './styles.css'
import './/scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { Modal } from 'bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import ProjectButton from './components/Project_Button_Component.js';
import ProjectButtonController from './controller/Project_Button_Controller.js';

var $ = require("jquery")

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


$(document).ready(function () {
    var popovers = new
        bootstrap.Popover(document.querySelector('#details'), {
            container: 'body',
            placement: 'right',
            title: "Actions",
            html: true,
            content: `
                <a href="#" role="button" class="btn btn-sm     btn-primary">
                    <i class="bi bi-pencil-square"></i>
                </a>
                <a href="#" role="button" class="btn btn-sm btn-danger">
                    <i class="bi bi-trash3-fill"></i>
                </a>
                `

        })
});


window.addEventListener('load', () => {
    projectButtonController.removeNodesInsideButtonContainerThenRender()
})

let projectButtonController = new ProjectButtonController()

console.log("Hello Worldssss!");

const saveProject = document.querySelector('#save-project')
saveProject.addEventListener('click', () => {
    let projectName = document.querySelector('#project-name')
    projectButtonController.addProject(projectName.value)
    projectButtonController.removeNodesInsideButtonContainerThenRender()
    projectName.value = ""
})