const yargs = require("yargs");
const yargfunct = require("./functions/yargfunct")

yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder:{
        name: {
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'contact email',
            demandOption: false,
            type: 'string',
        },
        mobile: {
            describe: 'contact mobile phone number',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        const contact = {
            name:argv.name,
            email:argv.email,
            mobile:argv.mobile,
        };
        yargfunct.save(argv.name, argv.email, argv.mobile);
    },
});

yargs.parse();