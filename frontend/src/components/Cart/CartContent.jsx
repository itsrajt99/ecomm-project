import { MdDelete } from "react-icons/md";

const CartContent = () => {

    const cartProducts = [
       {
        productId: 1,
        name:"T-Shirt",
        size: "M",
        Color: "Red",
        quantity:1,
        price:15,
        image: "https://picsum.photos/200?random=1"
},
     {
        productId: 2,
        name:"Jeans",
        size: "L",
        Color: "Blue",
        quantity:1,
        price:15,
        image: "https://picsum.photos/200?random=2"
},
    ];
  return (
    <div>
      {
        cartProducts.map((product, index) => (
            <div key={index} className='flex items-start justify-between py-4 border-b'>
               <div className='flex items-start'>
                  <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4'/>
                  <div>
                    <h3>{product.name}</h3>
                    <p className='text-sm text-gray-500'>size :{product.size} | color : {product.Color}</p>
                      <div>
                        <button className="border rounded px-2 py-1 text-xl font-medium cursor-pointer">-</button>
                        <span className="mx-4">{product.quantity}</span>
                        <button className="border rounded px-1 py-1 text-xl font-medium cursor-pointer">+</button>
                      </div>
                  </div>
               </div>
               <div>
                <p>$ {product.price.toLocaleString()}</p>
                <button>
                  <MdDelete className="h-6 w-6 mt-2 text-red-600 cursor-pointer" />
                </button>
               </div>
            </div>
        ))
      }
    </div>
  )
}

export default CartContent
