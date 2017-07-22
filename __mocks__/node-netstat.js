const __mockData = '__MOCK_DATA__';

const netstat = jest.fn((options, cb) => {
    cb.call(null, __mockData);

    if (options.done) {
        options.done();
    }
});

module.exports = netstat;
