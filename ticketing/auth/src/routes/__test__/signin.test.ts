import request from "supertest";
import { app } from "../../app";

it("fails when a email that does not exist in supplied", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "passw0rd",
    })
    .expect(400);
});

it("fails when an incorrect password is supplied", async () => {
  await request(app).post("/api/users/signup").send({
    email: "test@test.com",
    password: "passw0rd",
  });

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "wrongpassw0rd",
    })
    .expect(400);
});

it("responds with a cookie when given valid credentials", async () => {
  await request(app).post("/api/users/signup").send({
    email: "test@test.com",
    password: "passw0rd",
  });

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "passw0rd",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
