module.exports = function (req, res, next) {
	if (req.rendezvous.patient.indexOf(req.verifiedUser._id) !== -1) {
		next();
	} else {
		return res.status(403).json("you are not an owner of this rendezvous");
	}
};
