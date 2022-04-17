import { Injectable } from '@angular/core';
import{of, Observable} from 'rxjs';
import {Content} from '../helper-files/content-interface';
import {CARDLIST} from '../helper-files/contentDb';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class MagicServicesService {

  constructor(private messageService: MessageService) { 

  }

  getMagicList(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return of(CARDLIST);
  }

  getSingleMagic(id: number): Observable<Content> {
    let filteredMagicList: Content[] = CARDLIST.filter(magicItem => magicItem.id === id);

    if(filteredMagicList.length) {
      this.messageService.add(`Content item is: ${id}`);
      return of(filteredMagicList[0]);
    } else{
      this.messageService.add("invalid id");
      return of({
        id:-1,
        title:"invalid id",
        description: 'n/a',
        creator: "noone"
      });
    }
  }
}
