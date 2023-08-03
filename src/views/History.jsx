import React, { useEffect, useState } from 'react'

import { HistoryStyled } from '../styles/views'
import Header from '../components/Header';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../service/config'

import { Button } from '@mui/material';

export default function History() {

    const [history, setHistory] = useState([])
    const [activeHistory, setActiveHistory] = useState(null)

    useEffect(() => {
        (async () => {
            const q = query(collection(db, "History"));
            const querySnapshot = await getDocs(q);

            let results = [];

            querySnapshot.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() });
                console.log(doc.data().datetime);
            });

            // Ordenar os resultados pelo atributo "datetime"
            results.sort((a, b) => {
                // Assumindo que o atributo "datetime" é um objeto com as propriedades "seconds" e "nanoseconds"
                const datetimeA = new Date(a.datetime.seconds * 1000 + a.datetime.nanoseconds / 1000000);
                const datetimeB = new Date(b.datetime.seconds * 1000 + b.datetime.nanoseconds / 1000000);

                return datetimeA - datetimeB;
            });

            setHistory(results);
        })();
    }, []);

    return (
        <HistoryStyled>
            <Header />
            <main>
                <header>
                    <h2 style={{ transform: 'translateX(25%)' }}>Histórico</h2>
                    <h2>Produtos</h2>
                </header>
                <section>
                    <div id="history">
                        {
                            history && history.map(demand => {
                                const date = new Date(demand.datetime.seconds * 1000)

                                const opcoes = {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit'
                                };

                                // Criando um objeto de formatação de data para o Brasil (pt-BR)
                                const formatadorData = new Intl.DateTimeFormat('pt-BR', opcoes);

                                // Convertendo a data para o padrão brasileiro
                                const dataFormatada = formatadorData.format(date);

                                return (
                                    <Button variant="outlined" color='secondary' onClick={() => setActiveHistory(demand)}>
                                        {dataFormatada}
                                    </Button>
                                )
                            })
                        }
                    </div>
                    <div>
                        <div id="history-info">
                            {
                                activeHistory ?
                                    <>
                                        {
                                            activeHistory.products.map(prod => <li>{prod.modelo}</li>)
                                        }
                                    </>: <span>Escolha uma Demanda do Histórico</span>
                                    
                            }
                        </div>
                    </div>
                </section>
            </main>
        </HistoryStyled>
    )
}
