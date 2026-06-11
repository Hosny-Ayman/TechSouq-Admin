import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { orderStatus } from '../enums/orderStatus';
import { Observable } from 'rxjs';
import { baseUrl } from '../../apiRoot/baseUrl';
import { IOrderParams } from '../../interfaces/IOrderPrams';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private _htpp = inject(HttpClient);

    tableState = {
        first: 0,
        rows: 10,
        searchTerm: '',
        selectedStatus: null as orderStatus | null
    };

    GetAllOrdersPaged(Order: IOrderParams): Observable<any> {
        let params: any = { PageNumber: Order.PageNumber, PageSize: Order.PageSize };

        if (Order.OrderStatus !== null) {
            params.status = Order.OrderStatus;
        }

        if (Order.search !== '') {
            params.search = Order.search;
        }

        return this._htpp.get(`${baseUrl}Orders/GetAllOrdersPaged`, { params: params });
    }

    GetOrderDtailsAdmin(OrderId: number) {
        let params: any = { OrderId: OrderId };

        return this._htpp.get(`${baseUrl}Orders/GetOrderDtailsAdmin`, { params: params });
    }

    UpdateStatus(OrderId: number, Status: orderStatus) {
        let params: any = { OrderId: OrderId, Status: Status };

        return this._htpp.put(`${baseUrl}Orders/UpdateStatus`, null, { params });
    }
}
