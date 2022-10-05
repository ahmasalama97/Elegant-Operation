import Home from "./Home";
import AboutUs from "./AboutUs";
import AboutDetails from "./AboutDetails";
import AboutTeam from "./AboutTeam";
import AboutCarres from "./AboutCarres";
import Services from "./Services";
import ServiceDetail from "./ServiceDetail";
import Hotels from "./Hotels";
import PricePage from "./PricePage";
import Blog from "./Blog";
import BlogSingle from "./BlogSingle";
import ContactUs from "./ContactUs";

const routes = [
  { path: "/", component: Home },
  { path: "/about-us", component: AboutUs },
  { path: "/about-detail", component: AboutDetails },
  { path: "/about-team", component: AboutTeam },
  { path: "/about-carees", component: AboutCarres },
  { path: "/services", component: Services },
  { path: "/services-detail", component: ServiceDetail },
  { path: "/hotels", component: Hotels },
  { path: "/page-pricing", component: PricePage },
  { path: "/blog", component: Blog },
  { path: "/blog-single", component: BlogSingle },
  { path: "/contact-us", component: ContactUs },
];

export default routes;
