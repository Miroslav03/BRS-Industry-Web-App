import CompanyInfo from "./pages/CompanyInfo";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Materials from "./pages/Materials";
import Projects from "./pages/Projects";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <CompanyInfo />
            <Materials />
            <Projects />
            <Contacts />
            <Footer />
        </>
    );
}
