import request from "supertest";
import app from "./app.js";

describe('GET request', () => {

    test('should return "Hello"', () => {
        const response = request(app).get('/');
        expect(response.statusCode).toBe(200);
        response.end();
    });

});