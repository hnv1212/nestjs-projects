import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
    res.send('ok current-user')
});

export { router as signoutRouter };
