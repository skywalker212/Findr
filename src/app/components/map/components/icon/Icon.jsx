import { Icon } from 'leaflet';
import './Icon.css';
import mario from './../../../../../assets/images/mario.png';

class CustomIcon extends Icon {
  createIcon() {
    let parentElement = document.createElement('div');
    parentElement.className = "icon-style";
    let element = document.createElement('img');
    element.src = mario;
    element.className = "mario";
    parentElement.appendChild(element);
    return parentElement;
  }
}

const customIcon = new CustomIcon();

export default customIcon;