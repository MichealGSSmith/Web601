import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MagicServicesService } from '../services/magic-services.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  message: string = "";
  theflag?: boolean;
  Content: Content[] = [];

  constructor(private magicService: MagicServicesService) {
       this.Content = [];
  
  }
   

  ngOnInit(): void {
    this.magicService.getMagicList().subscribe(list => {
      this.Content = list;
    });
  }
  checkTitle(thingtofind: string): void{
    let searchList = this.Content.filter(content => content.title == thingtofind);
    if (searchList.length > 0) {
      this.message = "Found Your Card!!";
      this.theflag = true;
    } else {
      this.message = "Dude thats not even on the list!";
      this.theflag = false;
    }
  }
  addContentToList(newContentItem: Content): void{
    this.magicService.getMagicList().subscribe(list => {
      this.Content = list;
    });
  }
}
