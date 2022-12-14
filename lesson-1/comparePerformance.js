let myArray = [];
const mySet = new Set();
let duration;

calcArrayAdd();
calcSetAdd();
calcArrayDelete();
calcSetDelete();
calcArrayIndexOf();
calcSetHas();

function calcArrayAdd() {
    performance.mark('start');
    for (i = 0; i < 100000; i++) {
        myArray.push(i);
    }
    performance.mark('end');
    duration = performance.measure('time', 'start', 'end').duration;
    console.log(`Array add: ${duration} s`);
}

function calcArrayDelete() {
    performance.mark('start');
    myArray = myArray.filter(item => item !== 50000);
    performance.mark('end');
    duration = performance.measure('time', 'start', 'end').duration;
    console.log(`Array delete: ${duration} s`);
}

function calcArrayIndexOf() {
    performance.mark('start');
    const item = myArray.indexOf(75000);
    performance.mark('end');
    duration = performance.measure('time', 'start', 'end').duration;
    console.log(`Array indexOf: ${duration} s`);
}

function calcSetAdd() {
    performance.mark('start');
    for (i = 0; i < 100000; i++) {
        mySet.add(i);
    }
    performance.mark('end');
    duration = performance.measure('time', 'start', 'end').duration;
    console.log(`Set add: ${duration} s`);
}

function calcSetDelete() {
    performance.mark('start');
    mySet.delete(50000);
    performance.mark('end');
    duration = performance.measure('time', 'start', 'end').duration;
    console.log(`Set delete: ${duration} s`);
}

function calcSetHas() {
    performance.mark('start');
    const isExist = mySet.has(75000);
    performance.mark('end');
    duration = performance.measure('time', 'start', 'end').duration;
    console.log(`Set has: ${duration} s`);
}