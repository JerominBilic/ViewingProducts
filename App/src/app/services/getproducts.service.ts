import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetproductsService {

  Stationary = [
    {id:1, name: "Books"},
    {id:1, name: "Pen"},
    {id:1, name: "Folder"},
    {id:1, name: "Staplers"}
  ];

  constructor() { }

  getProducts(){
    return this.Stationary;

  }
}
