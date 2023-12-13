interface Person {
  name: string;
  address: string;
  age: number;
  salary(jobType: number): number;
}

class Developer implements Person {
  name: string;
  address: string;
  age: number;
  salary(jobType: number): number {
    return jobType * 4000;
  }
}

const dev = new Developer();
console.log(dev.salary(2));
