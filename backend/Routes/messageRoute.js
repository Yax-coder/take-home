const express = require("express");
const {
    createMessage, getMessages, updateMessageReadStatus, getUserMessages
} = require("../Controllers/messageController");

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatId", getMessages);
router.get('/:receiverId', getUserMessages);
router.put("/:chatId", updateMessageReadStatus);

module.exports = router;
