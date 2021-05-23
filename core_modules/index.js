const path = require('path');
//console.log(path);


const myPath = 'D:/SumitNodeJS/lesson-6/index.js';
//console.log(path.basename(myPath));
//console.log(path.dirname(myPath));
//console.log(path.extname(myPath));
//console.log(path.delimiter);
//console.log(path.parse(myPath));

const os = require('os');
//console.log(os);

//console.log(os.platform());
//console.log(os.arch());
//console.log(os.homedir());
//console.log(os.freemem());
//console.log(os.cpus());
//console.log(os.userInfo());

const EventsEmitter = require('events');
const { exit } = require('process');
//console.log(EventsEmitter);

const emitter = new EventsEmitter();
//register a listener for bellRing event

// First listener
// emitter.on('bellRing', function firstListener() {
//     console.log('We need to run!');
// });

// Second listener
// emitter.on('bellRing', function secondListener(arg1, arg2) {
//     console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
// });
// Third listener
// emitter.on('bellRing', function thirdListener(...args) {
//     const parameters = args.join(', ');
//     console.log(`event with parameters ${parameters} in third listener`);
// });

//raise an event
//emitter.emit('bellRing');

//console.log(emitter.listeners('bellRing'));

//emitter.emit('bellRing', 1, 2, 3, 4, 5);

// emitter.on('bellRing', (period) => {
//     console.log(`We need to run because ${period}`);
// });

// setTimeout(() => {
//     //emitter.emit('bellRing');
//     emitter.emit('bellRing', 'second period ended');
// }, 2000);

//multiple parameter
emitter.on('bellRing', ({ period, texxt }) => {
    console.log(`We need to run because ${period} ${texxt}`);
});

setTimeout(() => {
    emitter.emit('bellRing', {
        period: 'first',
        texxt: 'period ended'
    });
}, 2000);