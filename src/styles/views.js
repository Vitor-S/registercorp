import { styled } from 'styled-components'

export const LoginStyled = styled.div`
    background-color: #5c6ffa;

    main{
        width: 100vw;
        display: flex;
        justify-content:center;
        align-items: center;
        height: 100vh;

        form{
            display: flex;
            flex-direction: column;
            padding: 2vh 3vh;
            width: max(300px, 20vw);
            height: max(350px, 35vh);
            -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
            justify-content: space-around;
            background-color: #fff;

            #welcome{
                font-size: 1.5rem;
                text-align: center;
            }

            #input-picture{
                display: none;
            }

            #label-picture{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2%;
                width: 100%;
                height: 54px;
                border-radius: 4px;

                font-family: "Roboto","Helvetica","Arial",sans-serif;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 1.4375em;
                letter-spacing: 0.00938em;
                color: #666666;
                border: 1px solid #c4c4c4;

                &:hover{
                    cursor: pointer;
                    color: #424242;
                    border: 1px solid #424242;
                }
            }

            button{
                height: 50px;
            }

            span{
                text-align:center;

                a{
                    color: blue;
                    text-decoration: underline;
                }
            }

        }
    }
`

export const HomeStyled = styled.div`
    background-color: #5c6ffa;

    main{
        /* background-color: lightcoral; */
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: calc(100vh - 80px);

        div{
            width: 50%;
            gap: 2vw;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }

        button{
            display: flex;
            justify-content: space-evenly;
            width: max(250px, 18vw);
            height: 50px;
            font-size: max(15px, 1.2vw);
            color: #fff;
            border: 1px solid #fff;
            
            &:hover{
                border: 1px solid #fff;
            }
        }
    }

    @media (max-width: 600px) {
        main{
            flex-direction: column;

            button{
                font-size: max(15px, 3vw);
            }
        }
    }
`

export const CreateStyled = styled.div`
    background-color: #5c6ffa;

    main{
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: calc(100vh - 80px);
        
        form{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 10fr 1fr;
            gap: 2vw;

            button{
                grid-column: span 3;
                font-weight: bold;
                /* transform: translateX(.7%); */
            }

            .form-division{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 1.5vw;
                width: max(210px, 22vw);
                height: max(380px, 55vh);
                background-color: #fff;
                justify-content: space-around;

                -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
                box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);

                textarea{
                    width: 90%;
                    height: 22%;
                    padding: .85vw;
                    font-size: max(16px, 1.1vw);

                    &::placeholder {
                        font-size: max(16px, 1vw);
                    }
                }
            }
        }
    }
    
`

export const ProductsStyled = styled.div`
    background-color: #5c6ffa;

    main{
        display: flex;
        flex-direction: column;
        padding: 20px 50px;
        gap: 2vh;
        height: calc(100vh - 120px);
    
    }

    @media (max-width: 400px) {
        main{
            align-items: center;
        }
    }
`

export const ViewStyled = styled.div`
    background-color: #5c6ffa;

    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100px;

        nav{
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1{
                color: #fff;
            }
        }

        svg{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: max(30px, 2.5vw);
            color: #fff;
        }
    }

    main{
        height: calc(100vh - 100px);

        header{
            height: auto;
                
            button{
                width: 50%;
                height: 100%;
                border-radius: 0;
                color: #fff;
                font-size: max(20px, 1.3vw);
            }
        }

        #pre-production{
            display: flex;
            width: 100%;
            height: calc(100vh - 195px);

            div{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;

                div{
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    width: 60%;
                    height: 80%;

                    textarea{
                        width: 95%;
                        height: 95%;
                        padding: 15px;
                        font-size: max(16px, 1.2vw);
                        
                    }
                }
            }
        }

        #production {
            width: 100%;
            height: calc(100vh - 195px);
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(5, 1fr);
            justify-items: center;
            align-items: center;
            padding: 20px 0;
        }
    }
`

export const CreateDStyled = styled.div`

    main{
        display: flex;
        flex-direction: column;
        background-color: #5c6ffa;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 80px);

        section{
            width: 80%;
            height: 70%;
            display: flex;
            justify-content: center;

            #division{
                height: 90%;
                width: 40%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                
                #tags-container{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    padding: 15px;
                    height: min(500px, 70%);
                    width: 80%;
                    overflow-y: scroll;
                    scrollbar-width: thin;

                    &::-webkit-scrollbar {
                        width: 10px;
                    }

                    &::-webkit-scrollbar-track {
                        background: #dedfe0;
                        border-radius: 20px;
                    }

                    &::-webkit-scrollbar-thumb {
                        width: 50px;
                        background-color: #8692d1;
                        border-radius: 20px;
                        border: 1px solid #dedfe0;
                    }
                }

                h1{
                    color: #fff;
                }

            }
        }

        button{
            padding: 15px 50px;
            font-weight: bold;
        }
    }
`

export const HistoryStyled = styled.div`
    background-color: #5c6ffa;

    main{
        display: flex;
        flex-direction: column;
        height: calc(100vh - 80px);

        header{
            width: 100%;
            display: flex;
            justify-content: space-around;

            h2{
                color: #fff;
            }
        }

        section{
            display: flex;
            height: calc(100vh - 195px);
            padding: 20px;

            #history{
                overflow-y: scroll;
            }

            div{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 50%;
                gap: 10px;

                #history-info{
                    text-align: center;
                    border: 1px solid #fff;
                    width: 40%;
                    padding: 20px 0;
                    color: #fff;
                }

                span{
                    color: #fff;
                    font-style: italic;
                }
                
                li{
                    font-style: italic;
                    font-size: 22px;
                }

                button{
                    width: 50%;
                    border-color: #fff;
                    color: #fff;
                    transition: ease-out .1s;
                    
                    &:hover{
                        border-color: #fff;
                        opacity: 0.8;
                        scale: 1.03;
                    }
                }
            }
        }
    }
`