const netstat = require('node-netstat');

module.exports = port =>
    new Promise((resolve, reject) => {
        const addresses = [];
        netstat(
            {
                done: err => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(addresses);
                },
                filter: {
                    remote: {
                        port,
                    },
                },
            },
            n => {
                addresses.push(n);
            }
        );
    });
