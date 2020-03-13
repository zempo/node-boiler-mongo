const Item = require("../models/Item");

// @desc get all items
// @route GET /api/v1/items
// @access Public
exports.getItems = async (req, res, next) => {
  try {
    const items = await Item.find();

    return res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "server error"
    });
  }
};
