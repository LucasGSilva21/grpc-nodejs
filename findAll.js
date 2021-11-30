const clientgRPC = require('./client');

clientgRPC.find({ request: { id: 1 } }, (err, tasks) => {
    if (err) {
        console.log('ERROR', err);
    } else {
      console.log('SUCCESS -> ', tasks);
    }
});
