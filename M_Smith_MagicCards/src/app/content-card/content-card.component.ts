import { Component, Input, OnInit } from '@angular/core';
import { Content} from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content?: Content;
  constructor() { }

  ngOnInit(): void {

    
  }

  imageClicked(): void {
    console.log("ID: ", this.content?.id, ",Title:", this.content?.title);
  }

}
