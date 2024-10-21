 const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    tickfont: {
        color: getCSS('--secondary-color'),
        size: 15,
        family: getCSS('--font')
    },
}

export {getCSS, tickConfig}