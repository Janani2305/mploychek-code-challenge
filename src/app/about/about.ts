import { Component,inject} from '@angular/core';
import {Data} from '../data';
@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {

  private data=inject(Data);
  names: string[] = this.data.getNames();
}
