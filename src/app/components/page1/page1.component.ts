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
	public countryCount: number = 0;
	public dataLoaded: boolean = false;
	constructor(private fromFirstService: firstService){}

	public pullFromService(){
		this.isPull = true;
		this.dataLoaded = true
		this.fromFirstService.pullFromServer().subscribe(res => {
			this.dataLoaded = false;
			this.responseStore = res.json().country
			this.countCountries(this.responseStore)
		})
	}

	public countCountries(resp){
		resp.forEach(obj => {
	          this.countryCount+=1;
      	});
	}
}
