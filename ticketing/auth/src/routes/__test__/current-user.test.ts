import request from "supertest";
import { app } from "../../app";

it("responds with details about the current user", async () => {
  const authResponse = await request(app).post("/api/users/signup").send({
    email: "test@test.com",
    password: "passw0rd",
  });
  const cookie = authResponse.get("Set-Cookie");

  const response = await request(app)
    .get("/api/users/currentUser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual("test@test.com");
});

it("responds with null if not authenticated", async () => {
  const response = await request(app).get("api/users/currentUser").send()
  expect(response.body.currentUser).toEqual(null);
});
