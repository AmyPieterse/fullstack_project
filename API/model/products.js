const database = require ('../config')

class Products{  //contains all the methods that you have in database
    async createProduct(req,res){
        const data =req.body //saving req.body in object
        //payload
        const user ={
            //Payload is data that comes from user
            // all data that comes from req.body we save in a new object data
            productName : data.prodName,
            price : data.amount
        }
        const query =`
        INSERT INTO Products
        SET ?
        `
        db.query(query,[data],(err)=>{
            if (err) throw err
            
        })
    }
    fetchProducts(req,res){
        const query =
        `SELECT prodID, prodName, quantity, amount, category, prodURL
        FROM Products;`
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
        SELECT userID, firstName,lastName, gender, userDOB, emailAdd, profileUrl
        FROM Users
        WHERE userID = ${req.params.id};
        `
        database.query(query,(err,result)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                result
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
    async createProduct(req,res){
        const data =req.body //saving req.body in object
        
        //payload
        const user ={
            //Payload is data that comes from user
            // all data that comes from req.body we save in a new object data
            productName : data.prodName,
            price : data.amount
        }
        const query =`
        INSERT INTO Products
        SET ?
        `
        db.query(query,[data],(err)=>{
            if (err) throw err
            
        })
    }
    updateProduct(req,res){
        const data = req.body
        const query =`
        UPDATE products
        SET ?
        WHERE prodID = ${req.params.id};
        `
        db.query(query,[req.body],(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been updated "
            })
        })
    }
    deleteProduct(req,res){
        const query =`
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
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