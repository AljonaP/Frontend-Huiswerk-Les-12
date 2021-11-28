import React, {useState} from 'react';
import './App.css';
import logo from "./assets/screenshot-logo.png";
import Article from "./components/Article";
import InputField from "./components/InputField";

function App() {
    const [strawberryQty, setStrawberryQty] = React.useState(0)
    const [bananaQty, setBananaQty] = React.useState(0)
    const [appleQty, setAppleQty] = React.useState(0)
    const [kiwiQty, setKiwiQty] = React.useState(0)

    const [firstName, setFirstName] = React.useState('')
    const [surname, setSurname] = React.useState('')
    const [age, setAge] = React.useState('')
    const [postalCode, setPostalCode] = React.useState('')
    const [deliveryFrequency, setDeliveryFrequency] = React.useState()
    const [deliveryTime, setDeliveryTime] = React.useState()

    const [messageValue, setMessageValue] = React.useState('')

    const [checkedTerms, toggleCheckedTerms] = React.useState(false)
    const [clicked, toggleClicked] = React.useState(false)

    function resetButtonFunction (){
        setStrawberryQty (0)
        setBananaQty (0)
        setAppleQty (0)
        setKiwiQty (0)
    }

    function changeAge(e) {
        e.preventDefault()
        if(e.target.value >=0) {
            setAge(e.target.value)
        }
    }

    function handleClick(e) {
        e.preventDefault()
        toggleClicked(!clicked)
        console.log(`
        Voornaam: ${firstName}
        Achternaam: ${surname}
        Leeftijd: ${age}
        Postcode: ${postalCode}
        Bezorgfrequentie: ${deliveryFrequency} 
        Bezorgmoment: ${deliveryTime} 
        Opmerking: ${messageValue}
        Checkbox: ${checkedTerms}     
                
`)

        console.log(`Fruitmand bestelling - aardbeien: ${strawberryQty}, bananen: ${bananaQty}, apples: ${appleQty}, kiwi: ${kiwiQty}`)
    }

  return (
      <div>
          <h1>Fruitmand bezorgservice</h1>
          <img src={logo} alt="logo van het bedrijf"/>

          <Article text="Aardbeien" emoji="🍓" type="button" disabled={strawberryQty === 0} fruitQty={strawberryQty}
                   setFruitQty={setStrawberryQty}/>
          <Article text="Bananen" emoji="🍌" type="button" disabled={bananaQty === 0} fruitQty={bananaQty}
                   setFruitQty={setBananaQty}/>
          <Article text="Appels" emoji="🍏" type="button" disabled={appleQty === 0} fruitQty={appleQty}
                   setFruitQty={setAppleQty}/>
          <Article text="Kiwi's" emoji="🥝" type="button" disabled={kiwiQty === 0} fruitQty={kiwiQty}
                   setFruitQty={setKiwiQty}/>
          <button type="button" className="reset-button" onClick={() => resetButtonFunction()}>Reset</button>


          <form onSubmit={handleClick}>

              <InputField type="text" id="fname" name="Voornaam" value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}/>

              <InputField type="text" id="lname" name="Achternaam" value={surname}
                          onChange={(e) => setSurname(e.target.value)}/>

              <InputField type="number" id="age" name="Leeftijd" value={age} onChange={changeAge}/>

              <InputField type="type" id="postcode" name="Postcode" value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}/>


              <label htmlFor="delivery-frequency">Bezorgfrequentie
                  <select id="delivery-frequency" name="delivery-frequency" value={deliveryFrequency} onChange={(e)=>setDeliveryFrequency(e.target.value)}>
                      <option value="every-week">iedere week</option>
                      <option value="once-in-two-weeks">om de week</option>
                      <option value="once-a-month">iedere maand</option>
                  </select>
              </label>
              <span>
                  <input type="radio" id="radio-field1" name="radio-field-set" value="overdag" onClick={(e)=>setDeliveryTime(e.target.value)}/>
                  <label htmlFor="radio-field1">Overdag</label>

                  <input type="radio" id="radio-field2" name="radio-field-set" value="'s Avonds" onClick={(e)=>setDeliveryTime(e.target.value)}/>
                  <label htmlFor="radio-field2">'s Avonds</label>
              </span>

              <label htmlFor="comment">Opmerking</label>
              <input type="text" name="comment" id="input-for-comments"
                     className={messageValue.length > 500 ? 'input-error' : 'input-normal'} value={messageValue}
                     onChange={(e) => setMessageValue(e.target.value)}/>
              {messageValue.length > 500 && <p className="error-message">Dit bericht is te lang!</p>}

              <input type="checkbox" name="terms-and-conditions" id="terms-and-conditions" checked={checkedTerms}
                         onChange={() => toggleCheckedTerms(!checkedTerms)}/>
              Ik ga akkoord met de voorwaarden
              <button type="submit" className="send-button">Verzend</button>
          </form>


      </div>
  );
}

export default App;
