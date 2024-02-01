import React from 'react'
import styles from './Cadastro.module.css'
import Label from '../Forms/Input'
import Button from '../Forms/Button'
import { Link } from 'react-router-dom'

const UsuarioCadastro = () => {
  const [mostrarModal, setMostrarModal] = React.useState(false)

  const handleTermo = () => {
    const modal = document.querySelector('#modalTermo')

    modal.addEventListener('click', (e) => {
      if (e.target.id === 'modalTermo' || e.target.id === 'fechar') {
        setMostrarModal(false)
      }
    })
    setMostrarModal(true)
  }
  return (
    <>
      <main className={styles.main}>
        <h1>Bem vindo(a) a DoseSegura</h1>
        <div className={styles.box}>
          <h2>Cadastrar-se</h2>
          <p>Tenha acesso ao sistema de controle de medicamento</p>
          <form className={styles.form}>
            <Label name="nome" placeholder="Informe seu nome" type="text" className={styles.nome} />
            <Label name="email" placeholder="@email.com" type="email" className={styles.email} />
            <Label name="password" placeholder="Senha" type="password" className={styles.password} />
            <div className={styles.button}>
              <Button>ENVIAR</Button>
            </div>
            <div className={styles.termo}>
              <label htmlFor="check" className={styles.check}>
                <input type="checkbox" id="check" /> LI E ACEITO O <span onClick={handleTermo}>TERMO</span>
              </label>
              <p>
                JÁ TEM UMA CONTA?
                <span>
                  <Link to="/login">ENTRE</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </main>
      <div id="modalTermo" className={mostrarModal ? `${styles.modalContainer} ${styles.mostrar}` : `${styles.modalContainer}`}>
        <div className={styles.modal}>
          <button id="fechar" className={styles.fechar}>
            X
          </button>
          <h2>Aviso de Responsabilidade e Termos de Uso do DoseSegura</h2>
          <div className={styles.termo}>
            <p>
              O DoseSegura é uma ferramenta projetada para auxiliar no controle e gerenciamento de medicamentos residenciais, oferecendo praticidade e
              organização. No entanto, é crucial compreender que a responsabilidade pelo uso adequado dos medicamentos permanece inteiramente com o
              usuário.
            </p>
            <p>Responsabilidade do Usuário:</p>
            <p>
              Ao utilizar o DoseSegura, os usuários concordam que são integralmente responsáveis pelo controle, administração e acompanhamento de
              todos os medicamentos cadastrados na aplicação. O DoseSegura não assume qualquer responsabilidade pelo uso dos medicamentos, incluindo
              dosagens, horários ou interações medicamentosas.
            </p>
            <p>Armazenamento de Informações:</p>
            <p>
              A função principal do DoseSegura é armazenar as informações cadastradas pelo usuário, incluindo dados sobre medicamentos, datas de
              fabricação, horários de administração e histórico de consumo. A aplicação não realiza a gestão física dos medicamentos, apenas oferece
              suporte digital para organização e lembretes.
            </p>
            <p>Auxílio no Controle:</p>
            <p>
              O DoseSegura proporciona uma plataforma para facilitar o controle de medicamentos, enviando lembretes e mantendo um histórico detalhado.
              Todavia, não substitui a orientação de profissionais de saúde nem fornece aconselhamento médico. Recomenda-se consultar um profissional
              de saúde para orientações específicas sobre tratamentos e medicamentos.
            </p>
            <p>Notificação de Lembretes:</p>
            <p>
              A DoseSegura fornece um serviço de notificação para lembrar os usuários sobre datas e horários específicos de administração de
              medicamentos. No entanto, não garantimos a entrega ininterrupta ou livre de erros dessas notificações. A DoseSegura não se
              responsabiliza por notificações não entregues devido a falhas técnicas, problemas de conectividade, configurações individuais do
              dispositivo do usuário ou quaisquer outros eventos imprevistos. Os usuários são incentivados a verificar regularmente a aplicação para
              garantir o cumprimento dos horários de administração de medicamentos.
            </p>
            <p>
              Ao utilizar o DoseSegura, o usuário reconhece e concorda com os termos desta responsabilidade compartilhada. Para uma gestão segura e
              eficaz dos medicamentos, é imperativo que os usuários sigam as orientações médicas e estejam cientes das suas responsabilidades
              individuais.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsuarioCadastro
