export class ViewDataModule {
    name: string;
  email: string;
  username: string;

  constructor(name: string, email: string, username: string){

    this.name = name;
    this.email = email;
    this.username = username;
  }

}