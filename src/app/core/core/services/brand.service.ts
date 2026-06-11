import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../../apiRoot/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BrandService {
    private _http = inject(HttpClient);

    GetAllBrands(): Observable<any> {
        return this._http.get(`${baseUrl}Brands/GetAllBrands`);
    }
}
