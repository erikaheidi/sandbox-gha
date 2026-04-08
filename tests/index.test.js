const request = require('supertest');
const { createServer } = require('../server');

let server;

beforeAll((done) => {
  server = createServer().listen(0, done);
});

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  test('returns HTTP 200', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });

  test('responds with HTML content-type', async () => {
    const res = await request(server).get('/');
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });

  test('contains the page title', async () => {
    const res = await request(server).get('/');
    expect(res.text).toContain('Dummy Scanner — AI-Powered Security Scanning');
  });

  test('contains the hero headline', async () => {
    const res = await request(server).get('/');
    expect(res.text).toContain('Find every');
    expect(res.text).toContain('security flaw');
  });

  test('contains the features section', async () => {
    const res = await request(server).get('/');
    expect(res.text).toContain('id="features"');
    expect(res.text).toContain('Automated Vulnerability Scanning');
  });

  test('contains the pricing section', async () => {
    const res = await request(server).get('/');
    expect(res.text).toContain('id="pricing"');
    expect(res.text).toContain('Simple, transparent pricing');
  });

  test('contains the FAQ section', async () => {
    const res = await request(server).get('/');
    expect(res.text).toContain('id="faq"');
    expect(res.text).toContain('Frequently asked questions');
  });

  test('links the main.js script', async () => {
    const res = await request(server).get('/');
    expect(res.text).toContain('src="main.js"');
  });

  test('links the stylesheet', async () => {
    const res = await request(server).get('/');
    expect(res.text).toContain('href="style.css"');
  });
});

describe('GET unknown route', () => {
  test('returns HTTP 404 for unknown paths', async () => {
    const res = await request(server).get('/unknown');
    expect(res.status).toBe(404);
  });
});
