import lineReader from 'line-reader';
import { promisify } from 'util';

const eachLine: (path: string, cb: (line: string) => void) => Promise<void> =
    promisify(lineReader.eachLine);

export default eachLine;
