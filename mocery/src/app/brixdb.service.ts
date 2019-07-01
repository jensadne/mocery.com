import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse} from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from '../environments/environment';

import { Colour } from './models/colour';
import { Part } from './models/part';
import { Set } from './models/set';
import { Element } from './models/element';
import { PartDetailData } from './part-detail/part-detail';
import { BricklinkPrice } from './models/bricklink-price';
import { BricksnPiecesPrice } from './models/bricksnpieces-price';

@Injectable()
export class BrixdbService {
    constructor(
        private http: HttpClient
    ) {}

    public getSetList(): Observable<Set[]> {
        return this.http.get<Set[]>(environment.baseUrl +'set/');
    }

    public getSet(number_: string): Observable<Set> {
        return this.http.get<Set>(environment.baseUrl +'set/'+ number_ +'/');
    }

    public getColourList(): Observable<Colour[]> {
        return this.http.get<Colour[]>(environment.baseUrl +'colour/');
    }

    public getColour(slug: string): Observable<Colour> {
        return this.http.get<Colour>(environment.baseUrl +'colour/' + slug +'/');
    }

    public getPart(number_: string): Observable<PartDetailData> {
        return this.http.get<PartDetailData>(environment.baseUrl +'part/' + number_ +'/');
    }

    public getBricklinkPrice(elementId: string): Observable<BricklinkPrice> {
        return this.http.get<BricklinkPrice>(
            environment.baseUrl +'element/bricklink_prices/?element=' + elementId);
    }

    public getBricksnPiecesPrice(elementId: string): Observable<BricksnPiecesPrice> {
        return this.http.get<BricksnPiecesPrice>(
            environment.baseUrl +'element/bricksnpieces_prices/?element=' + elementId);
    }

    public extractData() {
		// left in case we need it
    }

    public getHeaders() {
		// left in case we need it
        const headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");
        return headers;
    }
}
