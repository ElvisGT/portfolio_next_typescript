import {Header} from '@components/Header/Header';
import {Footer} from '@components/Footer/Footer';
import { Home } from '@containers/Home/Home';
import {Services} from '@containers/Services/Services';
import {Portfolio} from '@containers/Portfolio/Portfolio';
import {Blog} from '@containers/Blog/Blog';


export default function index(){
    return (
        <>
            <Header />
            <Home />
            <Services />
            <Portfolio />
            <Blog />
            <Footer />
        </>
    );
}