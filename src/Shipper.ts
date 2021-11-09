import AirEastShipper from './AirEastShipper';
import ChicagoSprintShipper from './ChicagoSprintShipper';
import PacificParcelShipper from './PacificParcelShipper';
import ShipmentType from './ShipmentType';

export default abstract class Shipper {
    shipmentType: ShipmentType;

    protected constructor (shipmentType: ShipmentType) {
        this.shipmentType = shipmentType;
    }

    static getShipper(zipCode: string, shipmentType: ShipmentType): Shipper {
        const firstDigit = +(zipCode[0]);

        if (firstDigit < 4) {
            return new AirEastShipper(shipmentType);
        } else if (firstDigit < 7) {
            return new ChicagoSprintShipper(shipmentType);
        } else {
            return new PacificParcelShipper(shipmentType);
        }
    }

    abstract getCost(weight: number): number;
}