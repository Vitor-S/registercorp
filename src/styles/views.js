import { styled } from "styled-components";

export const LoginStyled = styled.div`
    background-color: #8fcde3;

    main {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;

        #logo-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50vw;

            #logo {
                width: 75%;
            }
        }

        #form-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50vw;
            height: 100%;

            form {
                display: flex;
                flex-direction: column;
                padding: 2vh 3vh;
                width: max(300px, 70%);
                height: max(350px, 43%);
                -webkit-box-shadow: 5px 5px 5px 0px rgba(151, 185, 208, 1);
                -moz-box-shadow: 5px 5px 5px 0px rgba(151, 185, 208, 1);
                box-shadow: 5px 5px 5px 0px rgba(151, 185, 208, 1);
                justify-content: space-around;
                background-color: #fff;

                #welcome {
                    font-size: 1.5rem;
                    text-align: center;
                }

                #input-picture {
                    display: none;
                }

                #label-picture {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2%;
                    width: 100%;
                    height: 54px;
                    border-radius: 4px;

                    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                    font-weight: 400;
                    font-size: 1.2rem;
                    line-height: 1.4375em;
                    letter-spacing: 0.00938em;
                    color: #666666;
                    border: 1px solid #c4c4c4;

                    &:hover {
                        cursor: pointer;
                        color: #424242;
                        border: 1px solid #424242;
                    }
                }

                button {
                    background-color: #20435d;
                    height: 50px;
                    font-weight: 500;
                    font-size: 1.1rem;
                    cursor: pointer;
                    color: white;
                }

                span {
                    text-align: center;

                    a {
                        color: blue;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;

export const HomeStyled = styled.div`
    background-color: #a5cae4;

    main {
        /* background-color: lightcoral; */
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: calc(100vh - 100px);

        div {
            width: 50%;
            gap: 2vw;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }

        a {
            display: flex;

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                width: max(250px, 25vw);
                height: 7vh;
                font-size: max(15px, 1.8vw);
                color: #fff;
                background-color: #20435d;
                cursor: pointer;
            }
        }

        #logo-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;

            #logo {
                width: 90%;
            }
        }
    }

    @media (max-width: 600px) {
        main {
            flex-direction: column;

            button {
                font-size: max(15px, 3vw);
            }
        }
    }
`;

export const CreateStyled = styled.div`
    background-color: #a5cae4;

    main {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: calc(100vh - 100px);

        form {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 10fr 1fr;
            gap: 2vw;

            button {
                font-weight: 600;
                font-size: 1.2vw;
                background-color: #20435d;
                color: #fff;
                border: none;
                cursor: pointer;
            }

            .form-division {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 1.5vw;
                width: max(210px, 22vw);
                height: max(380px, 55vh);
                background-color: #fff;
                justify-content: space-around;

                -webkit-box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.4);
                -moz-box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.4);
                box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.4);

                textarea {
                    width: 90%;
                    height: 22%;
                    padding: 0.85vw;
                    font-size: max(16px, 1.1vw);

                    &::placeholder {
                        font-size: max(16px, 1vw);
                    }
                }
            }
        }
    }
`;

export const ProductsStyled = styled.div`
    background-color: #a5cae4;

    main {
        display: flex;
        flex-direction: column;
        padding: 20px 50px;
        gap: 2vh;
        height: calc(100vh - 120px);

        #button {
            background-color: #20435d;
            border: none;
            color: #fff;
            font-size: 1.4vw;
            cursor: pointer;
            font-weight: bold;
        }
    }

    @media (max-width: 400px) {
        main {
            align-items: center;
        }
    }
`;

export const ViewStyled = styled.div`
    background-color: #a5cae4;
    overflow-y: hidden;

    #main-header {
        display: grid;
        grid-template-columns: 1fr 8fr 1fr;
        background-color: #387ca5;
        height: 70px;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #options {
            justify-content: start;
            gap: 20px;

            button {
                width: 20%;
                height: 60%;
                background-color: #20435d;
                border: none;
                color: #fff;
                font-size: 1.1vw;
                cursor: pointer;
            }

            div {
                display: flex;
                justify-content: space-between;
                width: 20%;
                height: 60%;
                font-size: 1.1vw;
                background-color: #20435d;
                user-select: none;

                span {
                    color: #fff;
                }

                svg {
                    font-size: 1.5vw;
                }
            }
        }

        svg {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: max(30px, 2.5vw);
            color: #fff;
        }
    }

    main {
        height: calc(100vh - 70px);

        header {
            height: auto;

            button {
                width: 50%;
                height: 100%;
                border-radius: 0;
                color: #20435d;
                font-size: max(20px, 1.3vw);
            }
        }

        #pre-production {
            display: flex;
            width: 100%;
            height: calc(100vh - 195px);

            div {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;

                div {
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    width: 60%;
                    height: 80%;

                    textarea {
                        width: 95%;
                        height: 95%;
                        padding: 15px;
                        font-size: max(16px, 1.2vw);
                    }
                }
            }
        }

        #production {
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 0.6fr;
            gap: 1%;
            padding: 15px;

            .column{
                height: 80%;
                display: grid;
                grid-template-rows: repeat(6, 1fr);
                gap: 20px;

                .share{
                    display: flex;
                    justify-content: space-around;
                    gap: 20px;
                }
            }
        }
    }
`;

export const CreateDStyled = styled.div`
    main {
        display: flex;
        flex-direction: column;
        background-color: #a5cae4;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 100px);

        section {
            width: 80%;
            height: 70%;
            display: flex;
            justify-content: center;

            #division {
                height: 90%;
                width: 40%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;

                #tags-container {
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

                h1 {
                    display: flex;
                    justify-content: center;
                    width: 65%;
                    padding: 2%;
                    color: #fff;
                    background-color: #20435d;
                    transform: translateX(-8.1%);
                }
            }
        }

        button {
            padding: 15px 50px;
            font-weight: 500;
            border: none;
            background-color: #20435d;
            color: #fff;
            cursor: pointer;
            font-size: 1.2vw;
        }
    }
`;

export const HistoryStyled = styled.div`
    background-color: #a5cae4;

    main {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 100px);

        header {
            width: 100%;
            display: flex;
            justify-content: space-around;

            h2 {
                display: flex;
                justify-content: center;
                padding: 0.5% 0;
                width: 20%;
                color: #fff;
                background-color: #20435d;
            }
        }

        section {
            display: flex;
            height: calc(100vh - 195px);
            padding: 20px;

            #history {
                overflow-y: scroll;
                align-items: center;

                #Demand {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;

                    #demand-button {
                        background-color: #20435d;
                        padding: 3% 0%;
                        width: 80%;
                        font-size: 1vw;
                        border: none;
                        cursor: pointer;
                    }

                    #icon-button {
                        width: max(5%, 40px);
                        width: 1/1;
                    }
                }
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 50%;
                gap: 10px;

                #history-info {
                    text-align: center;
                    border: 1px solid #20435d;
                    width: 40%;
                    padding: 20px 0;
                    color: #20435d;
                }

                span {
                    color: #20435d;
                    font-style: italic;
                }

                li {
                    font-style: italic;
                    font-size: 22px;
                }

                button {
                    width: 50%;
                    border-color: #fff;
                    color: #fff;
                    transition: ease-out 0.1s;
                }
            }
        }
    }
`;
