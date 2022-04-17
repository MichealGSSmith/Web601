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
  flag: boolean = false;
  Content: Content[] = [];

  constructor(private movieService: MagicServicesService) {
       this.Content = [];
  
  }
   

  ngOnInit(): void {
    this.movieService.getMagicList().subscribe(list => {
      this.Content = list;
    });
  }
  checkTitle(search: string): void{
    let searchList = this.Content.filter(content => content.title == search);
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
