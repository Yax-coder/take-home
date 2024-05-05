const express = require("express");
const {
    createMessage, getMessages, updateMessageReadStatus
} = require("../Controllers/messageController");

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatId", getMessages);
router.put("/:chatId", updateMessageReadStatus);

module.exports = router;
