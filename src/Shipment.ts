import ShipmentState from './ShipmentState';
import ShipmentType from './ShipmentType';
import Shipper from './Shipper';

export default class Shipment {
    private idCounter: number;
    private state: ShipmentState;

    constructor(state: ShipmentState) {
        this.state = Object.assign({}, state);

        if (!this.state.shipmentId) {
            this.state.shipmentId = 0;
        }

        this.idCounter = this.state.shipmentId;
    }

    getShipmentId(): string {
        return (++this.idCounter).toString();
    }

    ship(): string {
        const {
            shipmentId,
            fromAddress,
            toAddress,
            weight,
            fromZipCode
        } = this.state;

        return `${shipmentId}${fromAddress}${toAddress}${this.getCost(fromZipCode, weight)}`
    }

    private getCost(zipCode: string, weight: number): number {
        return this.getShipper(zipCode, weight).getCost(weight);
    }

    private getShipper(zipCode: string, weight: number): Shipper {
        return Shipper.getShipper(zipCode, this.getShipmentType(weight));
    }

    private getShipmentType(weight: number): ShipmentType {
        return ShipmentType.getShipmentType(weight);
    }
}