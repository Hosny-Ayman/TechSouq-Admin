import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../apiRoot/baseUrl';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private _http = inject(HttpClient);

    GetAllCategorieForSelect(): Observable<any> {
        return this._http.get(`${baseUrl}Categories/GetAllCategorieForSelect`);
    }
}
