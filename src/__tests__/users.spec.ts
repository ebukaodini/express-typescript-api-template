import supertest from "supertest";
import app from "../app";
import { describe, it, expect } from "@jest/globals";

const request = supertest(app);

describe("POST /api/v1/users", () => {
  it("should return status 200", (done) => {
    request
      .post(`/api/v1/users`)
      .send({ name: "John Doe" })
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
});

describe("GET /api/v1/users", () => {
  it("should return status 200", (done) => {
    request.get(`/api/v1/users`).then((response) => {
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body.data)).toBe(true);
      done();
    });
  });
});

describe("GET /api/v1/users/1", () => {
  it("should return status 200", (done) => {
    request.get(`/api/v1/users/1`).then((response) => {
      expect(response.status).toBe(200);
      done();
    });
  });
});

describe("PATCH /api/v1/users/1", () => {
  it("should return status 200", (done) => {
    request
      .patch(`/api/v1/users/1`)
      .send({ name: "John Doe" })
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
});

describe("DELETE /api/v1/users/1", () => {
  it("should return status 200", (done) => {
    request.delete(`/api/v1/users/1`).then((response) => {
      expect(response.status).toBe(200);
      done();
    });
  });
});
