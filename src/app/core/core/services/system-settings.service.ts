import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { baseUrl } from '../../apiRoot/baseUrl';

@Injectable({
    providedIn: 'root'
})
export class SystemSettingsService {
    private _http = inject(HttpClient);

    getAllSettings() {
        return this._http.get(`${baseUrl}SystemSettings/GetAllSystemSettings`);
    }

    getSettingByKey(key: string) {
        return this._http.get(`${baseUrl}SystemSettings/${key}`);
    }

    addSetting(setting: any) {
        return this._http.post(`${baseUrl}SystemSettings/Add`, setting);
    }

    updateSetting(setting: any) {
        return this._http.put(`${baseUrl}SystemSettings/Update`, setting);
    }
}
