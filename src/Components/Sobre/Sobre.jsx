import React from 'react'
import styles from './Sobre.module.css'

const Sobre = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>Transformando Cuidado em Experiência Digital</h1>
        <div className={styles.info_paragrafo}>
          <p>
            Bem-vindo a DoseSegura, sua ferramenta dedicada para um controle eficiente e seguro de medicamentos residenciais. Essa aplicação foi
            desenvolvida com o propósito de simplificar e aprimorar a gestão de medicamentos para você e sua família, garantindo que o cuidado com a
            saúde seja tão tranquilo quanto possível.
          </p>
          <p>Controle Personalizado:</p>
          <p>
            No DoseSegura, cada membro da sua família pode ter seu perfil individual, permitindo um controle personalizado de medicamentos. Ao
            realizar um cadastro simples com nome, email e senha, você terá acesso a um ambiente seguro e intuitivo para gerenciar as prescrições de
            cada dependente.
          </p>
          <p>Datas e Horários Precisos:</p>
          <p>
            Nossa aplicação permite que você programe datas e horários específicos para a administração de cada medicamento. Receba lembretes
            automáticos para garantir que nenhuma dose seja esquecida, promovendo a adesão ao tratamento de forma consistente.
          </p>
          <p>Histórico Detalhado:</p>
          <p>
            Tenha acesso ao histórico completo de medicamentos para cada pessoa cadastrada. Visualize informações sobre datas de fabricação, dosagens
            anteriores e qualquer alteração no plano de tratamento ao longo do tempo. Isso não apenas facilita o acompanhamento, mas também auxilia
            profissionais de saúde em futuras consultas.
          </p>
          <p>Cadastro Simples e Gratuito:</p>
          <p>
            O DoseSegura é acessível a todos. O cadastro para utilizar a aplicação é gratuito e descomplicado, exigindo apenas informações essenciais,
            como nome, email e senha. Valorizamos a segurança dos seus dados, garantindo que todas as informações coletadas sejam tratadas com a
            máxima confidencialidade e proteção.
          </p>
          <p>Segurança em Primeiro Lugar:</p>
          <p>
            Entendemos a importância dos dados de saúde. Por isso, implementamos medidas de segurança robustas para proteger suas informações. Pode
            confiar: seu cuidado está em mãos seguras com o DoseSegura.
          </p>
          <p>
            Explore a facilidade e a segurança do DoseSegura agora mesmo. Transforme a gestão de medicamentos em uma experiência digital eficiente e
            livre de preocupações. Cuide da sua saúde e da sua família de maneira inteligente e personalizada com o DoseSegura.
          </p>
        </div>
      </main>
    </>
  )
}

export default Sobre
