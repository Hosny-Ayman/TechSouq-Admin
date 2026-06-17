import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../../apiRoot/baseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CustomersAdminService {
    private _http = inject(HttpClient);

    getAllCustomersPaged(pageNumber: number, pageSize: number, emailSearch: string = '') {
        let params: any = { pageNumber: pageNumber, pageSize: pageSize, EmailSearch: emailSearch };
        return this._http.get(`${baseUrl}Users/GetAllCustomersPaged`, { params: params });
    }

    getCustomerDetails(customerId: number) {
        let params: any = { customerId: customerId };
        return this._http.get(`${baseUrl}Users/GetCustomerDetails`, { params: params });
    }

    toggleCustomerActive(customerId: number) {
        let params: any = { customerId: customerId };
        return this._http.get(`${baseUrl}Users/IsActive`, { params: params });
    }
}
