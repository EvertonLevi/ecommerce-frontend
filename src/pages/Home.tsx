import { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {

	const { products } = useContext(ProductContext);

	const filteredProducts = products.filter((item: any) => {
		return (item?.category === "women's clothing")
	})

	return (
		<div className=''>
			<Hero />
			<section className='py-16 lg:px-[80px]'>
				<div className="container mx-auto">
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
						{filteredProducts.map((product: any) => {
							return (
								<Product
									product={product}
									key={product.id} />
							)
						})}
					</div>
				</div>
			</section>
		</div>
	)
};

export default Home;