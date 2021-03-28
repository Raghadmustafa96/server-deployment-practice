'use strict';

const superTest = require('supertest');
const server = require('../server.js');
const req = superTest(server.app);

describe('Server Side', () => {
  it('should the status be 404 if handle invalid routes', async () => {
    const res = await req.get('/search');
    expect(res.body.message).toEqual('Request Not Found');
    expect(res.status).toEqual(404);
  });

  it('should the status be 500 if handle server error', async () => {
    const res = await req.get('/error');
    expect(res.body.error).toEqual('ERROR FROM server side :) ...');
    expect(res.status).toEqual(500);
  });

  it('should the status be 200 if handle server valid routes', async () => {
    const res = await req.get('/');
    expect(res.text).toEqual('Hello From the Other side');
    expect(res.status).toEqual(200);
  });
});
  