import { Paint, PaintType } from '../../../src/models/paint';
import CustomerPreference from '../../../src/models/customer-preference';
import deserializeCustomerPreference from '../../../src/deserializers/customer-preference/string';

it('deserializes "3 M 1 G" to correct Customer Preference', () => {
    expect(deserializeCustomerPreference('3 M 1 G')).toEqual(
        new CustomerPreference([
            new Paint(3, PaintType.Matte),
            new Paint(1, PaintType.Glossy)
        ])
    );
});

it('deserializes "1 G 1 M" to correct Customer Preference', () => {
    expect(deserializeCustomerPreference('1 G 1 M')).toEqual(
        new CustomerPreference([
            new Paint(1, PaintType.Glossy),
            new Paint(1, PaintType.Matte)
        ])
    );
});

it('throws error if string is malformed', () => {
    expect(() => deserializeCustomerPreference('Wrong')).toThrow('Malformed CustomerPreference');
});
