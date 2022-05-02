import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MessageService } from './message.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {
  

  constructor(private updates: SwUpdate, private messageService: MessageService, private snackbar: MatSnackBar) {}
    public init(){
      this.updates.versionUpdates.subscribe(event => {
        switch (event.type) {
          case 'VERSION_DETECTED':
            console.log(`Downloading new app version: ${event.version.hash}`);
            break;
          case 'VERSION_READY':
            console.log(`Current app version: ${event.currentVersion.hash}`);
            console.log(`New app version ready for use: ${event.latestVersion.hash}`);
            this.messageService.add(`The app is runningversion : ${event.currentVersion.hash} `);
            this.messageService.add(`Update the app dummy, to version : ${event.latestVersion.hash} `);
            let snackBarRef= this.snackbar.open("Update Your app stupid", "Update Here");
            snackBarRef.onAction().subscribe(() => {
              this.updates.activateUpdate().then((someBoolean) =>{
                console.log(`returned a bool of: ${someBoolean}`)
                document.location.reload();
              });
            });
          
            break;
        } });
      }
}
