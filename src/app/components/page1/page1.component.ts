import { Component } from '@angular/core';	
import { firstService } from '../../../services/first.service'

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  providers: [firstService]
})
export class Page1Component {
	public responseStore: any;
	public isPull: boolean = false;
	public dataLoaded: boolean = false;
	constructor(private fromFirstService: firstService){}

	public pullFromService(){
		this.isPull = true;
		this.dataLoaded = true
		this.fromFirstService.pullFromServer().subscribe(res => {
			this.dataLoaded = false;
			this.responseStore = res.json().country
		})
	}_

}
