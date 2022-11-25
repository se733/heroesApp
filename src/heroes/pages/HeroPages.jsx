import React from 'react'
import { useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPages = () => {

    const {id} = useParams()

    const hero = getHeroById(id)
    console.log(hero);
  return (
    <div>HeroPages</div>
  )
}
