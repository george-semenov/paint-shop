import path from 'path';
import deserializePaintOrder from '../../src/deserializers/paint-order/file';
import _findCheapestPaintSet from '../../src/operations/find-cheapest-paint-set';
import { PaintSet, PaintType } from '../../src/models/paint';

async function findCheapestPaintSet(file: string): Promise<PaintSet | null> {
    const paintOrder = await deserializePaintOrder(path.resolve('test', 'fixtures', file));
    return _findCheapestPaintSet(paintOrder);
}

test('order 1', async () => {
    expect(await findCheapestPaintSet('order1.txt')).toEqual([
        PaintType.Glossy,
        PaintType.Glossy,
        PaintType.Glossy,
        PaintType.Glossy,
        PaintType.Matte,
    ]);
});

test('order 2', async () => {
    expect(await findCheapestPaintSet('order2.txt')).toEqual(null);
});

test('order 3', async () => {
    expect(await findCheapestPaintSet('order3.txt')).toEqual([
        PaintType.Glossy,
        PaintType.Matte,
        PaintType.Glossy,
        PaintType.Matte,
        PaintType.Glossy,
    ]);
});
test('order 4', async () => {
    expect(await findCheapestPaintSet('order4.txt')).toEqual([
        PaintType.Matte,
        PaintType.Matte
    ]);
});
