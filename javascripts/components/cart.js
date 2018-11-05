import {getPrice} from './store.js'
import {printToDom} from '../helpers/util.js'

let theCart = 0;

const putInCart = () => {
  theCart = getPrice();
  printToDom('cartDiv', theCart);
};

export {putInCart};