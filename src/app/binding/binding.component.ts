import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit {
  titre: string = "Apprrendre le data binding dans Angular 10";
  status: boolean = true;
  nom : string = "Souissi Ahmed";
  changertitre() {
    this.titre = "Mon nouveau titre";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
