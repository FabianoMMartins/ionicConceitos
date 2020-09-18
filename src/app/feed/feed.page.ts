import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  // CRIANDO VARIAVEIS COM TYPESCRIPT
  public nome_usuario:string = "Fabiano Martins";

  constructor() { }
 
  // FUNÇÃO
  public SomaDoisNumeros():void{
    alert(10+10);
  }

  public SomaDois(num1:number, num2:number):void{
    alert(num1+num2);
  }

  ngOnInit() {
   // this.SomaDoisNumeros();
   // this.SomaDois(5,5);
  }

}
