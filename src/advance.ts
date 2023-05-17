//Properties
interface Model<TData, TMethods> {
    data: TData;
    methods: TMethods;
  }
  
  interface IUser20 {
    firstName: string;
    lastName: string;
  }
  //Methods
  interface IMethods {
    fullName(): string;
  }
  
  type model = Model<IUser20, IMethods>;
  
  class User implements model {
    data: IUser20;
    methods: IMethods;
  
    constructor(firstName: string, lastName: string) {
      this.data = { firstName, lastName };
      this.methods = {
        fullName: () => `${firstName} ${lastName}`,
      };
    }
  }
  
  const user1 = new User("Mezbaul", "Persian");
  console.log(user1.methods.fullName());