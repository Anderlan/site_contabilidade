import Header from '../header';
import Services from '../services';
import Paragraph from '../paragraph';
import Footer from "../footer";

function home() {
    return (
        <div>
            <Header />
            <Services />
            <Paragraph />
            <Footer />
        </div>
    );
}

export default home;