import { PaintType } from '../../../src/models/paint';
import serializePaintType from '../../../src/serializers/paint-type/string';

it('serializes Glossy to G', () => {
    expect(serializePaintType(PaintType.Glossy)).toEqual('G');
});

it('serializes Matte to M', () => {
    expect(serializePaintType(PaintType.Matte)).toEqual('M');
});
