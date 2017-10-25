import { Component } from '@angular/core';
import { Page1Component } from '../page1/page1.component'; 
@Component({
  selector: 'default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css', '../page1/page1.component.css']
})
export class DefaultComponent {
	public notify(){
		alert('Good Job!')
	}
}
