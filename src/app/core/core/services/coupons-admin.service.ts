import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../apiRoot/baseUrl';

@Injectable({
    providedIn: 'root'
})
export class CouponsAdminService {
    private _http = inject(HttpClient);

    getAllPaged(pageNumber: number, pageSize: number, codeSearch: string = '') {
        let params: any = { pageNumber: pageNumber, pageSize: pageSize, CodeSearch: codeSearch };
        return this._http.get(`${baseUrl}Coupons/GetAllCouponsPaged`, { params: params });
    }

    getCoupon(id: number) {
        let params: any = { id: id };
        return this._http.get(`${baseUrl}Coupons/GetCouponById`, { params: params });
    }

    addCoupon(coupon: any) {
        return this._http.post(`${baseUrl}Coupons/Add`, coupon);
    }

    updateCoupon(coupon: any) {
        return this._http.put(`${baseUrl}Coupons/Update`, coupon);
    }

    deleteCoupon(id: number) {
        return this._http.delete(`${baseUrl}Coupons/Delete/${id}`);
    }
}
