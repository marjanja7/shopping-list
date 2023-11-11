const Product = (props) => {
    const { product,deleteProduct } = props

    return (
        <div className="bg-indigo-50 m-5 flex justify-evenly rounder-md shadow-md py-6 py-4'">
        <div className='flex flex-col items-start'>
            <p className='bg-blue-100 text-xl text-rose-600 font-bold rounded-full px-4 py-1 shadow'>{product.name}</p>
            
        </div>
        <div className="flex gap-x-4">
        
    
        <div class="text-blue-50 bg-blue-500 rounded p-2 hover:bg-blue-600 cursor-pointer hover:text-white transition-all duration-200" role="button" tabindex="0">
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-6 h-6">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
        </div>
        <button className="hover:underline cursor-pointer" onClick={() => deleteProduct(product.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="border-rose-500 border border-solid text-blue-600 w-10 h-10 bg-red-50 rounded p-2 hover:bg-red-200 cursor-pointer transition-all duration-200">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        
        </button>
        </div>
        </div>
    )
}
export default Product 