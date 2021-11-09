import Letter from "./Letter";
import Oversized from "./Oversized";
import ShipmentType from "./ShipmentType";
import Shipper from "./Shipper";

export default class AirEastShipper extends Shipper  {
    private readonly LETTER_OUNCE_RATE = 0.39;
    private readonly PACKAGE_OUNCE_RATE = 0.25;

    constructor(shipmentType: ShipmentType) {
        super(shipmentType);
    }

    private getOunce(): number {
        return !(this.shipmentType instanceof Letter)
            ? this.PACKAGE_OUNCE_RATE
            : this.LETTER_OUNCE_RATE;
    }

    private getAdditionalCharge(): number {
        return this.shipmentType instanceof Oversized
            ? 10
            : 0;
    }

    getCost(weight: number): number {
        return weight * this.getOunce() + this.getAdditionalCharge();
    }
}