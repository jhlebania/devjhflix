import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria () {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue (chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    {/*console.log('[nomeDaCategoria]', nomeDaCategoria);
  console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);*/}
    //setNomeDaCategoria(infosDoEvento.target.value);
    const { getAttribute, value } = infosDoEvento.target;
    setValue( 
    getAttribute('name'),
    value
    );
}
 
  return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
      
        <form onSubmit={function handleSubnit(infosDoEvento){
            infosDoEvento.preventDefault();
            {/*console.log('Você tenteu enviar o form, ok?')*/}
            setCategorias([
              ...categorias,
              values
            ]);

            setValues(valoresIniciais)
        }}>
          {/*  State */}

            <FormField 
              label="Nome da Categoria"
              type="text" 
              name="nome"
              value={values.nome}
              onChange={handleChange}
            />
            
            <FormField
              label="Descrição"
              type="text" 
              name="descricao"
              value={values.descrcao}
              onChange={handleChange}
            />
            {/*<div>
              <label>
                  Descrição:
                  <textarea
                      type="text"
                      value={values.descricao}
                      name="descricao"
                      onChange={handleChange}
                  />
              </label>
            </div>*/}

            <FormField
              label="Cor"
              type="color" 
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
            {/*<div>
              <label>
                  Cor:
                  <input
                      type="color"
                      value={values.cor}
                      name="cor"
                      onChange={handleChange}
                  />
              </label>
            </div>*/}

            <button>
                Cadastrar
            </button>
        </form>
        {/* para Printar na tela*/}
        <ul> 
          {categorias.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
          })}
        </ul>
        <Link to='/'>
          Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;