import eachLine from '../../lib/file-each-line';
import deserializeCustomerPerference from '../customer-preference/string';
import PaintOrder from '../../models/paint-order';
import CustomerPreference from '../../models/customer-preference';

export default async function deserialize(path: string): Promise<PaintOrder> {
    const customerPreferences: Array<CustomerPreference> = [];
    let lineNumber = 1;
    let error;
    let colors: number | null = null;

    await eachLine(path, (line: string) => {
        try {
            if (!colors) {
                colors = parseInt(line);
            } else {
                customerPreferences.push(deserializeCustomerPerference(line));
            }
        } catch(err) {
            // Get error out of async callback, it's not possible to catch such error normally.
            error = err + `, at line: ${lineNumber}`;
            return false;
        }

        lineNumber++;

        return true;
    });

    if (error) throw error;
    if (!colors) throw 'Malformed PaintOrder';

    return new PaintOrder(colors, customerPreferences);
}
