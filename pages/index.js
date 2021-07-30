import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Lottie from 'react-lottie'
import worldAnimation from './world.json'
import coracaoAnimation from './lovestruck-heart.json'
import yoga from './62773-yoga-developer.json'
import loveAnime from './heart-animation.json'
import explosionAnimation from './lf30_editor_lexpv6gw.json'
import { useEffect, useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('')
  const [page, setPage] = useState(0)
  const [time, setTime] = useState(0)
  useEffect(() => {
    page === 5 &&
      setTimeout(() => {
        setPage(6)
      }, 2000);
    page === 1 &&
      setTimeout(() => {
        confirm("Ahhh! Quer que toque uma música?");
        alert('Na verdade não tem música não, acho meio brega em site kkkk')
      }, 3000);
  }, [page])

  const buttonClick = () => {
    if (input == 'liberdade') {
      alert('Boa! Permissão concedida! 🔓')
      setPage(1)
    } else if (input == 'amor') {
      alert('Não era bem essa, mas amor também é muito importante, ta liberado! 🔓')
      setPage(1)
    } else {
      time !== 2 && setTime(time + 1)
      if (time === 2) {
        alert(`Não foi dessa vez amor, mas vou te liberar igual! 🔓`)
        setPage(1)
      }
      else { alert(`Ops! Não é essa, tenta mais uma vez!\nTem mais ${2 - time} tentativas`) }
    }
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: yoga,
  };
  const world = {
    loop: true,
    autoplay: true,
    animationData: worldAnimation,
  };
  const heart = {
    loop: true,
    autoplay: true,
    animationData: coracaoAnimation,
  };
  const explosion = {
    loop: false,
    autoplay: true,
    animationData: explosionAnimation,
  };
  const love = {
    loop: true,
    autoplay: true,
    animationData: loveAnime,
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {page === 0 ?
        <main style={{ alignContent: 'center', height: '100vh' }}>
          <Header title="Bom diaaa baby!!" />
          <p style={{ maxWidth: '80vw', textAlign: "justify" }} >
            Pra ser um pouco mais privado, esse momento do carinho está bloqueado com uma senha. 🔑🔐<br></br><br></br>
            A senha é uma palavra, que na minha percepção é a única coisa que o ser humano precisa ter nesse universo.
          </p>
          <input value={input} onChange={(data) => setInput(data.target.value.toLocaleLowerCase().replace(/\s/g, ''))} ></input>
          <button style={{ marginTop: 20 }} onClick={buttonClick}>Entrar</button>

          {/* <button style={buttonStyle} onClick={() => setIsStopped(true)}>stop</button>
          <button style={buttonStyle} onClick={() => setIsStopped(false)}>play</button>
          <button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>pause</button> */}
        </main>
        :
        page < 4 ?
          <main style={{ alignContent: 'center', maxHeight: '60vh' }}>
            {page === 1 &&
              <>
                <p style={{ maxWidth: '80vw', textAlign: "justify" }} >
                  Há três anos atrás eu resolvi te pedir em namoro de uma forma diferente, que realmente demonstrasse
                  o tipo de pessoa que eu era. Afinal, eu estava te pedindo em namoro, tu precisava entender como eu era pra conseguir
                  tomar tua decisão.
                </p>
                <p style={{ maxWidth: '80vw', textAlign: "justify" }} >
                  Então hoje eu resolvi reforçar isso e fazer um momento do carinho interativo! 💃<br></br>
                </p>
              </>
            }
            {page === 2 &&
              <>
                <p style={{ maxWidth: '80vw', textAlign: "justify" }} >
                  {input == 'liberdade' ? 'Talvez tu esteja se perguntando, mas por que liberdade?' : input == 'amor' ? 'Talvez tu esteja se perguntando, qual era essa bendita senha que não é amor?' : 'Talvez tu esteja se perguntando, qual era essa bendita senha?'}
                </p>
                <p style={{ maxWidth: '80vw', textAlign: "justify" }} >
                  <strong>Liberdade:</strong> Liberdade não é fazer o que quiser no momento que quiser, pra mim isso é irresponsabilidade.
                  Liberdade no sentido literal significa o direito de agir segundo o seu livre arbítrio,
                  de acordo com a própria
                  vontade, desde que não prejudique outra pessoa, é a sensação de estar livre e não depender de ninguém.
                  E o mais importante, é ser livre de qualquer sentimento maléfico, ser livre de dependências, de apego, ser livre do medo.
                  Liberdade é ser vulnerável.
                  <br></br>A liberdade é um sentimento, então fica mais fácil sentir do que entender.

                </p>
              </>
            }
            {page === 3 &&
              <>
                <p style={{ maxWidth: '80vw', textAlign: "justify" }} >
                  E é exatamente assim que eu me sinto contigo.
                  Me sinto livre, livre em poder ser quem eu sou, livre pra poder dar meu melhor
                  todo o dia por saber que eu tenho uma pessoa incrível ao meu lado, que em qualquer momento de
                  dificuldade, eu sei que estará por perto pra me amparar.
                </p>
                <p style={{ maxWidth: '80vw', textAlign: "justify" }} >
                  Não menos importante, liberdade em entender que tudo na vida é passageiro.
                  Momentos são passageiros, pessoas são passageiras, nossa vida é passageira.
                </p>
              </>
            }
            {page < 5 &&
              <div style={{
                flexDirection: 'row',
              }}>
                {page >= 0 &&
                  <button button style={{ marginRight: 20 }} onClick={() => setPage(page - 1)}>Voltar</button>}
                <button onClick={() => setPage(page + 1)}>Próxima</button>
              </div>}
          </main>
          : <main style={{ alignContent: 'center', height: '100vh' }}>
            {page === 4 &&
              <>
                <p style={{ maxWidth: '80vw', textAlign: "justify" }} >
                  E é por isso que o que eu mais desejo nesses três anos de namoro é que tu sinta tudo isso também e que
                  enquanto eu puder fazer tu se sentir essa LIBERDADE eu possa continuar ao teu lado por muito tempo.
                  <br></br>
                  <br></br>
                  Muito tempo é relativo, mas é aquele tempo que eu conheço por vida, nesse plano.
                </p>
              </>
            }
            {page < 5 &&
              <div style={{
                flexDirection: 'row',
              }}>
                {page >= 0 &&
                  <button button style={{ marginRight: 20 }} onClick={() => setPage(page - 1)}>Voltar</button>}
                <button onClick={() => setPage(page + 1)}>Próxima</button>
              </div>}
            {page === 5 &&
              <>
                <p style={{ maxWidth: '80vw', textAlign: "justify" }} >
                  Tudo é efêmero, esse momento também...
                </p>
              </>
            }
            {page === 7 &&
              <>
                <strong>
                  <p style={{ maxWidth: '80vw', textAlign: "center", fontSize: '3rem' }} >
                    Feliz 3 anos!
                    <br></br>
                  </p>
                  <p style={{ maxWidth: '80vw', textAlign: "center", fontSize: '3.3rem' }} >
                    Amo tu demais! ❤
                    <br></br>
                  </p>
                </strong>
                <button onClick={() => { window.open('https://api.whatsapp.com/send?phone=5554999622927&text=Oii%20meu%20amor!') }}>Chamar o meu amor lindo no WhatsApp 😂</button>
              </>
            }
            {
              page === 6 &&
              <Lottie options={explosion}
                width={'100vw'}
                height={'100vh'}
                eventListeners={[
                  {
                    eventName: 'complete',
                    callback: () => setPage(7),
                  },
                ]}

              />
            }</main>
      }
      {
        page === 1 &&
        <Lottie options={defaultOptions}
          height={'40vh'}
          width={'100vw'}

        />
      }
      {
        page === 2 &&
        <Lottie options={world}
          height={'40vh'}
          width={'100vw'}

        />
      }
      {
        page === 3 &&
        <Lottie options={heart}
          height={'40vh'}
          width={'100vw'}

        />
      }

    </div >
  )
}
