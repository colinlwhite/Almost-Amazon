import {printToDom} from '../helpers/util.js'
import {putInCart} from './cart.js'


const bookObject = {
    name: "Meditations by Marcus Aurelius",
    price: 123.78, 
    imageURL: "http://prodimage.images-bn.com/pimages/9780812968255_p0_v2_s1200x630.jpg"
};

const bookPhoto = () => {
  const thePhoto = `<img src="${bookObject.imageURL}">`;
  printToDom('bookDiv', thePhoto);
}

const onlyButton = () => {
  const addButton = document.getElementById('addToCart');
  addButton.addEventListener('click', putInCart);
}; 

// Get Method 
const getPrice = () => {
  return bookObject.price;
};

  export {getPrice, onlyButton, bookPhoto}