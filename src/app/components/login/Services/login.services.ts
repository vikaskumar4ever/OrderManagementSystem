
import { Observable } from 'rxjs'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Admin } from '../Model/login.model';


@Injectable()
export class LoginService {

    // validateLoginUser(Login: Admin) {
    //     const headers = new Headers({ 'Content-Type': 'application/json' });
    //     const options = new RequestOptions({ headers: headers });
    //     return this._http.post(this.apiUrl + 'Login', Login, options).pipe(
    //         map((response: Response) => {
    //             const webresponse = response.json() && response.json();
    //             if (webresponse != null) {
    //                 if (webresponse.adminId != null) {
    //                     localStorage.setItem('', JSON.stringify({ AdminId: webresponse.adminId, Name: webresponse.userName, EmailId: webresponse.emailId, token: webresponse.token }));
    //                 }
    //                 return webresponse;
    //             }
    //             else {
    //                 return null;
    //             }
    //         }
    //         ),
    //         catchError(response => {
    //             if (response.status === 401) {
    //                 this._router.navigate(['login']);
    //             }
    //             return response;
    //         })
    //     );
    // }

}