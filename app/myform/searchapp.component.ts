import {Component} from 'angular2/core';
import {ItemListComponent} from './search-list.component';

@Component({
    selector: 'my-app',
    template: `
    <my-list>
    {{persons}}
    	<ul>
    		<template ngFor let-person="$implicit" [ngForOf]="persons">
    			<li>{{person.email}}</li>
    		</template>
    	</ul>
    </my-list>
    `,
    directives:[ItemListComponent]
})
export class AppComponent {}