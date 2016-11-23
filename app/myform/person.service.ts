import {Injectable} from "angular2/core"
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/Rx'
 
@Injectable()
export class PersonService{
 
   save_endpoint_url:String = "http://localhost:5000/persons";
   getall_endpoint_url:String = "http://localhost:5000/persons/getall/";
   getPersonByName_endpoint_url:String = "http://localhost:5000/persons/findByName/"
 
   constructor(http: Http){
       this.http = http;
   }

   addPerson(value: Object) {
//   	const body = new URLSearchParams();
//	Object.keys(value).forEach(key => {    body.set(key, value[key]);
//	}
	const body = JSON.stringify(value);
	console.log(body);
//    let headers = new Headers();

//	headers.append('Content-Type', 'application/json');
	let headers      = new Headers({ 'Content-Type': 'application/json' }); 
	let options       = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.save_endpoint_url, body, options).map(res => res.json());
   }
 
   getAllPersons (){
       return this.http.get(this.getall_endpoint_url).map(res => res.json());
   }
   getPersonByName(value: String) {
   let headers      = new Headers({ 'Content-Type': 'application/json' }); 
	let options       = new RequestOptions({ headers: headers });

   return this.http.get(this.getPersonByName_endpoint_url+value, options).map(res=> res.json());
   }
}