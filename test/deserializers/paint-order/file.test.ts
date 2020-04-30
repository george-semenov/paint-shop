import { Paint, PaintType } from '../../../src/models/paint';
import path from 'path';
import CustomerPreference from '../../../src/models/customer-preference';
import PaintOrder from '../../../src/models/paint-order';
import _deserializePaintOrder from '../../../src/deserializers/paint-order/file';

function deserializePaintOrder(file: string): Promise<PaintOrder> {
    return _deserializePaintOrder(path.resolve('test', 'fixtures', file));
}

it('deserializes valid file to correct PaintOrder', async () => {
    const paintOrder = await deserializePaintOrder('order1.txt');

    expect(paintOrder).toEqual(
        new PaintOrder(
            5,
            [
                new CustomerPreference([
                    new Paint(1, PaintType.Matte),
                    new Paint(3, PaintType.Glossy),
                    new Paint(5, PaintType.Glossy)
                ]),
                new CustomerPreference([
                    new Paint(2, PaintType.Glossy),
                    new Paint(3, PaintType.Matte),
                    new Paint(4, PaintType.Glossy)
                ]),
                new CustomerPreference([
                    new Paint(5, PaintType.Matte)
                ])
            ]
        )
    );
});

it('throws error if file is malformed', () => {
    expect.assertions(1);
    return expect(deserializePaintOrder('invalid-order.txt'))
        .rejects.toEqual('Malformed CustomerPreference, at line: 2');
});

it('throws error if file is empty', () => {
    expect.assertions(1);
    return expect(deserializePaintOrder('empty-order.txt'))
        .rejects.toEqual('Malformed PaintOrder');
});
