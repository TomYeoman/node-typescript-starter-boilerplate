import request from "supertest";
import express from "express";
import { userRouter } from "./users_route";

const app = express();
app.use("/api/user/", userRouter);

describe("Routes", function () {
  test("Should return a 404 for non-matched route", async () => {
    const res = await request(app).get("/api");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.statusCode).toBe(404);
  });

  test("Should respond to /user", async () => {
    const res = await request(app).get("/api/user/route");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("John Doe");
  });
});
