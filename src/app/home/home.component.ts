import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
 

  newAppointmentTitle : string = " ";
  newAppointmentDate : Date = new Date();

  appointments : Appointment[] = []


  ngOnInit(): void {
    
    let savedAppointments = localStorage.getItem("appointments")

    // The below statement will check if there is any existing appointments are there or not if not it will create the empty array
    // or if there is any existing values then it will load it into the UI. 
    //The below syntax is know as the ternary Operator syntax : condition ? expression1 : expression2

    this.appointments = savedAppointments ?  JSON.parse(savedAppointments) : []
  }


  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment : Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

    this.appointments.push(newAppointment)

      this.newAppointmentTitle= "";
      this.newAppointmentDate= new Date();   
      localStorage.setItem("appointments", JSON.stringify(this.appointments))   
    }  
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments))   
  }
}
