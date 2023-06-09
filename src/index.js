/*eslint-disable*/
import _ from 'lodash'; /*eslint-disable*/
import './style.css';
import { Functionality } from './modules/functionality';
const taskContainer = document.getElementById('first-section');
const submitButton = document.getElementById('for-button');
let editButtonStats=false;
window.onload = function windowReady() {
  Functionality.displayTask();
  submitButton.onclick = function () {
    Functionality.newTask();
  };

taskContainer.addEventListener('click', (e) => {
  if (e.target !== null && e.target !== 'NaN' && e.target !== '') {
    if (e.target.className === 'editButton') {
      const ids = e.target.id.replace('editBttn-', '');
      let description = document.getElementById('d' + ids);
      let data = Functionality.getAllTasks();
      const index = parseInt(ids, 10);
      let editInput = document.getElementById('edit-'+ ids);
      description.style.display='none';
      editInput.style.display='block';
      if (editButtonStats !== false) {
        data[index-1].description=editInput.value;
        description.style.display='block';
        editInput.style.display='none';
        Functionality.updateTask(data);
        Functionality.displayTask();
        editButtonStats = false;
      }else{
        editButtonStats = true;
      }
    }
  }
});

 Functionality.displayTask();
 taskContainer.addEventListener('click', (e) => {
   if (e.target !== null && e.target !== 'NaN' && e.target !== '') {
     if (e.target.className === 'deleteButton') {
       const ids = e.target.id.replace('delete-', '');
       const data = Functionality.getAllTasks();
       const index = parseInt(ids, 10);
       if (data !== []) {
         Functionality.removeTask(index-1);
       }
     }
   }
 });

};