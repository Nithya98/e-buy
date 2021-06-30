import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about_pic.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            The discipline of design is a blend of practicality and aspiration.
            Designers are always trying to make something more useful, and also
            more beautiful, than it was before. Beauty is a key ingredient in
            life, and too many people forget that. Practicality without beauty
            is just boring! Which makes you more excited to eat dinner, a white
            dining table and a plain white wall, or a gorgeous purple table and
            a large-scale colorful map of the world? You don’t have to make
            dramatic changes to your space to introduce small moments of beauty.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  font-weight: 600;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
    box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.2);
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
    background-color: #d35400;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
