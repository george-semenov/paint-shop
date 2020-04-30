import { PaintType } from '../../../src/models/paint';
import serializePaintSet from '../../../src/serializers/paint-set/string';

it('serializes PaintSet correctly', () => {
    const paintSet = [
        PaintType.Matte, PaintType.Glossy,
        PaintType.Matte, PaintType.Glossy
    ];

    expect(serializePaintSet(paintSet)).toEqual('M G M G');
});
