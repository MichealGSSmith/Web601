import { Pipe, PipeTransform } from "@angular/core";
import { ContentListComponent } from "./content-list/content-list.component";
import { Content } from "./helper-files/content-interface";

@Pipe ({
    name: 'typeFilter'
})

export class TypeFilterPipe implements PipeTransform {
    transform(content: Content[], filterByThisType?: string): Content[] {
        
    
        console.log("Value: ", filterByThisType);

        return content.filter(c=> {
            if (filterByThisType) {
                return c.type == filterByThisType;
            } else {
                return !c.type;
            }
        });
    }
}