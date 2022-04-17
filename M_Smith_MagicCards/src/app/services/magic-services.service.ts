import { Injectable } from '@angular/core';

import {of, Observable} from 'rxjs';
import{Content} from '../helper-files/content-interface';
import {CONTENTLIST} from '../helper-files/contentDB';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MagicServicesService {

  constructor(private messageService: MessageService) { }
}

getContentList(): Observable<Content[]> {
  this.messageService.add("Content array loaded");
  return of(CONTENTLIST);
}

getSingleItem(id: number): Observable<Content> {
  let filteredContentList: Content[] = CONTENTLIST.filter(contentItem => contentItem.id=== id);

  if(filteredContentList.length) {
    this.messageService.add(`Content Item id: ${id}`);
    return of(filteredContentList[0]);
  } else {
    this.messageService.add("Invalid id number entered");
    return of({
      id:-1,
      title:"Invalid id entered",
      description: "n/a",
      creator"nobody"
    });
  }
}

