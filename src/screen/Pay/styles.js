import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
  margin-top: 50px;
  
`;

export const Input = styled.TextInput`
  background-color: rgba(255,255,255,0.8);
  border: 1px solid lightgray;
  border-radius: 50px;
  width: 320px;
  padding: 2px 16px;
  color: #000;
`;

export const TransationContainer = styled.View`
  margin: 0 15px;
  
`;

export const TransationHeader = styled.View`
  height: 30px;
  justify-content:flex-end;
  
`;

export const TransationTitle = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;