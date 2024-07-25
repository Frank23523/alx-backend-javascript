import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const ClonedCar = new Car();
    /* Copy properties from this car to the cloned car */
    Object.assign(ClonedCar, JSON.parse(JSON.stringify(this)));
    return ClonedCar;
  }
}
