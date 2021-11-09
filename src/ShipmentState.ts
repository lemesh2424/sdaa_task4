export default interface ShipmentState {
    shipmentId: number;
    toAddress: string;
    fromAddress: string;
    toZipCode: string;
    fromZipCode: string;
    weight: number;
    marks?: Array<string>
}