import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header/header.css";
import "../styles/components/hero/hero.css";
import "../styles/components/about/about.css";
import "../styles/components/featured/featured.css";
import "../styles/components/work/work.css";
import "../styles/components/contact/contact.css";
import "../styles/components/footer/footer.css";
import "../styles/components/mobile-nav/mobile-nav.css";
import "../styles/utils.css";

import mobileNav from "./utils/mobile-nav";
import darkModeToggle from "./utils/dark-mode";
import lazyLoading from "./utils/lazyloading";
mobileNav();
darkModeToggle();
lazyLoading();
