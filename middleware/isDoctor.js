module.exports = async function (req, res, next) {
    

	if (req.isDoctor == true) {
		next();
    } 
    else
    {
		return res.status(403).json("you are not a doctor");
	}
};
