import Mallard from "./Mallard";
import FlyRocketPowered from "./classes//FlyRocketPowered";

const mallard = new Mallard();
mallard.perfomFly();
mallard.setFlyBehavior(new FlyRocketPowered());
mallard.perfomFly();