import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'The discipline of design is a blend of practicality and aspiration. Designers are always trying to make something more useful, and also more beautiful, than it was before. Beauty is a key ingredient in life, and too many people forget that.Your home is the one space in the world that you’re allowed to curate totally for yourself. customers are the #1 decider, and the #1 priority. ',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'We’ve all seen those showroom posts on Instagram, where it looks like the furniture has never been used. Who are these people?! In real life, furniture should be a daily part of your life. If you’re not using in, then why is it there? No need to rush off and tell your Grandma to get rid of the fancy couches that no one is allowed to sit on. ',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'It’s not entirely by accident. For instance, in the fast food industry, primary colors are used in the interiors of restaurants to encourage people to eat faster and move out quicker, increasing their bottom line. but they usually just come off as outdated and ignored. When we can consciously use design as a tool to shape culture, we can achieve powerful things.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
