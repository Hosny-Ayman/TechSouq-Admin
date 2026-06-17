import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../apiRoot/baseUrl';

@Injectable({
    providedIn: 'root'
})
export class DeliveryZonesService {
    private _http = inject(HttpClient);

    getAllPaged(pageNumber: number, pageSize: number, nameSearch: string = '') {
        let params: any = { pageNumber: pageNumber, pageSize: pageSize, NameSearch: nameSearch };
        return this._http.get(`${baseUrl}DeliveryZones/GetAllDeliveryZonesPaged`, { params: params });
    }

    addZone(zone: any) {
        return this._http.post(`${baseUrl}DeliveryZones`, zone);
    }

    updateZone(zone: any) {
        return this._http.put(`${baseUrl}DeliveryZones/UpdateDeliveryZone`, zone);
    }

    deleteZone(id: number) {
        let params: any = { DeliveryZoneId: id };
        return this._http.delete(`${baseUrl}DeliveryZones/DeleteDeliveryZone`, { params: params });
    }
}
