import product1 from '../products/Bag Loa.jpeg'
import product2 from '../products/Bolsa búzios.jpeg'
import product3 from '../products/carteira Chèrris.jpeg'

function Home() {
  return (
      <div className="home">
        <div className="section box1">
          <div className='texto'>
          <h2>
          Bem-vindo à Le Macramé.
          </h2>
          <p>
          Na Le Macramé, cada peça é criada com dedicação, talento e um toque especial de tradição. Somos uma pequena empresa familiar apaixonada pela arte do macramê, produzindo artesanalmente peças únicas que valorizam o feito à mão.
          </p>
          </div>
          <img className='imagebox' src={product1} alt="bolsa macrame"></img>
        </div>
        <div className="section box2">
          <img className='imagebox' src={product2} alt="bolsa macrame"></img>
          <div className='texto'>
            <p>
            Nosso compromisso é oferecer produtos que unem beleza, qualidade e exclusividade, transformando fios em verdadeiras obras de arte. Cada detalhe é pensado com carinho para levar aconchego e personalidade ao seu ambiente.
            </p>
          </div>
        </div>
        <div className="section box3">
          <div className='texto'>
            <p>
            Acreditamos no poder do artesanal, na valorização do trabalho manual e na conexão com nossos clientes. Por isso, estamos sempre inovando e aprimorando nossas criações para atender às suas expectativas com peças autênticas e cheias de significado.
            </p>
            <p>
            Sinta-se em casa e descubra o encanto do macramê! ✨
            </p>
            </div>
          <img className='imagebox' src={product3} alt="bolsa macrame"></img>
        </div>
      </div>
  );
}

export default Home;