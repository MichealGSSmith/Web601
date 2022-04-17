import { Injectable } from '@angular/core';
import{of, Observable} from 'rxjs';
import {Content} from '../helper-files/content-interface';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class MagicServicesService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  constructor(private messageService: MessageService, private http: HttpClient) { 

  }

  addContent(newContent:Content) : Observable<Content>{
    this.messageService.add("Going to add magic card to server");
    return this.http.post<Content>("api/magic", newContent, this.httpOptions);
  }

  updateContent(oldContent:Content): Observable<any> {
    return this.http.put("api/magic", oldContent, this.httpOptions);
  }
  getMagicList(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return this.http.get<Content[]>("api/magic");
  }

  getSingleMagic(id: number): Observable<Content> {
    return this.http.get<Content>("api/magic/" + id);
  
    //let filteredMagicList: Content[] = CARDLIST.filter(magicItem => magicItem.id === id);

    //if(filteredMagicList.length) {
      //this.messageService.add(`Content item is: ${id}`);
      //return of(filteredMagicList[0]);
    //} else{
      //this.messageService.add("invalid id");
      //return of({
        //id:-1,
        //title:"invalid id",
        //description: 'n/a',
       // creator: "noone"
      //});
    //}
  }
}
