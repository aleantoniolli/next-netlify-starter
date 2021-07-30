import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Lottie from 'react-lottie'
import * as animationData from './world.json'
import { useState } from 'react'

export default function Home() {
  const [isStopped, setIsStopped] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [input, setInput] = useState('')
  // const buttonStyle = {
  //   display: 'block',
  //   margin: '10px auto'
  // };
  const [permition, setPermition] = useState(false)
  const buttonClick = () => {
    const senha = input.toLocaleLowerCase().replace(/\s/g, '')
    if (senha == 'liberdade') {
      alert('permissão concedida')
      setPermition(true)
    } else if (senha == 'amor') {
      alert('Não era bem essa, mas amor também é muito importante, ta liberado!')
      setPermition(true)
    } else {
      alert('ops, tenta de novo')
    }
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <main style={{ alignContent: 'center' }}>
        <Header title="Boooom dia amor!!" />
        <p style={{ maxWidth: '80vw' }} >
          Feliz 3 anos!
          Pra ser um pouco mais privado esse momento do carinho, ele está bloqueado com senha.
          A senha pra ter acesso é uma palavra, que ao meu ver é a única coisa que o ser humano precisa nesse universo.
        </p>
        <input value={input} onChange={(data) => setInput(data.target.value)} ></input>
        <button onClick={buttonClick}>Entrar</button>
        <Lottie options={defaultOptions}
          height={400}
          width={'100vw'}
          isStopped={isStopped}
          isPaused={isPaused} />
        {/* <button style={buttonStyle} onClick={() => setIsStopped(true)}>stop</button>
          <button style={buttonStyle} onClick={() => setIsStopped(false)}>play</button>
          <button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>pause</button> */}
      </main>
    </div >
  )
}
