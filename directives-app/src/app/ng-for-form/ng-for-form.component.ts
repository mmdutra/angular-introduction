import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {


  name:string = '';
  address:string = '';
  phone:string = '';
  city:string = '';
  age:number = 0;

  clients = [];

  cities = [
    {
      name: "São Paulo", state: "SP"
    },
    {
      name: "Belo Horizonte", state: "MG"
    },
    {
      name: "Rio de Janeiro", state: "RJ"
    }
  ];

  save(){
    this.clients.push({
        name: this.name,
        address: this.address,
        city: this.city,
        phone: this.phone,
        age: this.age
      }
    );
    this.cancel();
  }

  cancel(){
    this.name = '';
    this.address = '';
    this.phone = '';
    this.city = '';
    this.age = 0;
  }

  delete(i:number){
    this.clients.splice(i, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
