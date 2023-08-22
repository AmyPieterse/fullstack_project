const database = require ('../config')

class Products{  //contains all the methods that you have in database
    async createProduct(req,res){
        const data =req.body //saving req.body in object
        //payload
        const user ={
            // all data that comes from req.body we save in a new object data
            productName : data.prodName,
            price : data.amount,
            category : data.category,
            image : data.prodURL
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
    fetchProduct(req,res){
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
                msg: "The product record has been deleted."
            })
        })
    }
}
module.exports = Products