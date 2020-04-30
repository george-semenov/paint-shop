import { Paint } from '../models/paint';

export default class CustomerPreference {
    paints: Array<Paint>;

    constructor(paints: Array<Paint>) {
        this.paints = paints;
    }
}
