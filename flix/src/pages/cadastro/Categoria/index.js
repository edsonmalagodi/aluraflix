import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria(){

    const [categorias, setNomeDaCategoria] = useState('Teste');
    const valoresInicias={
      nome: '',
      descricao: '',
      cor:'#000',
    }

    const [values, setValues] = useState(valoresInicias);

    function setValue(chave, valor){
      setValues({
        //: nome, descricao
        ...values,
        [chave]: valor, //nome:'valor'
      })
    }

    function handlerChange(infoDoEvento) {//handler tenta caputar o valor do input.. no evento onChange
      
      setNomeDaCategoria(infoDoEvento.target.value);// target é o alvo da açao q ta sendo feito..
      setValue('nome',infoDoEvento.target.getAttribute('name'), 
      infoDoEvento.target.value
      );
     }
    
    useEffect(() =>{
      console.log();
      const URL_TOP = 'http://localhost:8080/categorias';
      fetch(URL_TOP)
      .then(async(respostaDoServidor) =>{
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      })
    },[
       
    ]);
    
    return(
      <PageDefault>
          <h1>Cadastro de categoria: {values.nome} </h1> 

          <FormField onSubmit={function handleSubmit(infoDoEvento){
            infoDoEvento.preventDefault();            
            setNomeDaCategoria([
              ...values,
              categorias
            ]);
          }}> 

          <div>
            <label>
                Nome da Categoria
                <input 
                type="text" 
                name="nome"
                value ={values.nome} //pega o valor do useState
                onChange={handlerChange}
              />
            </label>
            <label>
                Descrição:
                <textarea type="text" 
                value ={values.descricao} //pega o valor do useState
                name="descricao"
                onChange={handlerChange} //handler tenta caputar o valor do input.. no evento onChange
                //console.log('[nomeDaCategoria]', nomeDaCategoria); 
                //console.log('[infoDoEvento]', infoDoEvento.target.value);
                //setNomeDaCategoria(infoDoEvento.target.value);// target é o alvo da açao q ta sendo feito.. 
               
              />
            </label>            
          </div>
          <div>
          <label>
                Cor da Categoria
                <input 
                type="color" 
                value ={values.cor} //pega o valor do useState
                name="cor"
                onChange={handlerChange}//handler tenta caputar o valor do input.. no evento onChange
                
              />
            </label>
          </div>
            <button>
                Cadastrar
            </button>    
          </FormField> 
          
          <ul>          
            {categorias.map((categoria, indice) => {
              return(
              <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )            
            })}
         </ul> 
        
          <Link to="/">
            ir para HOme
          </Link>
      </PageDefault>
    )
    }
  

  export default CadastroCategoria;