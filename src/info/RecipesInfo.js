/* STARTER */
import crispyKangkong from '../assets/products/crispy-kangkong.jpg'
import friedTawilis from '../assets/products/fried tawilis.jpg';
import crunchyMushoom from  '../assets/products/crunchy mushroom.jpg';
import onionRings from '../assets/products/onion rings.jpg';
import calamares from '../assets/products/calamares.jpg';
import nilasingNaHipon from '../assets/products/nilasing na hipon.jpg';
import camaronRebosado from '../assets/products/camaron rebosado.jpg';
import beefShanghai from '../assets/products/beef shanghai.jpg';
import frenchFries from '../assets/products/french fries.jpg';

/* VEGETARIAN */
import vegetarianTapa from '../assets/products/vegetarian tapa.jpg'
import sizzlingVegelonaSteak from '../assets/products/sizzling vegelona steak.jpg'
import sizzlingTofu from '../assets/products/sizzling tofu.jpg';
import vegemeatCurry from '../assets/products/vegemeat curry.jpg';
import vegetarianTocino from '../assets/products/vegetarian tocino.jpg';
import vegemeatCaldereta from '../assets/products/vegemeat caldereta.jpg';
import tofuCurry from '../assets/products/tofu curry.jpg';
import tofuInTausi from '../assets/products/tofu in tausi.jpg';
import vegemeatInMushroomSauce from '../assets/products/vegemeat in mushroom sauce.jpg';


/* Chicken */
import bicolExpressChicken from '../assets/products/bicol express chicken.jpg';
import chickenTinola from '../assets/products/chicken tinola.jpg';
import sinigangNaManok from '../assets/products/sinigang na manok.jpg';
import chickenCurry from '../assets/products/chicken curry.jpg';
import chickenAdobo from '../assets/products/chicken adobo.jpg';
import pineappleChikcen from '../assets/products/pineapple chicken.jpg';

export const availCategories = ["starter", "vegetarian", "chicken", "mario's favorite chicken", "beef", "fish", "seafood", "sizzling options", "vegetables", "noodles", "soup"];

