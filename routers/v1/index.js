const router = require("express").Router();

// 포스트를 조회한다.
router.get("", (req, res) => {
  res.send("<h1>Hello Docker compose!!</h1>");
});

// 특정 포스트를 조회한다.
router.get("/:postId", (req, res) => {});

// 포스트를 생성한다.
router.post("", (req, res) => {});

// 특정 포스트를 삭제한다.
router.delete("/:postId", (req, res) => {});

module.exports = router;
