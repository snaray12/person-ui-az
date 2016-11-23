System.register(['angular2/core', 'angular2/common', 'angular2/http', './person.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, common_2, common_3, http_1, person_service_1;
    var Angular2FormBuilderExampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
                common_3 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            }],
        execute: function() {
            Angular2FormBuilderExampleComponent = (function () {
                function Angular2FormBuilderExampleComponent(_builder, _personService) {
                    this._builder = _builder;
                    this._personService = _personService;
                    this.personService = this._personService;
                    this.personFormGroup = this._builder.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.required],
                        phoneNo: ['', common_1.Validators.required],
                    });
                }
                Object.defineProperty(Angular2FormBuilderExampleComponent.prototype, "personFormGroupValue", {
                    get: function () {
                        return JSON.stringify(this.personFormGroup.value, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                Angular2FormBuilderExampleComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    console.log('you submitted value:', form);
                    this.error = '';
                    this.persons = [];
                    this._personService.addPerson(form).subscribe(function (data) { return _this.persons = data; }, function (error) { return _this.error = "Error"; });
                    /**        this._personService.getAllPersons().subscribe(data=>this.persons = data, error => this.error="No Person Found");
                    **/
                };
                Angular2FormBuilderExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/myform/angular-2-formbuilder.html',
                        directives: [common_2.CORE_DIRECTIVES, common_3.FORM_DIRECTIVES],
                        providers: [person_service_1.PersonService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, person_service_1.PersonService])
                ], Angular2FormBuilderExampleComponent);
                return Angular2FormBuilderExampleComponent;
            }());
            exports_1("Angular2FormBuilderExampleComponent", Angular2FormBuilderExampleComponent);
        }
    }
});
//# sourceMappingURL=angular-2-formbuilder.component.js.map