export const availRecipes = [
    /* Starter */
    {
      recipeName: 'crispy kangkong',
      price: 225,
      image: crispyKangkong,
      category: "starter",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'fried tawilis',
      price: 385,
      image: friedTawilis,
      category: "starter",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'crunchy mushroom',
      price: 270,
      image: crunchyMushoom,
      category: "starter",
      limit: '3-5 PAX'
    },

    {
      recipeName: 'nilasing na hipon',
      price: 460,
      image: nilasingNaHipon,
      category: "starter",
      limit: '4-5 PAX'
    },
    
    {
      recipeName: 'camaron rebosado',
      price: 480,
      image: camaronRebosado,
      category: "starter",
      limit: '3-4 PAX'
    },

    {
      recipeName: 'onion rings',
      price: 270,
      image: onionRings,
      category: "starter",
      limit: '3-4 PAX'
    },
    {
      recipeName: 'calamares',
      price: 380,
      image: calamares,
      category: "starter",
    },
    {
      recipeName: 'beef shanghai',
      price: 290,
      image: beefShanghai,
      category: "starter",
      limit: '3-4 PAX'
    },
    {
      recipeName: 'french fries',
      price: 290,
      image: frenchFries,
      category: "starter",
      limit: '3-4 PAX'
    },

    /* Vegetarian */
    {
      recipeName: 'vegetarian tapa',
      price: 380,
      image: vegetarianTapa,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'sizzling vegelona steak',
      price: 395,
      image: sizzlingVegelonaSteak,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'vegemeat curry',
      price: 395,
      image: vegemeatCurry,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'sizzling tofu',
      price: 395,
      image: sizzlingTofu,
      category: "vegetarian",
      limit: '3-4 PAX'
    },
    {
      recipeName: 'vegetarian tocino',
      price: 380,
      image: vegetarianTocino,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'vegemeat caldereta',
      price: 395,
      image: vegemeatCaldereta,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'tofu curry',
      price: 395,
      image: tofuCurry,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'tofu in tausi',
      price: 395,
      image: tofuInTausi,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'vegemeat in mushroom sauce',
      price: 375,
      image: vegemeatInMushroomSauce,
      category: "vegetarian",
      limit: '3-5 PAX'
    },

    /* Chicken */
    {
      recipeName: 'chicken tinola',
      price: 520,
      image: chickenTinola,
      category: "chicken",
      limit: '4-5 PAX'
    },
    {
      recipeName: 'sinigang na manok',
      price: 520,
      image: sinigangNaManok,
      category: "chicken",
      limit: '4-5 PAX'
    },
    {
      recipeName: 'chicken curry',
      price: 550,
      image: chickenCurry,
      category: "chicken",
      limit: '4-5 PAX'
    },
    {
      recipeName: 'bicol express chicken',
      price: 550,
      image: bicolExpressChicken,
      category: "chicken",
      limit: '4-5 PAX'
    },
    {
      recipeName: 'chicken adobo',
      price: 475,
      image: chickenAdobo,
      category: "chicken",
      limit: '4-5 PAX'
    },
    {
      recipeName: 'pineapple chicken',
      price: 550,
      image: pineappleChikcen,
      category: "chicken",
      limit: '4-5 PAX'
    },


    /* Aditionall */
    /* Starter */
    {
      recipeName: 'crispy kangkong',
      price: 225,
      image: crispyKangkong,
      category: "beef",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'fried tawilis',
      price: 385,
      image: friedTawilis,
      category: "beef",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'crunchy mushroom',
      price: 270,
      image: crunchyMushoom,
      category: "starter",
      limit: '3-5 PAX'
    },

    {
      recipeName: 'nilasing na hipon',
      price: 460,
      image: nilasingNaHipon,
      category: "beef",
      limit: '4-5 PAX'
    },
    
    {
      recipeName: 'camaron rebosado',
      price: 480,
      image: camaronRebosado,
      category: "beef",
      limit: '3-4 PAX'
    },

    {
      recipeName: 'onion rings',
      price: 270,
      image: onionRings,
      category: "beef",
      limit: '3-4 PAX'
    },
    {
      recipeName: 'calamares',
      price: 380,
      image: calamares,
      category: "beef",
    },
    {
      recipeName: 'beef shanghai',
      price: 290,
      image: beefShanghai,
      category: "beef",
      limit: '3-4 PAX'
    },
    {
      recipeName: 'french fries',
      price: 290,
      image: frenchFries,
      category: "beef",
      limit: '3-4 PAX'
    },

    /* Vegetarian */
    {
      recipeName: 'vegetarian tapa',
      price: 380,
      image: vegetarianTapa,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'sizzling vegelona steak',
      price: 395,
      image: sizzlingVegelonaSteak,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'vegemeat curry',
      price: 395,
      image: vegemeatCurry,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'sizzling tofu',
      price: 395,
      image: sizzlingTofu,
      category: "vegetarian",
      limit: '3-4 PAX'
    },
    {
      recipeName: 'vegetarian tocino',
      price: 380,
      image: vegetarianTocino,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'vegemeat caldereta',
      price: 395,
      image: vegemeatCaldereta,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'tofu curry',
      price: 395,
      image: tofuCurry,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'tofu in tausi',
      price: 395,
      image: tofuInTausi,
      category: "vegetarian",
      limit: '3-5 PAX'
    },
    {
      recipeName: 'vegemeat in mushroom sauce',
      price: 375,
      image: vegemeatInMushroomSauce,
      category: "vegetarian",
      limit: '3-5 PAX'
    },

    /* Chicken */
    {
      recipeName: 'chicken tinola',
      price: 520,
      image: chickenTinola,
      category: "chicken",
      limit: '4-5 PAX'
    },
    {
      recipeName: 'sinigang na manok',
      price: 520,
      image: sinigangNaManok,
      category: "chicken",
      limit: '4-5 PAX'
    },
    {
      recipeName: 'chicken curry',
      price: 550,
      image: chickenCurry,
      category: "chicken",
      limit: '4-5 PAX'
    },
    {
      recipeName: 'bicol express chicken',
      price: 550,
      image: bicolExpressChicken,
      category: "chicken",
      limit: '4-5 PAX'
    },
    {
      recipeName: 'chicken adobo',
      price: 475,
      image: chickenAdobo,
      category: "chicken",
      limit: '4-5 PAX'
    },
    {
      recipeName: 'pineapple chicken',
      price: 550,
      image: pineappleChikcen,
      category: "chicken",
      limit: '4-5 PAX'
    },
  ]