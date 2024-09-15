// uppercase decorator
function uppercase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('--------descriptor----', descriptor);
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]){
        const result = originalMethod.apply(this, args);

        if (typeof result === "string") {
            return result.toUpperCase();
        }

        return result;
    };

    return descriptor;
}

class User {
    private name: string;
  
    constructor(name:string) {
      this.name = name;
    }
    
    // In this code, the uppercase decorator is applied to the getName method 
    // of the User class using the @uppercase syntax. 
    // This means that whenever the getName method is called, 
    // the uppercase decorator function will be invoked.
  
    // 👇 use like below
    @uppercase
    getName() {
      return this.name
    }
  }
  
  const user = new User("Arul Valan Anto");
  console.log('--------------', user.getName());