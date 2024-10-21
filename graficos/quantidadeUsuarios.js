import {getCSS, tickConfig} from "./common.js"

async function quantidadeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--secondary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'redes sociais com mais usuários no mundo',
            x: 0.5,
            font: {
                color: getCSS('--secondary-color'),
                family: getCSS('--font'),
                size: 25
            }
        },
        xaxis:{
            tickfont: {
                color: getCSS('--secondary-color'),
                size: 15,
                family: getCSS('--font')
            },
            title: {
                text: 'nome das redes sociais',
                font: {
                    color: getCSS ('--secondary-color'),
                    family: getCSS ('--font')
                }
            }
        },
        yaxis:{
            tickfont: {
                color: getCSS('--secondary-color'),
                size: 15,
                family: getCSS('--font')
            },
            title: {
                text: 'bbolhões de usuários ativos',
                font: {
                    color: getCSS ('--secondary-color'),
                    family: getCSS ('--font')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuarios()