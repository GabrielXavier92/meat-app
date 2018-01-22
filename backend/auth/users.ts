export class User{
   constructor(public email: string,
               public name: string,
               private password: string){}

   matches(another: User): boolean{
      return another !== undefined && 
      another.email === this.email && 
      another.password === this.password
   }
}

export const users: {[key:string]: User} = {
   "gabriel@gmail.com": new User('gabriel@gmail.com', 'Gabriel', '123456'),
   "luiz@gmail.com": new User('luiz@gmail.com', 'Luiz', '123456')
}