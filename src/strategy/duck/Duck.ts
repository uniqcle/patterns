
export default abstract class Duck {
  flyBehavior: any;

  abstract perfomFly(): void;

  setFlyBehavior(cb: any) {
    this.flyBehavior = cb;
  }
}