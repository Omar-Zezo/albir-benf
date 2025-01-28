import Hero from '../components/Home/Hero'
import Projects from '../components/Home/Projects'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='max-xl:pb-20'>
    <Hero/>
    <Services/>
    <Projects/>
    </div>
  )
}

export default Home