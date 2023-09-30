
import Article from "../components/partials/main/article"
import CategoriesFetcher from "../components/partials/data/categories"
import Option from "../components/partials/main/option"
import { useState, useEffect } from "react"

export default function Sell({ onCreateProfile }) {
  
  
    const [show, setShow] = useState(false)
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [show2, setShow2] = useState(false)

    const toggleShow2 = () => {
      setShow2(!show2)
    }
    const toggleShow = () => {
      setShow(!show)
  }
    
    function handleCreateArticle()  {
      alert('created')
      const newArticle = {...article}
      onCreateProfile(newArticle);
    };

    const [article, setArticle] = useState({
      title: 'T-shirt',
      description: 'cotton shirt',
      image: 'https://mms-images-secure-prod.imgix.net/https%3A%2F%2Fmms-images.out.customink.com%2Fmms%2Fimages%2Fcatalog%2Fcolors%2F116200%2Fviews%2Falt%2Ffront_medium_extended.jpg%3Fdesign%3Ddjn0-00by-wu36%26digest%3D0000000023%26ixbg%3D%2523ffffff%26ixfm%3Djpeg%26ixq%3D60%26placeMax%3D1%26placeMaxPct%3D0.8%26placeUseProduct%3D1%26placeUseView%3Dfront?ixlib=rb-1.2.2&fit=fill&dpr=1&bg=ffffff&fm=pjpg&trim=auto&trimmd=0&q=50&auto=compress&w=600&h=600&s=0a3807758fe7f6915636560d3e59d078',
      price: 49,
      compareAtPrice: '',
      discount: '',
      category: "men's clothing",
      product_type: 'clothes',
      product_quantity: 4,
      rating: {rate: 0, count: 0}
    })

    function handleTitleChange(e) {
      
      setArticle({
        ...article,
        title: e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      onCreateProfile(article);
    };

    function handleDescriptionChange(e) {
     
      setArticle({
        ...article,
        description: e.target.value
      })
    }

    function handleImageChange(e) {
      
      setArticle({
        ...article,
       image: e.target.value
      })
    }

    function handleFileChange(e) {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();
    
      reader.onload = function (e) {
     
        setArticle({
          ...article,
          image: e.target.result // This will be a data URL
        });
      };
    
      if (selectedFile) {
        reader.readAsDataURL(selectedFile); // Read the file as a data URL
      }
    }
  
    function handleAddFileClick() {
      if (imageUrl.trim() !== "") {

        setArticle({
          ...article,
          image: imageUrl, 
        });
      }
      toggleShow(); 
    }
    

    function handlePriceChange(e) {
      
      setArticle({
        ...article,
        price: e.target.value
      })
    }

    function handleCategoryChange(e) {
   
      setArticle({
        ...article,
        category: e.target.value
      })
    }

    function handleTypeChange(e) {
      
      setArticle({
        ...article,
        product_type: e.target.value
      })
    }

    function handleQuantityChange(e) {
      
      setArticle({
        ...article,
        product_quantity: e.target.value
      })
    }

  function handleCompareChange(e) {
    
    setArticle({
      ...article,
      compareAtPrice: e.target.value
    })
  }

  function handleDiscountChange(e) {
    
    setArticle({
      ...article,
      discount: e.target.value
    })

  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
    return (< >
      <h1 className="text-5xl mt-16 mb-8 font-extrabold text-center text-black transform">
      Sell your own products
    </h1>
    <section className="lg:flex-row flex flex-col w-full justify-center lg:items-start items-center p-4  bg-zinc-100 h-full md:space-x-12">

    <form onSubmit={handleSubmit} className="lg:w-2/5 md:w-3/5 w-full flex items-center flex-col space-y-4 h-full" >
        <article className="w-full p-2 px-4 shadow-lg bg-white rounded-lg">
       <label htmlFor='title' className="w-full flex flex-col justify-center items-center text-xl font-bold" ><p className="w-full text-lg font-semibold"> Tittle </p> <input value={article.title} onChange={handleTitleChange} className="px-2 border-2 inline my-2 w-full py-1 rounded-lg border-black" id="title" placeholder="Short sleeve t-shirt" type="text"/></label>
       <label htmlFor='description' className="w-full flex flex-col justify-center items-center text-xl font-bold" ><p className="w-full text-lg font-semibold">Description</p> <textarea value={article.description} onChange={handleDescriptionChange} className="px-2 h-36 border-2  my-2 w-full py-1  rounded-lg border-black" id="description" placeholder="Cotton shirt , Size XL, Male" type="text"/></label>
       </article>

<article className="w-full hover:bg-gray-100 bg-white p-4 py-8 flex flex-col items-center justify-center rounded-lg">
       <p className="w-full relative text-xl font-bold -top-4"> Media </p>
        <h1 className="relative rounded  space-x-4 border-dotted w-full h-44 border-2 border-black flex items-center justify-center">
      
  <input type="file" onChange={handleFileChange}  id="imageUpload" name="image" accept="image/*" className="sr-only" />
  
  {show && <h1 className="w-full h-48 shadow-lg border-2 border-gray-300 rounded-lg flex flex-col items-center absolute bg-white"> <p className="bg-gray-200 rounded-lg py-4 px-2 w-full  font-semibold">Add image by URL</p>
  <p className="px-4 w-full text-gray-400"> .png .jpg .avif .webp etc
  <input type="text" value={article.image} onChange={handleImageChange} id="imgUrlUpload" name="image" placeholder="https://" className="px-2 relative top-2 py-1 border-2 drop-shadow-lg rounded w-full " />
  </p>
  <h2 className="flex bg-gray-200 relative top-8 rounded-lg py-1 w-full justify-end ">
  <button  onClick={handleAddFileClick} className="bg-black hover:bg-gray-900 rounded px-4 py-2 text-white">Add file</button>
  <button onClick={toggleShow} className="bg-white mx-4 shadow-lg hover:bg-gray-100 rounded px-4 py-2 font-semibold">Cancel</button>
  </h2>
  </h1>}
  <label htmlFor="imageUpload" className="bg-gray-100 shadow-lg font-semibold py-2 px-4 rounded-lg cursor-pointer">
    Choose File
  </label>
  <label htmlFor='imgUrlUpload'onClick={toggleShow}  className="hover:underline cursor-pointer">Add from URL</label>
</h1>
</article>

<article className="w-full sm:grid flex flex-col items-center sm:grid-cols-2 bg-white rounded p-4 ">
<p className="font-bold col-span-2 text-xl w-full">Pricing</p>
  <h1 className="w-full">
    
<label htmlFor='price' className="w-full flex flex-col items-center  font-semibold" ><p className="ml-4">Price</p> <input value={article.price} onChange={handlePriceChange} className="ml-4 border-2 inline my-2 w-2/3 py-1 px-4 rounded-lg border-black" id="price" placeholder="$$" type="number"/></label>
</h1> 
<h1 className="w-full">
<label htmlFor='compare' className="w-full flex flex-col items-center  font-semibold" ><p className="ml-4">Compare-at Price </p>
<input onChange={handleCompareChange} className="ml-4 border-2 inline my-2 w-2/3 py-1 px-4 rounded-lg border-black" id="compare" placeholder="$$" type="number"/></label>
</h1>

<label htmlFor='cost' className="w-full relative flex items-center flex-col font-semibold" >
  <p className="ml-4 flex">Cost per Item 
  <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onMouseEnter={toggleShow2}
                onMouseLeave={toggleShow2}
                className="w-6 hover:text-blue-500 ml-1 mt-[1px] font-lg h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              {show2 && (
                <p className="w-64  absolute bg-black text-white text-sm p-2 px-4 font-semibold rounded-lg">
                 How much did it cost you to make this product (users won't see this)
                </p>
              )} </p> 
   <input className="ml-4 border-2 inline my-2 w-2/3 py-1 px-4 rounded-lg border-black" id="cost" placeholder="$$" type="number"/></label>
<label htmlFor='discount' className="w-full relative items-center flex flex-col font-semibold" ><p className="ml-4">Discount</p> <input onChange={handleDiscountChange} className="ml-4 border-2 inline my-2 w-2/3 py-1 px-4 rounded-lg border-black" id="discount" placeholder="%" type="number"/></label>

<label htmlFor='check' className="flex cursor-pointer items-center col-span-2 mt-2 justify-center w-full" ><input className="mr-2" type="checkbox" id='check'/> Charge tax on this product </label>

</article >
<article className="bg-white rounded flex flex-col items-center p-4 w-full">
<p className="font-semibold">Product category</p>
<CategoriesFetcher setData={setData} setError={setError} />
<Option value={article.category} onChange={handleCategoryChange} data={data} error={error} />
 <p className="font-semibold">Product type</p> 
 <input value={article.product_type} onChange={handleTypeChange} className="border-2 border-gray-300 rounded-lg px-4 py-1 w-full" type="text" /> 
 <p className="font-semibold">Product quantity</p>
 <input value={article.product_quantity} onChange={handleQuantityChange} className="border-2 border-gray-300 rounded-lg px-4 py-1 w-full" type="number" /> 

</article>
        
    </form>
    <section className="lg:w-2/5 w-full md:w-3/5 mt-6  lg:mt-0 flex flex-col items-center">
    <Article imgSrc={article.image} title={article.title} price={article.price} description={article.description} imgStyle={`h-[350px]`} style={`rounded h-[600px] lg:mr-0 md:mr-12`} discount={article.discount + '%'} compare={article.compareAtPrice} />
    <button onClick={handleCreateArticle} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-xl shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-12 py-3 mt-6 lg:mr-0 mr-4 text-center ">Create</button>
    </section>
    </section>
    </>)
}