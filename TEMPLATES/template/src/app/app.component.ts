import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Info } from '../model/obk';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,BrowserModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template';
  obj:Info={
    name:"sample",
    email:"eg@gmail.com",
    phoneNumber:9876543211
  }
}
