const database = require ('../config')
class Products{ 
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
    async createProduct(req,res){
        const data =req.body //saving req.body in object
        //payload from products
        const product ={
            // all data that comes from req.body we save in a new object data
            productName : data.prodName,
            price : data.amount,
            category : data.category,
            image : data.prodURL
        }
        const query =`
        INSERT INTO products
        SET ?;
        `
        database.query(query,[data],(err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product inserted"
            })
        })
    }
    fetchProduct(req,res){
        const query =`SELECT prodID, prodName, quantity, amount, category, prodURL
        FROM products
        WHERE prodID = ${req.params.id};`
        
        database.query(query,(err,result)=>{
            if(err) throw err
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
        
        const query =`DELETE FROM products WHERE prodID = ${req.params.id};`
        
        console.log(query)
        
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