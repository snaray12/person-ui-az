import {Component} from 'angular2/core';
import {ControlGroup,FormBuilder, Validators } from 'angular2/common';
import {CORE_DIRECTIVES} from 'angular2/common';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PersonService} from './person.service'

@Component({
   selector:'my-list',
   template:`
      <input type="text" #listItem>
      <button (click)="onSearch(listItem)">Search</button>
      <a href="index.html">Add Person</a>
      <ul>
        <li *ngFor="#person of persons">
          {{person.id}} {{person.name}} {{person.email}} {{person.phoneNo}} <button>Delete</button><button>Edit</button>
        </li>
      </ul>
   `,
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
   providers: [PersonService, HTTP_PROVIDERS]
})

export class ItemListComponent{
   personService: PersonService;
   constructor(private _personService: PersonService) {
      this.personService = this._personService;
    }
   public listItems = [
      {name:"apple"},
      {name:"orange"},
      {name:"grapes"},
   ];
   public selectedItem = {name: ""};

   onItemClicked(listItem){
      this.selectedItem=listItem;
   }

   onAddItem(listItem){
      this.listItems.push({name:listItem.value});
   }

   onDeleteItem(){
      this.listItems.splice(this.listItems.indexOf(this.selectedItem),1);
   }
   onSearch(listItem) {
      console.log('you submitted value:', listItem.value);
        this.error = '';
        this.persons=[];
        this._personService.getPersonByName(listItem.value).subscribe(data=>this.persons = data, error=>this.error="Error")
   }
}