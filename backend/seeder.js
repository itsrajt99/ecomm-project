const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart")
const products = require("./data/products");


dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.listen(process.env.PORT || 3000, () =>
//   console.log("Server running")
// );

//Connect to mongodb data base
mongoose.connect(process.env.MONGO_URI);

//Function to add seed data

const seedData = async()=>{
    try {
        //clear previous data
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMAny();

        //Create an admin user default
        const createdUser = await User.create({
            name:"Admin",
            email:"adim@example.com",
            password:"admin123",
            role:"admin",
        });

        //Assign default userId to each product
        const userId = createdUser._id;

        const sampleProducts = products.map((product)=>{
            return {...product,user:userId};
        });

        //Insert to db
        await Product.insertMany(sampleProducts);
        console.log("Product data created successfully");
        process.exit();
    } catch (error) {
        console.error("Error seeding the data",error);
        process.exit(1);
    }
};

seedData();
