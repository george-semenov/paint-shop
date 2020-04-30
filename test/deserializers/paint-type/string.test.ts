import { PaintType } from '../../../src/models/paint';
import deserializePaintType from '../../../src/deserializers/paint-type/string';

it('deserializes G to Glossy', () => {
    expect(deserializePaintType('G')).toEqual(PaintType.Glossy);
});

it('deserializes M to Matte', () => {
    expect(deserializePaintType('M')).toEqual(PaintType.Matte);
});

it('throws error if string is malformed', () => {
    expect(() => deserializePaintType('Wrong')).toThrow('Malformed PaintType');
});
