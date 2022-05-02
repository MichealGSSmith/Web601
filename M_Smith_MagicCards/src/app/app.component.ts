import { Component } from '@angular/core';
import {Content} from './helper-files/content-interface';
import { MagicServicesService } from './services/magic-services.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'M_Smith_MagicCards';
  
  someMagic?: Content;
  constructor(private messageService: MessageService, private mService: MagicServicesService) { }

  ngOnInit(): void{
    this.mService.getSingleMagic(1).subscribe(magic => this.someMagic = magic);
  }
  displayMagicItem(id: string): void{
      this.mService.getSingleMagic(parseInt(id)).subscribe(magic => {
        this.messageService.add("Sweet deal dude");
        this.someMagic = magic;
    });
  }
}
