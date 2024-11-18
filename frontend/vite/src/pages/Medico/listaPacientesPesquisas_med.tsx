
import Navbar from "../../components/Navbar";
import listapesquisa from './listaPacientePesquisas_med.json'
import { Link } from "react-router-dom";
export default function MedListPacientesPesquisas(){
    interface listapesq {
        id: number;
        titulo: string;
    }
    const listapesq:listapesq[] = listapesquisa
    return(
        <>
            <Navbar/>
            <div className='container-page-medico'>
                <div className="funcoes-medico">
                    <h1 className='h1notificacao'>PESQUISAS DISPONÍVEIS</h1>
                    <div className="container-card-medico">
                        <div className="oioi">
                            {listapesq.map((pesquisa) => (
                            <div className="div-dados-pesquisa-medico" key={pesquisa.id}>
                                <div className="div-background">
                                <Link to={`/medico/infoPesquisas?id=${pesquisa.id}`} className="link-to-pesq-med">
                                    <h2 className="h2-card-medico">{pesquisa.titulo}</h2>
                                        <div className='linha-card'>
                                            <p className="p2-card-medico">#00{pesquisa.id}</p>
                                        </div>
<<<<<<< HEAD
                                </Link>
=======
                                <Link to={`/medico/listapesquisainfo?id=${pesquisa.id}`} className="button-to-edit-med"><img className="imgbuttonmed" src="../../../public/seta-direita.png" alt="" /></Link>
>>>>>>> c1677d97efca0575b3325c7c8b6a48e40f8e7ee0
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
