import { app } from "./app";
import request from "supertest";

describe("Products", () => {
  it("Should list products", async () => {
    const response = await request(app).get("/products");
    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
