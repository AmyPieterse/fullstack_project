const database = require ('../config')

class Products{ 
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
        INSERT INTO products
        SET ?
        `
        database.query(query,[data],(err)=>{
            if (err) throw err
        })
    }
    fetchProducts(req,res){
        const query =
        `SELECT prodID, prodName, quantity, amount, category, prodURL
        FROM products;`
        database.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }

    async fetchProduct(req,res){
        const query =`SELECT prodID,prodName, quantity, amount, category, prodURL
        FROM products
        WHERE prodID = ${req.params.id};`
        
        database.query(query,(err,result)=>{
            if(err){
                return res.status(500).json({
                    status:res.statusCode,
                    message: 'Error fetching product'
                })
            }
            if (result.length === 0){
                return res.status(404).json({
                status: res.statusCode,
                message: 'Product not found'
                })
            }
            res.json({
                status:res.statusCode,
                result: result[0]
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
        database.query(query,[req.body],(err)=>{
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
        database.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The product record has been deleted"
            })
        })
    }
}
module.exports = Products