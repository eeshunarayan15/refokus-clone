
import Work from '../Work/Work'
import Stripes from '../Stripe/Stripes'
import Products from '../Products/Products'
import Marqees from '../Marquees/Marqees'
import Cards from '../Cards/Cards'
import Fotter from '../Fotter/Fotter'

const Home = () => {
  return (
      <div className='bg-zinc-800 '>
      <Work  />
      <Stripes />
      <Products />
      <Marqees />
      <Cards />
      <Fotter/>
          
    </div>
  )
}

export default Home