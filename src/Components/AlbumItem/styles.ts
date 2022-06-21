import  styled  from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
    height:170px;
    text-align:center;
`;

export const Imagem = styled.img`
    width: 160px;
    height: 170px;
    background-color: #666666;

`;




export const Title = styled.h3`
    font-size: var(--fontMedium);
    color: var(--secondary);
    margin: 10px;
    
    `;

export const Description = styled.h4`
    display: flex;
    font-size: var(--fontSmall);
    color: var(--terceary);


    `;