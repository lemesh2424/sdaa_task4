import MockGui from "./MockGui";
import Shipment from "./Shipment";

export default class Client {
    constructor(private gui: MockGui) {
    }

    onShip(shipment: Shipment) {
        const result = shipment.ship();

        this.gui.print(result);
    }
}