import PaintOrder from '../models/paint-order';
import CustomerPreference from '../models/customer-preference';
import permutations from '../lib/permutations';
import { PaintSet, PaintType } from '../models/paint';

export default function findCheapestPaintSet(paintOrder: PaintOrder): PaintSet | null {
    let cheapestPaintSet = null;
    let cheapestPrice = Infinity;

    for (const paintSet of permutations([PaintType.Glossy, PaintType.Matte], paintOrder.colors)) {
        if (!isValidPaintSet(paintOrder, paintSet)) continue;

        let newPrice = paintSetPrice(paintSet);

        if (!cheapestPaintSet || newPrice < cheapestPrice) {
            cheapestPaintSet = paintSet;
            cheapestPrice = newPrice;
        }
    }

    return cheapestPaintSet;
}

function isValidPaintSet(paintOrder: PaintOrder, paintSet: PaintSet): boolean {
    return paintOrder.customerPreferences.every((customerPreference) => {
        return isCustomerSatisfied(customerPreference, paintSet);
    });
}

function isCustomerSatisfied(customerPreference: CustomerPreference, paintSet: PaintSet): boolean {
    return customerPreference.paints.some((paint) => paintSet[paint.color - 1] == paint.paintType);
}

function paintSetPrice(paintSet: PaintSet): number {
    return paintSet.reduce((total, paintType) => {
        return paintType == PaintType.Matte ? total + 1 : total;
    }, 0);
}
