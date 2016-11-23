import {Component} from 'angular2/core';
import {ControlGroup,FormBuilder, Validators } from 'angular2/common';
import {CORE_DIRECTIVES} from 'angular2/common';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PersonService} from './person.service'


@Component({
    selector: 'my-app',
    templateUrl: 'app/myform/search.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [PersonService, HTTP_PROVIDERS]
})