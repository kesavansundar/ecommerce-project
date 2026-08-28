import {FiArrowRight} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Smart gadgets and latest technology",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661",
  },
  {
    id: 2,
    name: "Fashion",
    description: "Trendy clothes for every style",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },
  {
    id: 3,
    name: "Shoes",
    description: "Stylish and comfortable footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    name: "Accessories",
    description: "Complete your look with accessories",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561",
  },
  {
    id: 5,
    name: "Beauty",
    description: "Beauty and personal care products",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    id: 6,
    name: "Home & Living",
    description: "Products to make your home better",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
  },
  {
    id: 7,
    name: "Sports",
    description: "Everything for your active lifestyle",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
  },
  {
    id: 8,
    name: "Gaming",
    description: "Gaming accessories and equipment",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
  },
];

function Categories(){
    const navigate= useNavigate();
    return(
    <>
    <Navbar/>
      <main className="categories-page">
        <BackButton/>
        
        <section className="categories-hero">
          <span>EXPLORE OUR COLLECTION</span>
          <h1>Shop by Category</h1>
          <p>Find everything you need from our wide range of categories.</p>
        </section>

        <section className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <img src={category.image} alt={category.name} />
              <div className="category-info">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <button onClick={()=>navigate(`/products?category=${category.name}`)}>
                  Shop Now
                  <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
    )
}
export default Categories;