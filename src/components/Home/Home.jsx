

import About from './About'
import Banner from './Banner'
import WeDo from './WeDo'
import Testimonial from './Testimonial'
import Loader from './Loader'
import { useMyContext } from '../../CreateContext'
const Home = () => {

    return (
        <>
            <Banner />
            <About />
            <WeDo />
            <Testimonial />
        </>


    )
}

export default Home