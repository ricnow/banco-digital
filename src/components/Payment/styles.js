import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
}))`
    margin-top: 25px;
    height: 100px;
`;
export const Option = styled.TouchableOpacity`
    
    width: 100px;
    height: 90px;
    border-radius: 8px;
    padding: 15px;
    justify-content: space-between;
    margin-right: 5px;
    border: 1px solid lightgray;
    box-shadow: 0 4px -2px #989898;
    
`;
export const Label = styled.Text`
    margin-top: 10px;
    color: #000;
    font-size: 14px;
    
`; 
