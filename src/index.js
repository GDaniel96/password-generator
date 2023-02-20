import Length from "./assets/filters/Length";
import Events from "./assets/events/Events";
import "./assets/styles/global.css";
import "./assets/styles/generate-password-button.css";
import "./assets/styles/input-field.css";
import "./assets/styles/slider.css";
import "./assets/styles/strength.css";
import "./assets/styles/filters.css";

const length = new Length();
const events = new Events();

events.setEvents();
length.sliderController();
