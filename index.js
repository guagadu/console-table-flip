class Table {
    flip(){
        console.log('(╯°□°）╯︵ ┻━┻');
    }
}

const {table} = console;

console = {
    ...console,
    table: (tabularData, properties) => {
        table(tabularData, properties);
        return new Table;
    }
}

module.exports = console;