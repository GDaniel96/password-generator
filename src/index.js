import Length from "./assets/filters/Length";
import Events from "./assets/events/Events";
import PasswordView from "./assets/view/PasswordView";

import "./assets/styles/global.css";
import "./assets/styles/generate-password-button.css";
import "./assets/styles/input-field.css";
import "./assets/styles/slider.css";
import "./assets/styles/strength.css";
import "./assets/styles/filters.css";

const passwordView = new PasswordView();

passwordView.render();

const length = new Length();

length.sliderController();
