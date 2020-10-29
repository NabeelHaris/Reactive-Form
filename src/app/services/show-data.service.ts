import { Injectable } from '@angular/core';
import { ViewDataServicesService } from './view-data-services.service';

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {

  constructor(private viewDataServices: ViewDataServicesService ) { }

  showResult(): void{
    this.viewDataServices.getData();
}
}
