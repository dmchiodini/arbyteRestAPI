const handleError = (res, error) => {
    res.status(error.status || 500).json({ ...error, message: error.message });
};

module.exports = handleError;