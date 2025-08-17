exports.isAdmin = (req,res,next) => {
    if(!req.user.admin) {
        return res.status(403).json({error: "Admin access required"})
    }
    next()
}