import { Paint, PaintType } from '../../../src/models/paint';
import deserializePaint from '../../../src/deserializers/paint/string';

it('deserializes "3 M" to correct Paint', () => {
    expect(deserializePaint('3 M')).toEqual(
        new Paint(3, PaintType.Matte)
    );
});

it('deserializes "1 G" to correct Paint', () => {
    expect(deserializePaint('1 G')).toEqual(
        new Paint(1, PaintType.Glossy)
    );
});

it('throws error if string is malformed', () => {
    expect(() => deserializePaint('A G')).toThrow('Malformed Paint');
});
