import BotaoAdicionar from "../../components/BotaoAdicionar";
import BarraLateral from "../../container/Barra";
import ListaDeTarefas from "../../container/ListaDeContatos";

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
