import { useContext } from "react";
import { LeaderTeam } from "../layouts/about";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import { About, Overview } from "../layouts/home/index";
import { Header, Footer, BottomBar, TopBar } from "../layouts/general/index";
import { LanguageConsumer, LanguageContext } from "../../LanguageContext";

const AboutUs = () => {
  const lang = useContext(LanguageContext);

  let state = {
    headers: [
      {
        id: 1,
        logoweb: "assets/img/logo-small.png",
        names: lang.lang.nav.about,
      },
    ],
    banners: [
      {
        id: 1,
        links: "",
        titlelink: "",
        border: "",
        name: lang.lang.nav.about,
        heading: lang.lang.nav.about,
      },
    ],
  };

  return (
    <LanguageConsumer>
      {({ language }) => (
        <div
          className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search"
          style={{ direction: language === "english" ? "ltr" : "rtl" }}
        >
          <div id="wrapper" className="animsition">
            <div id="page" className="clearfix">
              <div id="site-header-wrap">
                <TopBar />
                {state.headers.map((data, idx) => (
                  <Header data={data} key={idx} />
                ))}
              </div>
              {state.banners.map((data) => (
                <BannerTitle key={data.id} data={data} />
              ))}
              <div id="main-content" className="site-main clearfix">
                <div id="content-wrap">
                  <div id="site-content" className="site-content clearfix">
                    <div id="inner-content" className="inner-content-wrap">
                      <div className="page-content">
                        <About lang={lang} />
                        <div className="row-tabs">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12">
                                <div
                                  className="themesflat-spacer clearfix"
                                  data-desktop={61}
                                  data-mobile={60}
                                  data-smobile={60}
                                />
                              </div>
                            </div>
                            <div className="row">
                              <Overview lang={lang} />
                            </div>
                          </div>
                        </div>
                        <LeaderTeam lang={lang} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {state.headers.map((data, idx) => (
                <Footer data={data} key={idx} />
              ))}
              {state.headers.map((data, idx) => (
                <BottomBar data={data} key={idx} lang={lang} />
              ))}
            </div>
          </div>
        </div>
      )}
    </LanguageConsumer>
  );
};

export default AboutUs;
