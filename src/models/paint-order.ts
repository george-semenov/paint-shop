import CustomerPreference from '../models/customer-preference';

export default class PaintOrder {
    colors: number;
    customerPreferences: Array<CustomerPreference>;

    constructor(colors: number, customerPreferences: Array<CustomerPreference>) {
        this.colors = colors;
        this.customerPreferences = customerPreferences;
    }
}
