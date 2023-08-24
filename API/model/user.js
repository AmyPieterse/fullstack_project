const database = require ('../config')

class Users{  //contains all the methods that you have in database
    fetchUsers(req,res){
        const query =
        `SELECT userID, firstName,lastName, userAge, gender, userRole, emailAdd, userProfile
        FROM users;`
        database.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    fetchUser(req,res){
        const query =`
        SELECT userID, firstName,lastName, userAge, gender, userRole, emailAdd, userProfile
        FROM users
        WHERE userID = ${req.params.id};
        `
        database.query(query,(err,result)=>{
            if(err){
                return res.status(500).json({
                    status: res.statusCode,
                    message: 'Error fetching user'
                })
            }
            if(result.length===0){
                return res.status(404).json({
                    status:res.statusCode,
                    message: 'User not found'
                })
            }
            res.json({
                status:res.statusCode,
                result: result[0]
            })
        })
    }
    login(req,res){
        const {emailAdd, userPass} = req.body
        // query
        const query = `
        SELECT firstName, lastName,
        gender, userDOB, emailAdd, userPass,
        profileUrl
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `
        db.query(query,[userPass], async (err, result)=>{
            console.log(result,userPass);
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            }else {
                await compare(userPass,
                    result[0].userPass,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        let token =
                        createToken({
                            emailAdd,
                            userPass
                        })
                        // Save a token
                        res.cookie("LegitUser",
                        token, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or you have not registered"
                            })
                        }
                    })
                }
        })
    }
    async register(req,res){
        const data =req.body //saving req.body in object
        data.userPass = await hash(data.userPass,15)
        
        //payload
        const user ={
            // all data that comes from req.body we save in a new object data
            emailAdd : data.emailAdd,
            userPass : data.userPass
        }
        const query =`
        INSERT INTO Users
        SET ?
        `
        db.query(query,[data],(err)=>{
            if (err) throw err
            let token = createToken(user)
            res.cookie('UserCookie',token,
            {
                maxAge:3600000,
                httpOnly:true
            })
            res.json({
                status:res.statusCode,
                msg:"You are now registered."
            })
        })
    }
    updateUser(req,res){
        const data = req.body
        if(data.userPass){
            data.userPass = hashSync(data.userPass,15)
        }
        const query =`
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id};
        `
        db.query(query,[req.body],(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been updated "
            })
        })
    }
    deleteUser(req,res){
        const query =`
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been deleted."
            })
        })
    }
}
module.exports = Users