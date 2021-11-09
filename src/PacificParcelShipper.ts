import Letter from "./Letter";
import Oversized from "./Oversized";
import ShipmentType from "./ShipmentType";
import Shipper from "./Shipper";

export default class PacificParcelShipper extends Shipper  {
    private readonly LETTER_OUNCE_RATE = 0.51;
    private readonly PACKAGE_OUNCE_RATE = 0.19;

    constructor(shipmentType: ShipmentType) {
        super(shipmentType);
    }

    private getOunce(): number {
        return !(this.shipmentType instanceof Letter)
            ? this.PACKAGE_OUNCE_RATE + this.getAdditionalCharge()
            : this.LETTER_OUNCE_RATE;
    }

    private getAdditionalCharge(): number {
        return this.shipmentType instanceof Oversized
            ? 0.02
            : 0;
    }

    getCost(weight: number): number {
        return weight * this.getOunce();
    }
}