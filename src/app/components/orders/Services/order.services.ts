import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Admin } from '../../login/Model/login.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    
    constructor(private http: HttpClient) { }
 

    addOrder(data: any) {
        return this.http.post<any>("http://localhost:3000/posts", data)
            .pipe(map((response: any) => {
                return response;
            }))
    }
    getOrder() {
        return this.http.get<any>("http://localhost:3000/posts")
            .pipe(map((response: any) => {
                return response;
            }))
    }

    // validateLogin(adminobj: Admin) {
    //     return this.http.post(adminobj.emailId="admin@gmail.com", adminobj.password="123456")
    //         .pipe(map((response: any) => {
    //             return response;
    //         }))
    // }

    updateOrder(data: any, id: number) {
        return this.http.put<any>("http://localhost:3000/posts/" + id, data)
            .pipe(map((response: any) => {
                return response;
            }))
    }
    deleteOrder(id: number) {
        return this.http.delete<any>("http://localhost:3000/posts/" + id)
            .pipe(map((response: any) => {
                return response;
            }))
    }
}