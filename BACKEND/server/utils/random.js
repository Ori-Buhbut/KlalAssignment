const START = new Date(2022, 1, 1);
const END = new Date(2022, 10, 10);

function randomDate() {
    return new Date(START.getTime() + Math.random() * (END.getTime() - START.getTime()));
}


module.exports= {
    randomDate
}