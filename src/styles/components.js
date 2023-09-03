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
    height: 100px;
    color: #fff;
    padding: 0 3%;
    background-color: #387ca5;

    #logo{
        height: 80%;
    }
`

export const MyButtonStyled = styled.div`
    display: flex;
    gap: 25px;
    
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

        #title, #paper{
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            padding: 0 4%;
        }

        #title{
            background-color: #20435d;
            color: #fff;
        }
        
        #paper{
            background-color: #fff;

            input{
                width: 100%;
                height: 100%;
                padding: 0;
                margin: 0;
                border: none;
                outline: none;
                font-size: max(1rem, 1vw);
            }
        }
    }
    
    #icon{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #20435d;
        font-weight: bold;
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