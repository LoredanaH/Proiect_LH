import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ComandaService } from 'src/app/services/comanda.service';

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css'],
  
})
export class CosComponent {

  /*item: Item = new item();*/
  submitted = false;

  constructor(private comandaService: ComandaService) { }

  ngOnInit() {
  }

 /* saveTutorial(): void {
    this.comandaService.addItem(this.item).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }*/

  newTutorial(): void {
    this.submitted = false;
    /*this.item = new Item();*/
  }
}
