const express = require("express");
const Product = require("../models/Product");
const {protect,admin} = require("../middleware/authMiddleWear")

const router = express.Router();

//Create product
router.post("/", protect,admin, async(req,res)=>{
    try {
        const {name,
               description,
               price,
               discountPrice,
               countInStock, 
               category,
               brand,
               material,
               sizes,
               colors,
               gender,
               images,
               isFeatured,
               isPublished,
               tags,
               dimensions,
               weight,
               sku,
        } = req.body;

        const product = new Product({ description,
               price,
               name,
               discountPrice,
               countInStock, 
               category,
               brand,
               material,
               sizes,
               colors,
               gender,
               images,
               isFeatured,
               isPublished,
               tags,
               dimensions,
               weight,
               sku,
               user:req.user._id,}
            );
            const createdProduct = await product.save();
            res.status(201).json(createdProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error")
    }
})

//Update request
router.put("/:id",protect,admin, async(req,res)=>{
    try {
         const {name,
               description,
               price,
               collections,
               discountPrice,
               countInStock, 
               category,
               brand,
               material,
               sizes,
               colors,
               gender,
               images,
               isFeatured,
               isPublished,
               tags,
               dimensions,
               weight,
               sku,
        } = req.body;
 
        //Find the product in db
        const product = await Product.findById(req.params.id);

        if(product){
            //Update product
            product.name = name || product.name;
            product.description = description || product.description;
            product.collections = collections || product.collections;
            product.price = price || product.price;
            product.discountPrice = discountPrice || product.discountPrice;
            product.countInStock = countInStock || product.countInStock;
            product.category = category || product.category;
            product.brand = brand || product.brand;
            product.sizes = sizes || product.sizes;
            product.colors = colors || product.colors;
            product.material = material || product.material;
            product.gender = gender || product.gender;
            product.images = images || product.images;
            product.isFeatured = isFeatured !== undefined? isFeatured:product.isFeatured;
            product.isPublished = isPublished !==undefined ? isPublished :product.isPublished;
            product.tags = tags || product.tags;
            product.dimensions = dimensions || product.dimensions;
            product.weight = weight || product.weight;
            product.sku = sku || product.sku;


            //Save the updated product to db
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        }
        else{
            res.json(404).json({message:"Product not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error")
    }
})


//Deleting the products
router.delete("/:id",protect,admin,async(req,res)=>{
    try {
        //Find the prod and tthen delete it
        const product = await Product.findById(req.params.id);
        if(product){
            //Reove from db
            await product.deleteOne();
            res.json({message:"Product Remove"});
        }
        else{
            res.status(404).json({message:"Product Not Found"})
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server error")
    }
});


//Get all the products with filters
router.get("/",async(req,res)=>{
    try {
        const {collection,size,color,gender,minPrice,maxPrice,sortBy,search,category,material,brand,limit} = req.query;
        let query = {};
        //Filter logic
        if(collection && collection.toLocaleLowerCase() !=="all"){
            query.collections = collection;
        }
         if(category && category.toLocaleLowerCase() !=="all"){
            query.category = category;
        }
        if(material){
            query.material= {$in:material.split(",")}
        }
         if(brand){
            query.brand= {$in:brand.split(",")}
        }
         if(size){
            query.sizes= {$in:size.split(",")}
        }
        if(color){
            query.colors = {$in: [color]};
        }
        if(gender){
            query.gender = gender;
        }
        if(minPrice || maxPrice){
            query.price = {};
            if(minPrice)query.price.$gte = Number(minPrice)
            if(maxPrice)query.price.$lte = Number(maxPrice)
        }

        if(search){
            query.$or = [
                {name:{$regex: search, $options:"i"}},
                {description:{$regex:search,$options:"i"}}
            ]
        }

        //Sort logic
        let sort = {};
        if(sortBy){
            switch (sortBy){
                case "priceAsc":
                    sort = {price:1};
                    break;
                case "priceDesc":
                    sort ={price:-1};
                    break;
                case "pop":
                    sort ={rating:-1};
                    break;
                default:
                    break;            
            }   

        }

        //Fetch Product from db
        let products = await Product.find(query)
        .sort(sort)
        .limit(Number(limit) || 0);
        res.json(products)
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

//Best Seller
router.get("/best-seller",async(req,res)=>{
    try {
        const bestSeller = await Product.findOne().sort({rating:-1});
        if(bestSeller){
            res.json(bestSeller);
        }
        else{
            res.status(404).json({message:"Best Seller not found"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

//New Arraivals
router.get("/new-arrivals",async(req,res)=>{
    try {
        const newArrivals = await Product.find().sort({createdAt :-1}).limit(8);
        res.json(newArrivals);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
})

//Single product details
router.get("/:id",async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }
        else{
            res.status(404).json({message:"Product not found"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

//Similar Product for product details page
router.get("/similar/:id",async(req,res)=>{
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }

        const similarProducts = await Product.find({
            _id:{$ne: product._id},
            gender:product.gender,
            category:product.category,
        }).limit(4)

        res.json(similarProducts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
})



module.exports = router;