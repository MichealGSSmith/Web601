import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {MagicServicesService} from './services/magic-services.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  message: string = "";
  flag: boolean = false;
  content: Content[];

  constructor(private ) {
    this.content = [];
      
  }
   

  ngOnInit(): void {
    
  }
  checkTitle(search: string): void{
    let searchList = this.content.filter(content => content.title == search);
    if (searchList.length > 0) {
      this.message = "Found Your Card!!";
      this.flag = true;
    } else {
      this.message = "Dude thats not even on the list!";
      this.flag = false;
    }
  }
  donothing(){

  }
}
