// @desc get all shops
// @route get /api/v1/shops
// @access Public
exports.getShops = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'get all shops' });
};

// @desc get single shop
// @route get /api/v1/shops/:id
// @access Public
exports.getShop = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `show shop details ${req.params.id}` });
};

// @desc add new shop details
// @route get /api/v1/shops
// @access Private
exports.createShop = (req, res, next) => {
  res.status(201).json({ success: true, msg: 'add new shop details' });
};

// @desc add update a shop details
// @route get /api/v1/shops/:id
// @access Private
exports.updateShop = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update shop details of ${req.params.id}` });
};

// @desc add delete a shop details
// @route get /api/v1/shops/:id
// @access Private
exports.deleteShop = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete shop details of ${req.params.id}` });
};
