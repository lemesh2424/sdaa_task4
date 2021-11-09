import Letter from "./Letter";
import Oversized from "./Oversized";
import Package from "./Package";

export default abstract class ShipmentType {
    static getShipmentType(weight: number): ShipmentType {
        if (weight < 16) {
            return new Letter();
        } else if (weight < 161) {
            return new Package();
        } else {
            return new Oversized();
        }
    }
}