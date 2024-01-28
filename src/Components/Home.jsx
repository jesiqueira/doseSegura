import React from 'react'
import styles from './Home.module.css'

import fotoHeader from '../Assets/foto_header.jpg'
import estetoscopio from '../Assets/estetoscopio.jpg'
import fruta from '../Assets/frutas.jpg'

const Home = () => {
  return (
    <>
      <div className={styles.imagem}>
        <img src={fotoHeader} alt="imagem logo header sobre medicamento." />
      </div>
      <main className={styles.main}>
        <h1>Vivendo Bem: Dicas Práticas para uma Vida Saudável</h1>
        <div>
          <img src={estetoscopio} alt="foto estetoscópio " />

          <p>
            Realizar consultas médicas periódicas é essencial para preservar a saúde ao longo do tempo, permitindo a detecção precoce de condições
            médicas e proporcionando uma base para a prevenção de doenças.
          </p>
          <p>
            Além de monitorar o estado geral da saúde, essas consultas estabelecem uma relação contínua com profissionais de saúde, possibilitando uma
            abordagem personalizada e a promoção de hábitos de vida saudáveis.
          </p>
          <p>
            Investir nesse comprometimento não apenas fortalece a base para um bem-estar duradouro, mas também representa uma abordagem proativa na
            gestão da saúde, visando uma qualidade de vida mais elevada.
          </p>
        </div>
        <hr />
        <div>
          <p>
            A adoção de uma alimentação saudável é crucial para o bem-estar, fornecendo nutrientes essenciais para a saúde do corpo. No contexto de
            uma dieta equilibrada, o consumo regular de frutas desempenha um papel vital, oferecendo vitaminas, minerais e antioxidantes que previnem
            doenças crônicas.
          </p>
          <p>
            Além dos benefícios físicos, as frutas contribuem para a saúde emocional, promovendo uma sensação de vitalidade e bem-estar mental.
            Complementando essa abordagem, a prática regular de atividade física é igualmente fundamental para manter um estilo de vida saudável.{' '}
          </p>
          <p>
            A combinação de uma alimentação nutritiva com exercícios físicos fortalece não apenas o corpo, mas também melhora a saúde cardiovascular,
            reduz o estresse e promove uma sensação geral de equilíbrio e vitalidade. Portanto, incorporar tanto frutas quanto atividade física
            diariamente estabelece as bases essenciais para uma vida equilibrada e vibrante.
          </p>
          <img src={fruta} alt="Cesto com frutas " />
        </div>
      </main>
    </>
  )
}

export default Home
