import './styles.css'
import './/scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { Modal } from 'bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import ProjectButton from './components/Project_Button_Component.js';
import ProjectButtonController from './controller/Project_Button_Controller.js';
import TaskComponent from './components/Task_Component.js';

var $ = require("jquery")

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
let tasksContainer = document.querySelector('#tasks-container')

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




// window.localStorage.clear()

let projectButtonController = new ProjectButtonController()


console.log(projectButtonController);



// const tricepPushDown = new TaskComponent("Tricep", "Hard", "Sept 24, 2024", false)

// tasksContainer.appendChild(tricepPushDown.renderTaskComponent())