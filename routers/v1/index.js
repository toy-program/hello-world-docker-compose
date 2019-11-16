const router = require('express').Router();
const servicePost = require('../../services/servicePost');
// 포스트를 조회한다.
router.get('', async (req, res) => {
  const list = await servicePost.getList();
  res.json(list);
});

// 특정 포스트를 조회한다.
router.get('/:postId', async (req, res) => {
  const {postId} = req.params;
  const post = await servicePost.getAPost(postId);
  res.json(post);
});

// 포스트를 생성한다.
router.post('', async (req, res) => {
  const {title, content} = req.body;
  const post = await servicePost.createAPost(title, content);
  res.json(post);
});

// 특정 포스트를 삭제한다.
router.delete('/:postId', async (req, res) => {
  const {postId} = req.params;
  await servicePost.deleteAPost(postId);
  res.json({result: true});
});

module.exports = router;
