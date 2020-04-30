import { PaintType } from '../../models/paint';

export default function serialize(paintType: PaintType): string {
    switch (paintType) {
        case PaintType.Glossy: return 'G';
        case PaintType.Matte: return 'M';
    };
}
