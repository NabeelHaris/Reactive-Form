import { Injectable } from '@angular/core';
import { ViewDataModule } from '../models/view-data-models';


@Injectable({
  providedIn: 'root'
})
export class ViewDataServicesService {

  private data: ViewDataModule[] = [];

  constructor() { }

  getData(): ViewDataModule[]{
    return this.data;
  }

  addData(name: string, email: string, username: string){
    let newData = new ViewDataModule(name, email, username);
    this.data.push(newData);
  }

  checkIndexAndRemove(taskOnUi){
    let index = this.data.indexOf(taskOnUi);
    this.data.splice(index,1);
  }
}
