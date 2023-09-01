import { styled } from 'styled-components'

export const StaticHeader = styled.header`
    width: 100vw;
    position: absolute;
    top: 4vh;
    left: 0;
    display: flex;
    justify-content: center;
    font-size: max(35px, 3vw);
    font-weight: bold;
    color: #fff;
    `

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    color: #fff;
    padding: 0 3%;
    background-color: #5c6ffa;
`

export const MyButtonStyled = styled.div`
    display: flex;
    gap: 10px;
    
    #tag{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        min-width: max(150px, 20vw);
        min-height: 60px;
        padding: 3% 0;
        font-weight: bold;
        font-size: max(13px, 1.2vw);
        
        input{
            width: 100%;
            height: 40%;
        }
    }
    
    #icon{
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 50px;
        min-height: 50px;
        cursor: pointer;
    }
`

export const TagStyled = styled.div`
    font-size: 1.4vw;

    #key{
        width: 40%;
        text-align: center;
        font-weight: bold;
    }

    div{
        width: max(200px, 25vw);
        height: max(40px, 4.5vw);
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 15px 20px;
        font-size: max(13px, 1.5vw);
    }
`   