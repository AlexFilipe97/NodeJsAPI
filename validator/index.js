exports.createPostValidator = (req, res, next) => {
    //title
    req.check("title", "Write a title").notEmpty();
    req.check("title", "Title has to be between 4 and 150 characters").isLength({
        min: 4,
        max: 150
    });

    //body
    req.check("body", "Write a body").notEmpty();
    req.check("body", "Body has to be between 4 and 2000 characters").isLength({
        min: 4,
        max: 2000
    });

    //checks
    const errors = req.validationErrors();

    // if error FIFO
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({
            error: firstError
        });
    }

    next();
};