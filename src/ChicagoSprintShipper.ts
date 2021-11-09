import Letter from "./Letter";
import ShipmentType from "./ShipmentType";
import Shipper from "./Shipper";

export default class ChicagoSprintShipper extends Shipper  {
    private readonly LETTER_OUNCE_RATE = 0.42;
    private readonly PACKAGE_OUNCE_RATE = 0.20;

    constructor(shipmentType: ShipmentType) {
        super(shipmentType);
    }

    private getOunce(): number {
        return !(this.shipmentType instanceof Letter)
            ? this.PACKAGE_OUNCE_RATE
            : this.LETTER_OUNCE_RATE;
    }

    getCost(weight: number): number {
        return weight * this.getOunce();
    }
}