import CustomerPreference from '../../models/customer-preference';
import deserializePaint from '../paint/string';

export default function deserialize(str: string): CustomerPreference {
    const matches = str.match(/\d+\s[MG]/g);

    if (!matches) throw 'Malformed CustomerPreference';

    return new CustomerPreference(matches.map((paint: string) => {
        return deserializePaint(paint);
    }));
}
