import deserializePaintOrder from './deserializers/paint-order/file';
import serializePaintSet from './serializers/paint-set/string';
import findCheapestPaintSet from './operations/find-cheapest-paint-set';
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';

const optionDefinitions = [
    {
        name: 'file',
        alias: 'f',
        type: String,
        defaultOption: true,
        typeLabel: '{underline file}',
        description: 'Path to paint order file.'
    },
    {
        name: 'help',
        alias: 'h',
        type: Boolean,
        description: 'Print this usage guide.'
    }
];

const usage = commandLineUsage([
    {
        header: 'Paint shop money saver',
        content: 'Processes paint order and generates cheapest set of paint to satisfy all customers.',
    },
    {
        header: 'Options',
        optionList: optionDefinitions
    }
]);

async function main() {
    try {
        const options = commandLineArgs(optionDefinitions);

        if (options.help || !options.file) return console.log(usage);

        const paintOrder = await deserializePaintOrder(options.file);
        const cheapestPaintSet = findCheapestPaintSet(paintOrder);

        if (cheapestPaintSet) {
            console.log(serializePaintSet(cheapestPaintSet));
        } else {
            console.log('No solution exists');
        }
    } catch(err) {
        console.error(err);
    }
}

main();
