import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../apiRoot/baseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SystemStettings {
    private _htpp = inject(HttpClient);

    GetSystemSettingByKey(Key: string): Observable<any> {
        return this._htpp.get(`${baseUrl}SystemSettings/${Key}`);
    }
}
