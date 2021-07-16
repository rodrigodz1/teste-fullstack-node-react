import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'

let API = process.env.localAPI

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(80, 80, 80, 0.9);
  display: flex;
  position: fixed;
`

const ModalWrapper = styled.div`
  width: 100%;
  height: 525px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  position: relative;
  background: #e2e4e1;
  margin: 5% 27% 20% 27%;
  padding: 0 20px 0 20px;
  p {
    font-size: 30px;
  };
  input {
    background: #e2e4e1;
    outline: 0;
    border: none;
    border-bottom: 1px solid;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  span {
    color: #4C8D74;
  }
  label {
    display: flex;
    flex-direction: column;
    a {
      padding-left: 10px;
    };
  };
  textarea {
    resize: none;
    background: #e2e4e1;
    outline: 0;
    border: none;
    border-bottom: 1px solid;
    font-family: "Arial";
    font-size: 13.3px;
  };
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    input {
      border: none;
      margin-bottom: 45px;
      height: 30px;
      outline: 0;
    border: none;
    border-bottom: 1px solid;
    };
    a {
      display: flex;
      input {
        width: 30px;
      }
      span {
        color: gray;
        margin: 2px 0 0 15px;
      };
    };
    
  };
  input {
    height: 150px;
  };
  div {
    display: flex;
    justify-content: flex-end;
    button {
      width: 120px;
      height: 40px;
      margin: 32px 0 0 10px;
      background-color: #45535A;
      color: white;
      cursor: pointer;
    }
  }

`

export const CheckBoxWrapper = styled.a`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const Modal = ({showModal, setShowModal}) => {

  const [veiculo, setVeiculo] = useState("")
  const [marca, setMarca] = useState("")
  const [ano, setAno] = useState(0)
  const [descricao, setDescricao] = useState("")
  const [vendido, setVendido] = useState(false)

  const handleCreateVehicle = (evt) => {
    evt.preventDefault();

    let vehicle = {
        veiculo: veiculo,
        marca: marca,
        descricao: descricao,
        ano: ano,
        vendido: vendido
    }

    axios.post(`${API}/veiculos`, vehicle).then(function (response) {
        console.log(response.data);
        if (response.status === 201) {
          alert("Veículo cadastrado com sucesso!")
          document.location.reload(true);
        }
    }).catch(function (error) {
        alert("Woops... ocorreu um erro.")
        document.location.reload(true);
        console.log("Erro: " + error);
    })

  }

  return showModal ? (
    <Background>
      <ModalWrapper>
      
      <p>Novo Veículo</p>
        <Form onSubmit={handleCreateVehicle}>
        <span>Veículo</span>
          <section>
           
          <input 
            type="text" 
            placeholder="Nome" 
            value={veiculo}
            onChange={e => setVeiculo(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Marca"
            value={marca}
            onChange={e => setMarca(e.target.value)}
          />

          <input 
            type="number" 
            placeholder="Ano"
            value={ano}
            onChange={e => setAno(e.target.value)}
          />

          <CheckBoxWrapper><CheckBox 
            id="checkbox"
            type="checkbox"
            value={vendido}
            onChange={_ => setVendido(!vendido)} 
          />
          <CheckBoxLabel htmlFor="checkbox" />
          <span>Vendido</span></CheckBoxWrapper>
          
          </section>
          <textarea 
            type="text" 
            rows="10"  
            placeholder="Descrição"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
          
          <div>
            <button type="submit">ADD</button>
            <button onClick={() => setShowModal(false)}>FECHAR</button>
          </div>

        </Form>
        
      </ModalWrapper>
      
    </Background>
  ) : null
}