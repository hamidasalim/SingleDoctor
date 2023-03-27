module.exports = async function (req, res, next) {
    const x= await rendezvousModels.findById(req.verifiedUser._id);

	if (req.isSecretary == true) {
		next();
	} else if( req.params !=null){
        if(x.isSecretary==true)
        {
            req.secretary=x;
        next();
        }
    } 
    else
    {
		return res.status(403).json("you are not a secretary");
	}
};
