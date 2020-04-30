import { PaintSet } from '../../models/paint';
import serializePaintType from '../paint-type/string';

export default function serialize(paintSet: PaintSet): string {
    return paintSet.map((paintType) => serializePaintType(paintType)).join(' ');
}
