import request from "supertest";
import app from "./app.js";

describe('GET request', () => {

    test('should return "status 200"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toEqual(200);
    });

});
