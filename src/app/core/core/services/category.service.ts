import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../apiRoot/baseUrl';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private _http = inject(HttpClient);

    createCategory(category: any) {
        return this._http.post(`${baseUrl}Categories/Create`, category);
    }

    updateCategory(category: any) {
        return this._http.put(`${baseUrl}Categories/Update`, category);
    }

    deleteCategory(id: number) {
        return this._http.delete(`${baseUrl}Categories/Delete?CategorieId=${id}`);
    }

    GetAllCategorieForSelect(): Observable<any> {
        return this._http.get(`${baseUrl}Categories/GetAllCategorieForSelect`);
    }

    getAllCategoriesPaged(pageNumber: number, pageSize: number, RealTimeData: boolean = true) {
        const params: any = { PageNumber: pageNumber, PageSize: pageSize, RealTimeData: RealTimeData };
        return this._http.get(`${baseUrl}Categories/GetAllCategoriesAsync`, { params: params });
    }
}
