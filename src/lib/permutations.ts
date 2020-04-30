export default function* permutations<T>(values: Array<T>, length: number) {
    const totalPermutations = Math.pow(values.length, length);

    for (let i = 0; i < totalPermutations; i++) {
        yield permutate(values, length, i);
    }
}

function permutate<T>(values: Array<T>, length: number, offset: number): Array<T> {
    const array = [];
    const valuesCount = values.length;

    for (let i = 0; i < length; i++) {
        array[i] = values[Math.round(offset / Math.pow(valuesCount, i)) % valuesCount];
    }

    return array;
}
