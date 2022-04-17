import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Content} from "../helper-files/content-interface";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  CARDLIST: Content[] = [{
    id: 0,
    title: "Black Lotus",
    description: "Power 9 Original Card",
    creator: "Christopher Rush",
    imgUrl:"https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/122584.jpg",
    type: "Black",
    tags: ["power nine", "power 9"]

  },
  {
    id: 1,
    title: "Mox Ruby",
    description: "Power 9 Original Card",
    creator: "Christopher Rush",
    imgUrl: "https://static.cardkingdom.com/images/magic-the-gathering/unlimited/mox-ruby-86403.jpg",
    type: "Red"

  },
  {
    id: 2,
    title: "Mox Jet",
    description: "Power 9 Original Card",
    creator: "Christopher Rush",
    imgUrl: "https://static.cardkingdom.com/images/magic-the-gathering/unlimited/mox-jet-61953.jpg"


  },
  {
    id: 3,
    title: "Time Walk",
    description: "Power 9 Original Card",
    creator: "Christopher Rush",
    imgUrl: "https://static.cardkingdom.com/images/magic-the-gathering/unlimited/time-walk-69028.jpg"


  },
  {
    id: 4,
    title: "Mox Pearl",
    description: "Power 9 Original Card",
    creator: "Christopher Rush",
    imgUrl: "https://static.cardkingdom.com/images/magic-the-gathering/unlimited/mox-pearl-87881.jpg",
    type: "White"

  },
  {
    id: 5,
    title: "Ancestral Recall",
    description: "Power 9 Original Card",
    creator: "Christopher Rush",
    imgUrl: "",
    type: "Green",


  },
  {
    id: 6,
    title: "Mox Emerald",
    description: "Power 9 Original Card",
    creator: "Christopher Rush",
    imgUrl: "https://static.cardkingdom.com/images/magic-the-gathering/unlimited/mox-emerald-57668.jpg",
    type: "Green",
    tags: ["power nine", "power 9", "Green"]

  },
  {
    id: 7,
    title: "Timetwister",
    description: "Power 9 Original Card",
    creator: "Christopher Rush",
    imgUrl: "",
    type: "Blue",
    tags: ["power nine", "power 9","Blue"]

  
}];
  constructor() { }

  createDb() {
    const magicCard = this.CARDLIST
    return {magicCard};
  }

  genId(Content: Content[]): number {
    return Content.length > 0 ? Math.max(...Content.map( c => c.id ?? 0)) + 1 :0;
  }
}
