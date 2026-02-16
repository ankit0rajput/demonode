const request = require('supertest');
const app = require('../app');

// 🔥 MOCK connectDB
jest.mock('../db', () => {
    return jest.fn().mockResolvedValue({
        collection: () => ({
            insertOne: jest.fn().mockResolvedValue({
                insertedId: "mocked_employee_id"
            })
        })
    });
});

describe('API Endpoints Testing', () => {

    test('GET / should return welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Helloo from Node.js app');
    });

    test('GET /health should return health status', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        // expect(res.body.status).toBe('OK');
    });

    test('POST /employee should create employee', async () => {
        const res = await request(app)
            .post('/employee')
            .send({
                name: "Ankit",
                email: "ankit@test.com",
                salary: 50000
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe("Employee created");
        expect(res.body.id).toBe("mocked_employee_id");
    });

});
