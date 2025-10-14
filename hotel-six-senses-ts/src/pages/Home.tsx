import { HomeNav } from '@/components/HomeNav';


const Home = () => {
    /* para el hover podria usar onMouseEnter y onMouseLeave */

    return (<>

        <div className="Home-img">
            <div className='Home-title'>
                <h1 className="Home-h1">hotel Six Senses</h1>
                <h2 className="Home-h2"><i>Ibiza</i> </h2>
            </div>
            <HomeNav />
        </div >

    </>);
}

export default Home;