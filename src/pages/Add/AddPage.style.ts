import styled from 'styled-components'

export const AddPageStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  z-index: 1100;
  
`
export const Form = styled.div`
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
`
export const FormItem = styled.div`
  margin-bottom: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const FormItemButton = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  & > * {
    flex-grow: 1;
    
  }
`

export const Spacer = styled.div`
  width: 5px;
  flex-grow: 0;
`

