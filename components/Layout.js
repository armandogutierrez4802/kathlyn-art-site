import Navbar from './Navbar';
import Footer from './Footer';


export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div id="content-wrap">
                {children}
            </div>
            <Footer />
        </div>
    )
}

