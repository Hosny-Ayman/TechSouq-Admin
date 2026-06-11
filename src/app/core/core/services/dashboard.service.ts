import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IDashboardParams } from '../../interfaces/IDashboardParams';
import { baseUrl } from '../../apiRoot/baseUrl';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private _http = inject(HttpClient);

    RecentSales(Dashboard: IDashboardParams): Observable<any> {
        let params: any = { PageNumber: Dashboard.PageNumber, PageSize: Dashboard.PageSize };

        if (Dashboard.SortField !== undefined && Dashboard.SortField !== null && Dashboard.SortField !== 'undefined') {
            params.SortField = Dashboard.SortField;
        }

        if (Dashboard.SortOrder !== undefined && Dashboard.SortOrder !== null) {
            params.SortOrder = Dashboard.SortOrder;
        }
        return this._http.get(`${baseUrl}Dashboard/RecentSales`, { params: params });
    }

    ShowDashboardInfo(): Observable<any> {
        return this._http.get(`${baseUrl}Dashboard/ShowDashboardInfo`);
    }

    SalesLast7Days(): Observable<any> {
        return this._http.get(`${baseUrl}Dashboard/SalesLast7Days`);
    }

    BestSellingProducts(): Observable<any> {
        return this._http.get(`${baseUrl}Dashboard/BestSellingProducts`);
    }
}
