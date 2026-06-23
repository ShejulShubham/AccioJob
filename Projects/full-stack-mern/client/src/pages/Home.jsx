import BlogList from "../components/BlogList";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";


export default function Home() {

    return (
        <>
            <Navbar />
            <Header />
            <BlogList />
            <Newsletter />
        </>
    )
}