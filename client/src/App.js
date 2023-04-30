import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import MainNav from "./components/nav/MainNav";
import SecondNav from "./components/nav/SecondNav";
import BottomHeader from "./components/bottomHeader/BottomHeader";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
import SectionFive from "./components/sectionFive/SectionFive";
import Footer from "./components/footer/footer";
import MainMenu from "./components/mainMenu/MainMenu";
import Offers from "./components/offers/Offers";
import StorySectionOne from "./components/story/storySectionOne/StorySectionOne";
import Vacancies from "./components/vacancies/Vacancies";
import TableBooking from "./components/tableBooking/TableBooking";
import PrivcyPolicy from "./components/privcyPolicy/privcyPolicy";
import LearnMore from "./components/learnMore/LearnMore";
import ContactUs from "./components/contactus/ContactUs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Slider from "./components/slider/Slider";

function App() {
  const propsData = {
    sectionOne: {
      heading: "Discover The Flavours of",
      heading1: "Pakistani & Indian Cuisine",
      img: "banner1.jpg",
      para: "If you’re going to dine out, you may as well do it right. Head overat a Tipu Sultan near you.",
    },
    offers: {
      heading: "Offers At Tipu Sultan Nottingham",
      img: "ts-offers-1.png",
      para: "If you’re going to dine out, you may as well do it right. Head overat a Tipu Sultan near you.",
    },
    story: {
      heading: "Offers At Tipu Sultan Nottingham",
      img: "banner-bg.jpg",
      para: "If you’re going to dine out, you may as well do it right. Head overat a Tipu Sultan near you.",
    },
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainNav />
        <SecondNav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BottomHeader />
                <SectionOne props={propsData.sectionOne} />
                <Slider />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
              </>
            }
          />
          <Route path="/restaurant-menu" element={<MainMenu />} />
          <Route
            path="/offers"
            element={
              <>
                <BottomHeader />
                <SectionOne props={propsData.offers} />
                <Offers />
              </>
            }
          />
          <Route
            path="/our-story"
            element={
              <>
                <BottomHeader />
                <SectionOne props={propsData.story} />
                <StorySectionOne />
                <SectionFour />
                <SectionFive />
              </>
            }
          />
          <Route
            path="/vacancies"
            element={
              <>
                <Vacancies />
                <SectionFour />
              </>
            }
          />
          <Route
            path="/reservations"
            element={
              <>
                <BottomHeader />
                <TableBooking />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <PrivcyPolicy />
              </>
            }
          />
          <Route
            path="/learn-more"
            element={
              <>
                <LearnMore />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <BottomHeader />
                <ContactUs />
                <SectionFive />
              </>
            }
          />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
