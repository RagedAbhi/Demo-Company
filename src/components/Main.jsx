import React from 'react'
import Card from './parts/Card'
import { motion } from "framer-motion"

let cardFill = [
  {
    "image": 1,
    "cate": "LIFESTYLE",
    "main": "Changing people's lifestyles for the better"
  },
  {
    "image": 2,
    "cate": "TECHNOLOGY",
    "main": "Simple Solutions for Complex Connections"
  },
  {
    "image": 3,
    "cate": "SPORT",
    "main": "All things are difficult before they are easy"
  },
  {
    "image": 4,
    "cate": "EDUCATION",
    "main": "How to Memorize everything you read?"
  },
  {
    "image": 1,
    "cate": "LIFESTYLE",
    "main": "Changing people's lifestyles for the better"
  },
  {
    "image": 2,
    "cate": "TECHNOLOGY",
    "main": "Simple Solutions for Complex Connections"
  },
  {
    "image": 3,
    "cate": "SPORT",
    "main": "All things are difficult before they are easy"
  },
  {
    "image": 4,
    "cate": "EDUCATION",
    "main": "How to Memorize everything you read?"
  }
]

const Main = () => {

  return (
    <div className="mainpage">
      <motion.div className="categories" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration: 1.5, delay: 0.5}}>
        <ul>
          <li id="all">All</li>
          <li>Technology</li>
          <li>Education</li>
          <li>Lifestyle</li>
          <li>Healthcare</li>
          <li>Sport</li>
          <li>Food</li>
        </ul>
      </motion.div>
      <motion.div className="cards" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1}}>
        {cardFill.map((element) => {
          return (<Card image={element.image} cate={element.cate} main={element.main} />)
        })}

      </motion.div>
    </div>
  )
}

export default Main
