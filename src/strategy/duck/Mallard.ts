import FlyWithWings from './classes/FlyWithWings';
import Duck from './Duck';

export default class Mallard extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
  }

  perfomFly() {
    this.flyBehavior.fly();
  }
}