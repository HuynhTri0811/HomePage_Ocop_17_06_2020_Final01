import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UrlAPI, httpOption, httpOptionParames } from '../settings/config';

@Injectable({
    providedIn: 'root'
})
export class DataService {


    constructor(private httpClient: HttpClient) {

    }

    public getJSON(_jsonURL){
      return this.httpClient.get(_jsonURL);
    }


    getAll(page_index) {
        return this.httpClient.get(UrlAPI + 'api/ecommerce/ocop/product/findall?page_index=' + page_index, httpOption());
    }


    getDetail(productId) {
        return this.httpClient.post(UrlAPI + 'api/ecommerce/ocop/product/detail', {
            'product_id': productId
        }, httpOption());
    }

}
