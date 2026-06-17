import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../../apiRoot/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BrandService {
    private _http = inject(HttpClient);

    createBrand(brand: any) {
        return this._http.post(`${baseUrl}Brands/Create`, brand);
    }

    updateBrand(brand: any) {
        return this._http.put(`${baseUrl}Brands/Update`, brand);
    }

    deleteBrand(id: number) {
        return this._http.delete(`${baseUrl}Brands/Delete?BrandId=${id}`);
    }

    GetAllBrands(): Observable<any> {
        return this._http.get(`${baseUrl}Brands/GetAllBrands`);
    }

    getAllBrandsPaged(PageNumber: number, PageSize: number, RealTimeData: boolean = true) {
        let params: any = { PageNumber: PageNumber, PageSize: PageSize, RealTimeData: RealTimeData };
        return this._http.get(`${baseUrl}Brands/GetAllBrandsPaged`, { params: params });
    }
}
