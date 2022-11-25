import React from 'react'
import { HeroCards } from '../components/HeroCards';
import { getHeroesByPublisher } from '../helpers'

export const Hero = ({publisher}) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
          heroes.map( heroe => (
              
                <HeroCards
                  key={heroe.id}{...heroe}
                />
              
            ))
        }
      </div>
    </>
    )
}
