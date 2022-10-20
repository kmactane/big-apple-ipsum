import React, { useState, useEffect, ChangeEvent } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {generateLipsum} from '../lib/lipsum'

const Home: NextPage = () => {
  const [lipsum, setLipsum] = useState(<div id="lipsum">Lorem ipsum dolor sit amet.</div>)
  
  const [howMany, setHowMany] = useState(3)
  const [whatUnits, setWhatUnits] = useState("sentences")
  
  const handleHowMany = (evt: ChangeEvent<HTMLInputElement>) => {
    setHowMany(parseInt(evt.target.value))
  }
  
  const handleWhatUnits = (evt: ChangeEvent<HTMLInputElement>) => {
    setWhatUnits(evt.target.value)
  }
  
  const regenerate = () => {
    setLipsum(generateLipsum(howMany, whatUnits))
  }
  
  useEffect(() => {
    setLipsum(generateLipsum(howMany, whatUnits))
  }, [])
  
  useEffect(() => {
    setLipsum(generateLipsum(howMany, whatUnits))
  }, [howMany, whatUnits])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Big Apple Ipsum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 data-testid="h1" className={styles.title}>
          Big Apple Ipsum
        </h1>

        <section>
          <p>&ldquo;Lorem Ipsum&rdquo; is dummy text you can use when building layouts and mockups<span className={styles.mUp}>, so you can look at how the text flows rather than what it says</span>. This site&rsquo;s Lorem Ipsum comes with some special New York City flair.</p>
        </section>
        
        <section>
          <p>
            Generate{' '}
            <label htmlFor="howMany" className={styles.srOnly}>how many</label>
            <input type="number" min="1" max="9" name="howMany" id="howMany" value={howMany} onChange={handleHowMany} />
            <br />
            <label htmlFor="sentences"><input type="radio" name="whatUnits" id="sentences" value="sentences" onChange={handleWhatUnits} checked={whatUnits === "sentences"} />sentences</label><br />
            <label htmlFor="paragraphs"><input type="radio" name="whatUnits" id="paragraphs" value="paragraphs" onChange={handleWhatUnits} />paragraphs</label>
            <br />
            of Big Apple Ipsum.
          </p>
          <p>
            <button onClick={regenerate}>Regenerate</button>
          </p>
          {lipsum}
        </section>
      </main>

      <footer className={styles.footer}>
        Made with ❤ in the best borough. 🗽
      </footer>
    </div>
  )
}

export default Home
