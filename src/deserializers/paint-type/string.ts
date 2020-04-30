import { PaintType } from '../../models/paint';

export default function deserialize(str: string): PaintType {
    switch(str) {
        case 'M': return PaintType.Matte;
        case 'G': return PaintType.Glossy;
    }

    throw 'Malformed PaintType';
}
