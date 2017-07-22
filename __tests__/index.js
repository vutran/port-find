const portFind = require('../');

jest.mock('node-netstat');

describe('port-find', () => {
    it('should find connections to port 5000', async () => {
        const conn = await portFind(5000);
        expect(conn).toContain('__MOCK_DATA__');
    });
});
