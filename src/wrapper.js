import React from 'react'
import Header from './components/header';
import Cards from './components/cards';
import Options from './components/options'

function Wrapper() {
    return (
        <div>
            <Header />
            <div>
              <Cards
               name="ALENA STUDIO"
               profession= "WEB DEVELOPER"
               img="https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200"/>
            </div>
            <Options />
        </div>
    )
}

export default Wrapper
