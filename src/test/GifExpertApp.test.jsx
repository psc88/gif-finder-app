const { render, screen } = require("@testing-library/react")
const { GifExpertApp } = require("../GifExpertApp")

describe('Pruebas en el componente GifExpertApp', () => {
    test('', () => {

        render( <GifExpertApp />);
        screen.debug();

    })
})