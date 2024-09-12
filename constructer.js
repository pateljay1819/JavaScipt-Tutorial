class Vehicle {
    constructor(type) {
      this.type = type;
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, model, year) {
      super('Car'); // Calls the parent (Vehicle) constructor
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  }

  let car1 = new Car("Toyota", "Corolla", 2022);
  let car2 = new Car("Toyota", "Fortuner", 2023);
  
  // Function to format the car object as a string
  function formatCar(car) {
    return Object.keys(car)
      .map(key => `${key}: ${car[key]}`)
      .join('\n');
  }

  const output = `${formatCar(car1)}\n\n${formatCar(car2)}`;
  
  console.log(output);
  
  