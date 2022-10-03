import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service'

@Component({
  selector: 'app-crearpersona',
  templateUrl: './crearpersona.component.html',
  styleUrls: ['./crearpersona.component.css']
})
export class CrearpersonaComponent implements OnInit {

  personas: Persona[] = []

  constructor(private personaService: PersonaService) { }

  ngOnInit() {

    this.personaService.getPersonas().subscribe(
      personas => this.personas = personas
    );
  }
  displayStyle = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  displayStyle4 = "none";
  

  
  openPopup() {
    this.displayStyle = "block";
  }
  openPopup2() {
    this.displayStyle2 = "block";
  }
  openPopup3() {
    this.displayStyle3 = "block";
  }
  openPopup4() {
    this.displayStyle4 = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  closePopup2() {
    this.displayStyle2 = "none";
  }
  closePopup3() {
    this.displayStyle3 = "none";
  }
  closePopup4() {
    this.displayStyle4 = "none";
  }
  

}
