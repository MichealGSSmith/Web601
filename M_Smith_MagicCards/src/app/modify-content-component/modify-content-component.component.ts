import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import { MagicServicesService } from '../services/magic-services.service';
import { MessageService } from '../services/message.service';




@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();

  ContentForCheckingValidId: Content[]= [];
  newContent: Content = {
    title: "", description: "", creator: "", type: undefined
  };
  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor(private magicService: MagicServicesService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.magicService.getMagicList().subscribe(list => {
      this.ContentForCheckingValidId = list;
    });
  }

  addContentFromChild(): void {
    if(this.tempId=== ""){
      this.newContent.tags = this.tempTags.split(';');
      this.magicService.addContent(this.newContent).subscribe((newContentFromServer) =>{
        this.messageService.add("Movie added to the server");
        this.newContentEvent.emit(newContentFromServer);
      });

      this.newContent ={
        title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""

      
    } else {
      this.newContent.id =parseInt(this.tempId);
      if(this.newContent.id !== undefined && this.ContentForCheckingValidId.some(magic => magic.id === this.newContent.id)) {
        this.newContent.tags = this.tempTags.split(';');
        this.magicService.updateContent(this.newContent).subscribe(() => {
          this.messageService.add("MagicCard successfully added");
          this.newContentEvent.emit(this.newContent);
        });

        this.newContent = {
          title: "", description: '', creator: '', type: undefined
        };
        this.tempId = "";
        this.tempTags = ""
      }
    }
  }

}
