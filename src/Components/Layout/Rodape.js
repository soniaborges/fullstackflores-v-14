import './Card.css'

function Rodape (){

    return(

        <div>
            <div className="pagamento">
                <p > Formas de Pagamento </p>
                <img src={require('../Layout/imagens/pagamento.JPG').default} 
                 alt=""/>
                <p > &copy; Fullstack Flores </p>
                <p > &copy; {new Date ().getFullYear()} imagens e direitos reservados para uso de aprendizagem sem fins comerciais</p>
            </div>
        </div>

      

    );
}

export default Rodape;