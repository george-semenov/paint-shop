import { Paint } from '../../models/paint';
import deserializePaintType from '../paint-type/string';

export default function deserialize(str: string): Paint {
    const matches = str.match(/^(?<color>\d)+\s(?<paintType>[GM])$/);

    if (!matches || !matches.groups) throw 'Malformed Paint';

    return new Paint(parseInt(matches.groups.color), deserializePaintType(matches.groups.paintType));
}
