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

  const [includeLatin, setIncludeLatin] = useState(false)
  const [includeEnglish, setIncludeEnglish] = useState(true)
  const [startLoremIpsum, setStartLoremIpsum]  = useState(false)

  const [disableStartLoremIpsum, setDisableStartLoremIpsum] = useState(true)
  const [disableNoEnglish, setDisableNoEnglish] = useState(true)
  
  const handleHowMany = (evt: ChangeEvent<HTMLInputElement>) => {
    setHowMany(parseInt(evt.target.value))
  }
  
  const handleWhatUnits = (evt: ChangeEvent<HTMLInputElement>) => {
    setWhatUnits(evt.target.value)
  }

  const handleIncludeLatin = (evt: ChangeEvent<HTMLInputElement>) => {
    setIncludeLatin(evt.target.checked)
    setDisableStartLoremIpsum(!evt.target.checked)
    setDisableNoEnglish(!evt.target.checked)
  }
  
  const handleStartLoremIpsum = (evt: ChangeEvent<HTMLInputElement>) => {
    setStartLoremIpsum(evt.target.checked)
  }
  
  const handleNoEnglish = (evt: ChangeEvent<HTMLInputElement>) => {
    setIncludeEnglish(!evt.target.checked)
  }

  const whichLanguages = (): string => {
    return (includeEnglish && includeLatin) ? "both" : includeEnglish ? "english" : "latin"
  }
  
  const regenerate = () => {
    setLipsum(generateLipsum(howMany, whatUnits, whichLanguages(), startLoremIpsum))
  }
  
  useEffect(() => {
    setLipsum(generateLipsum(howMany, whatUnits, whichLanguages(), startLoremIpsum))
  }, [])
  
  useEffect(() => {
    setLipsum(generateLipsum(howMany, whatUnits, whichLanguages(), startLoremIpsum))
  }, [howMany, whatUnits, includeEnglish, includeLatin, startLoremIpsum])
  
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
          <form>
            <div className={`${styles.chunk} ${styles.howMany}`}>
              Generate{' '}
              <label htmlFor="howMany" className={styles.srOnly}>how many</label>
              <input type="number" min="1" max="9" name="howMany" id="howMany" value={howMany} onChange={handleHowMany} />
            </div>
            
            <div className={`${styles.chunk} ${styles.whatUnits}`}>
              <label htmlFor="sentences"><input type="radio" name="whatUnits" id="sentences" value="sentences" onChange={handleWhatUnits} checked={whatUnits === "sentences"} />sentences</label><br />
              <label htmlFor="paragraphs"><input type="radio" name="whatUnits" id="paragraphs" value="paragraphs" onChange={handleWhatUnits} />paragraphs</label>
            </div>
            
            <div className={`${styles.chunk} ${styles.final}`}>
              of Big Apple Ipsum.
            </div>

            <div className={`${styles.chunk} ${styles.newLine}`}>
              <label htmlFor="includeLatin"><input type="checkbox" name="includeLatin" id="includeLatin" onChange={handleIncludeLatin}/>Include Latin</label><br />
              <label htmlFor="startLoremIpsum" className={`${styles.indented}`}><input type="checkbox" name="startLoremIpsum" id="startLoremIpsum" onChange={handleStartLoremIpsum} disabled={disableStartLoremIpsum}/>Start with "Lorem ipsum dolor sit amet..."</label><br />
              <label htmlFor="noEnglish" className={`${styles.indented}`}><input type="checkbox" name="noEnglish" id="noEnglish" onChange={handleNoEnglish} disabled={disableNoEnglish}/>No English (except NYC terms)</label>

            </div>
          </form>
          <p className={styles.regen}>
            <button onClick={regenerate}>Regenerate</button>
          </p>
          {lipsum}
        </section>
      </main>

      <footer className={styles.footer}>
        Made with ❤️ in the best borough. 🗽
      </footer>
    </div>
  )
}

export default Home
