import styled from 'styled-components'


export const MainDiv = styled.div`
  background-color: #e2e4e1;
  padding-bottom: 100px;
`

export const TopNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #364147;
  color: white;
  margin: 0 19%;
  height: 50px;
  section {
    display: flex;
    align-items: center;
    span {
      padding-left: 20px;
      font-size: 35px;
    };
    a {
      padding-left: 10px;
      font-size: 15px;
    };
  };
  input {
    background-color: #2a3138;
    color: white;
    outline: 0;
    border: none;
    font-size: 15px;
    padding-left: 20px;
  }
`

export const HeadTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  margin: 3% 20% 0 20%;
  padding-bottom: 1%;
  span {
    cursor: pointer;
    font-size: 30px;
  }
`

export const ListVehicles = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1% 0 0 0;
  
`

export const LIListVehicles = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.background ? props.background : "white"};
    align-items: center;
      
    padding: 5px 25px 5px 7px;
    margin-bottom: 10px;
    section {
      span {
        color: gray;
      };
      a {
        color: #1D7555};
      }
    };
    div {
      span {
        color: ${props => props.cor ? props.cor : "black"};
      }
    }
`

export const VehicleInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 20px;
  
  div {
    display: flex;
    margin: 2px 0 0 0;
    padding: 10px 20px 10px 10px;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f2f0;
    button {
      width: 120px;
      height: 40px;
      background-color: #45535A;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      span {
        padding-left: 8px;
        font-size: 20px;
        
      };
      a {
        padding: 4px 0 0 8px;
      };
    };
  };
  section {
    background-color: #f1f2f0;
    padding: 0 2%;
    p {
      color: #4C8D74;
    }
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  margin: 0 20%;
`
export const DetailsInfo = styled.a`
  display: grid;
  grid-template-columns: 1fr 1fr;
  span {
    color: gray;
  }
`

export const TitleDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  margin: 0 20%;
`

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
`