import product1 from '../products/Bag Loa.jpeg'
import product2 from '../products/Bolsa búzios.jpeg'
import product3 from '../products/carteira Chèrris.jpeg'

function Home() {
  return (
      <div className="home">
        <div className="section box1">
          <p>
            Nossa plataforma foi criada para oferecer a melhor experiência aos usuários, garantindo acessibilidade, desempenho e usabilidade intuitiva. Desenvolvida com tecnologias modernas, buscamos sempre otimizar cada aspecto da interface e da experiência do usuário. Nosso compromisso é fornecer um ambiente seguro, responsivo e eficiente para atender às suas necessidades diárias.
            Ao utilizar nossos serviços, você tem acesso a uma série de funcionalidades inovadoras, projetadas para facilitar sua vida. Desde o cadastro intuitivo até a personalização do seu perfil, cada detalhe foi pensado para proporcionar praticidade. Além disso, nossa equipe trabalha continuamente para aprimorar cada recurso com base no feedback dos usuários, garantindo constantes melhorias e novas funcionalidades.
          </p>
          <img className='imagebox' src={product1} alt="bolsa macrame"></img>
        </div>
        <div className="section box2">
        <img className='imagebox' src={product2} alt="bolsa macrame"></img>
          <p>
            A segurança é uma de nossas maiores prioridades. Implementamos os mais avançados protocolos de proteção para garantir que seus dados estejam sempre seguros. Nossa infraestrutura é constantemente monitorada e atualizada para prevenir qualquer tipo de vulnerabilidade. Além disso, nossos sistemas contam com autenticação robusta, impedindo acessos não autorizados e garantindo que apenas você tenha controle sobre suas informações.
            Outro grande diferencial da nossa plataforma é a flexibilidade. Seja você um usuário iniciante ou avançado, encontrará ferramentas adaptáveis às suas necessidades. Contamos com uma interface amigável e personalizável, permitindo que você ajuste as configurações conforme sua preferência. Dessa forma, você pode criar um ambiente de navegação que melhor atenda às suas expectativas e demandas do dia a dia.
          </p>
        </div>
        <div className="section box3">
          <p>
            Estamos sempre em busca de inovação. Nossa equipe de desenvolvimento trabalha ativamente na implementação de novas tecnologias, buscando trazer as melhores soluções do mercado para você. O compromisso com a inovação nos impulsiona a evoluir constantemente, garantindo que nossa plataforma esteja sempre à frente e oferecendo as melhores experiências para nossos usuários.
            Se você tiver qualquer dúvida ou sugestão, nossa equipe de suporte está sempre pronta para ajudar. Entre em contato conosco e teremos o maior prazer em auxiliá-lo. Agradecemos por fazer parte da nossa comunidade e esperamos que sua experiência seja incrível!
          </p>
          <img className='imagebox' src={product3} alt="bolsa macrame"></img>
        </div>
      </div>

    // <div>
    //   <h2>Página Inicial</h2>
    //   <p>Este é um projeto de um E-commerce feito em REACT</p>
    //   <p>Os produtos estão armazenados no template Products.js</p>
    //   <p>Para iniciar o react usar o comando -- npm start --</p>
    //   <p>Para iniciar o node usar o comando -- node server.js --</p>
    //   <p>Os contatos enviados são salvos no JSON submissions.json</p>
    //   <p>username === 'usuario' && password === 'senha'</p>
    // </div>
  );
}

export default Home;