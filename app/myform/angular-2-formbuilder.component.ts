import {Component} from 'angular2/core';
import {ControlGroup,FormBuilder, Validators } from 'angular2/common';
import {CORE_DIRECTIVES} from 'angular2/common';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PersonService} from './person.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/myform/angular-2-formbuilder.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [PersonService, HTTP_PROVIDERS]
})
export class Angular2FormBuilderExampleComponent {
    personFormGroup: ControlGroup; // this is our Form used to insert a person
    personService: PersonService;

    constructor(private _builder:FormBuilder, private _personService: PersonService) {// in our Constructor we inject the FormBuilder (we create a private variable _builder)
        this.personService = this._personService;
       this.personFormGroup = this._builder.group({ // we create our Form with the FormBuilder (3 elements)
                name: ['', Validators.required],//we add a validator with Validators
                email: ['', Validators.required],
                phoneNo: ['', Validators.required],
        });
    }
    get personFormGroupValue(): string { //this method returns the content of our personForm (we use it in our Template)
        return JSON.stringify(this.personFormGroup.value, null, 2);
    }
    onSubmit(form: any): void {  
        console.log('you submitted value:', form);
        this.error = '';
        this.persons=[];
        this._personService.addPerson(form).subscribe(data=>this.persons = data, error=>this.error="Error")
/**        this._personService.getAllPersons().subscribe(data=>this.persons = data, error => this.error="No Person Found");
**/
    }
}