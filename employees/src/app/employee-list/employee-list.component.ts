import { Component } from '@angular/core';
import { Employee } from '../../Models/employee';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees:Employee[]=[
    {
      id:1,
      name:"arjun",
      gender:"male",
      email:"arjun98999899@gmail.com",
      phoneNumber:7387751913,
      contactPreference:"no",
      dateOfBirth:new Date('11/10/2002'),
      department:"developement",
      isActive:true,
      photoPath:"i1.jpg"

    },
    {
      id:1,
      name:"kshitij",
      gender:"male",
      email:"kshitijlavhe11@gmail.com",
      phoneNumber:7387751913,
      contactPreference:"no",
      dateOfBirth:new Date(11-10-2002),
      department:"developement",
      isActive:true,
      photoPath:"i2.jpg"
    },
    {
      id:1,
      name:"arjun",
      gender:"male",
      email:"arjun98999899@gmail.com",
      phoneNumber:7387751913,
      contactPreference:"no",
      dateOfBirth:new Date(11/10/2002),
      department:"developement",
      isActive:true,
      photoPath:"i3.webp"
    }
  ]

}
