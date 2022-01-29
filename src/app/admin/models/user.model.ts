import { Gender, UserType } from './enum.model';

export class User {
  userType: number;
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
  gender: number;
  avatarUrl: string;
  dateOfBirth: Date;

  User(args) {
    this.name = args.name;
    this.email = args.email;
    this.id = args.id;
    this.dateOfBirth = new Date(args.dateOfBirth);
    this.phoneNumber = args.phoneNumber;
    this.gender = args.gender || Gender.None;
    this.userType = args.userType || UserType.None;
    this.avatarUrl = args.avatarUrl;
  }
}
