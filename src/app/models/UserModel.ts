export class User {

  LastName: string;
  FirstName: string;
  Email: string;
  password: any;
  password2: any;
   profilePicture: string;
   contact:number;
    CIN: String;

  constructor(id: number, LastName: string, FirstName: string, description = '',
              Email: string, profilepicture: string ,LasttName: string, contact:number , CIN: String) {
   this.CIN=CIN,
    this.Email=Email,
    this.LastName=LastName,
    this.FirstName= FirstName,
    this.contact=contact,
    this.profilePicture=profilepicture
}
}
