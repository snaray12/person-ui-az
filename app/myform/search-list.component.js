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
    var core_1, common_1, common_2, http_1, person_service_1;
    var ItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            }],
        execute: function() {
            ItemListComponent = (function () {
                function ItemListComponent(_personService) {
                    this._personService = _personService;
                    this.listItems = [
                        { name: "apple" },
                        { name: "orange" },
                        { name: "grapes" },
                    ];
                    this.selectedItem = { name: "" };
                    this.personService = this._personService;
                }
                ItemListComponent.prototype.onItemClicked = function (listItem) {
                    this.selectedItem = listItem;
                };
                ItemListComponent.prototype.onAddItem = function (listItem) {
                    this.listItems.push({ name: listItem.value });
                };
                ItemListComponent.prototype.onDeleteItem = function () {
                    this.listItems.splice(this.listItems.indexOf(this.selectedItem), 1);
                };
                ItemListComponent.prototype.onSearch = function (listItem) {
                    var _this = this;
                    console.log('you submitted value:', listItem.value);
                    this.error = '';
                    this.persons = [];
                    this._personService.getPersonByName(listItem.value).subscribe(function (data) { return _this.persons = data; }, function (error) { return _this.error = "Error"; });
                };
                ItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-list',
                        template: "\n      <input type=\"text\" #listItem>\n      <button (click)=\"onSearch(listItem)\">Search</button>\n      <ul>\n         <li *ngFor=\"#listItem of listItems\"\n            (click)=\"onItemClicked(listItem)\">{{listItem.name}}\n         </li>\n      </ul>\n   ",
                        directives: [common_1.CORE_DIRECTIVES, common_2.FORM_DIRECTIVES],
                        providers: [person_service_1.PersonService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [person_service_1.PersonService])
                ], ItemListComponent);
                return ItemListComponent;
            }());
            exports_1("ItemListComponent", ItemListComponent);
        }
    }
});
//# sourceMappingURL=search-list.component.js.map