
import Article2 from "../main/article2";


function CategoriestList({ data, error, onSelectCategory }) {
   
  return ( <>
    <main className="flex flex-col items-center pt-8 sm:pt-14 px-6 sm:px-12">
     <article className=" col-span-3 space-y-4 sm:pt-0 pt-10 mb-8">
      <h1 className=" text-center text-6xl font-bold">Find Work You Love</h1>
      <h1 className=" text-center text-xl font-semibold">Start your feed by selecting a few categories below</h1>
      </article>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-4">
      {error ? (
        <p>{error}</p>
      ) : data ? (
        data.map((category, index) => (
          <Article2 onClick={() => onSelectCategory(category)} key={index} title={category} imgSrc={(category === 'electronics' ) ? 'https://media.istockphoto.com/id/1400570369/photo/old-computers-digital-tablets-mobile-phones-many-used-electronic-gadgets-devices-broken.webp?b=1&s=170667a&w=0&k=20&c=_k9c4kOtyexBnt-lCoIwLsw6QWDvK7OAQMJiIU8LDtg=' : category === 'jewelery' ? 'https://www.fairtrade.org.uk/wp-content/uploads/2020/02/Ethical-and-Sustainable-jewellery-banner-Update-Oct-2021.jpg' : category === "men's clothing" ? 'https://media.istockphoto.com/id/887360960/photo/mens-suits-on-hangers-in-different-colors.jpg?s=612x612&w=0&k=20&c=RR19yJjRuR-CBWj9u1sQkFgtdYJ07KEkM678R0mtuZY=' : category === "women's clothing" ? 'https://media.istockphoto.com/id/155596905/photo/high-class-female-clothing.jpg?s=612x612&w=0&k=20&c=V1HcqglhOc76MHidrmyPjraiMNXwhAzO-wMHbEMMEqM=' : 'none'}/>
        ))
      ) : <p>Loading products...</p> } 
      </section>
    </main>
    </>
  );
}

export default CategoriestList;
