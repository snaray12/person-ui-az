System.register(["angular2/core", 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var PersonService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            PersonService = (function () {
                function PersonService(http) {
                    this.save_endpoint_url = "http://localhost:5000/persons";
                    this.getall_endpoint_url = "http://localhost:5000/persons/getall/";
                    this.getPersonByName_endpoint_url = "http://localhost:5000/persons/findByName/";
                    this.http = http;
                }
                PersonService.prototype.addPerson = function (value) {
                    //   	const body = new URLSearchParams();
                    //	Object.keys(value).forEach(key => {    body.set(key, value[key]);
                    //	}
                    var body = JSON.stringify(value);
                    console.log(body);
                    //    let headers = new Headers();
                    //	headers.append('Content-Type', 'application/json');
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
                    return this.http.post(this.save_endpoint_url, body, options).map(function (res) { return res.json(); });
                };
                PersonService.prototype.getAllPersons = function () {
                    return this.http.get(this.getall_endpoint_url).map(function (res) { return res.json(); });
                };
                PersonService.prototype.getPersonByName = function (value) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.get(this.getPersonByName_endpoint_url + value, options).map(function (res) { return res.json(); });
                };
                PersonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PersonService);
                return PersonService;
            }());
            exports_1("PersonService", PersonService);
        }
    }
});
//# sourceMappingURL=person.service.js.map