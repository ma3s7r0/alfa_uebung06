import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route} from 'react-router-dom';
import Cart from './Cart';
import Select from './Select';
import Table from './Table';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selA: "-1",
            selB: "-1",
            optionsA: this.data.map((ele) => ele.name),
            optionsB: [],
            cart: []
        }
    }

    data = [
        {
            "name": "Entertainment",
            "gruppe": [
                {
                    "name": "Spiele",
                    "artikel": [
                        {
                            "titel": "Donkey Kong",
                            "jahr": 1981,
                            "publisher": "Nintendo",
                            "preis": 99.99
                        },
                        {
                            "titel": "Pac-Man",
                            "jahr": 1980,
                            "publisher": "Namco",
                            "preis": 99.99
                        },
                        {
                            "titel": "Asteroids",
                            "jahr": 1979,
                            "publisher": "Atari",
                            "preis": 99.99
                        },
                        {
                            "titel": "Space Invaders",
                            "jahr": 1978,
                            "publisher": "Taito",
                            "preis": 99.99
                        },
                        {
                            "titel": "Pong",
                            "jahr": 1972,
                            "publisher": "Atari",
                            "preis": 99.99
                        }
                    ]
                },
                {
                    "name": "Bücher",
                    "artikel": [
                        {
                            "autor": "Stephen King",
                            "titel": "Carrie",
                            "jahr": 1974,
                            "seiten": 199,
                            "verlag": "Doubleday",
                            "preis": 9.99
                        },
                        {
                            "autor": "Stephen King",
                            "titel": "The Shining",
                            "jahr": 1977,
                            "seiten": 447,
                            "verlag": "Doubleday",
                            "preis": 9.99
                        },
                        {
                            "autor": "Stephen King",
                            "titel": "Christine",
                            "jahr": 1983,
                            "seiten": 526,
                            "verlag": "Viking",
                            "preis": 14.99
                        },
                        {
                            "autor": "Stephen King",
                            "titel": "It",
                            "jahr": 1986,
                            "seiten": 1138,
                            "verlag": "Viking",
                            "preis": 19.99
                        },
                        {
                            "autor": "Stephen King",
                            "titel": "Misery",
                            "jahr": 1987,
                            "seiten": 310,
                            "verlag": "Viking",
                            "preis": 9.99
                        },
                        {
                            "autor": "Stephen King",
                            "titel": "Joyland",
                            "jahr": 2013,
                            "seiten": 288,
                            "verlag": "Hard Case Crime",
                            "preis": 9.99
                        }
                    ]
                },
                {
                    "name": "Audio-Books",
                    "artikel": [
                        {
                            "autor": "Stephen King",
                            "titel": "Bag of Bones",
                            "jahr": 2005,
                            "laenge": 240,
                            "verlag": "Simon & Schuster Audio",
                            "preis": 19.99
                        },
                        {
                            "autor": "Stephen King",
                            "titel": "On Writing: A Memoir of the Craft",
                            "jahr": 2000,
                            "laenge": 120,
                            "verlag": "Simon & Schuster Audio",
                            "preis": 19.99
                        },
                        {
                            "autor": "Stephen King",
                            "titel": "Salem's Lot (introduction)",
                            "jahr": 2004,
                            "laenge": 180,
                            "verlag": "Simon & Schuster Audio",
                            "preis": 29.99
                        }
                    ]
                }
            ]
        },
        {
            "name": "Sport",
            "gruppe": [
                {
                    "name": "Schuhe",
                    "artikel": [
                        {
                            "titel": "Air Betonfuß",
                            "hersteller": "Mike",
                            "preis": 149.99
                        },
                        {
                            "titel": "Turtle Light",
                            "hersteller": "attitas",
                            "preis": 129.99
                        },
                        {
                            "titel": "Royal Classic Loser",
                            "hersteller": "Rehbock",
                            "preis": 99.99
                        }
                    ]
                },
                {
                    "name": "Geräte",
                    "artikel": [
                        {
                            "titel": "Hantelset 250g",
                            "beschreibung": "Kurzhantel, 10 Scheiben",
                            "preis": 149.99
                        },
                        {
                            "titel": "Fingerexpander",
                            "beschreibung": "Maximallänge 25cm",
                            "preis": 149.99
                        },
                        {
                            "titel": "Gymnastikball",
                            "beschreibung": "Durchmesser 8,5m",
                            "preis": 149.99
                        }
                    ]
                }
            ]
        }
    ]

    setOptionsB = () => {
        (this.state.selA !== "-1") && (this.setState({
            optionsB: this.data[this.state.selA].gruppe.map((ele) => ele.name),
        }))
        this.setState({selB: "-1"})
    }

    setSelA = (event) => {
        this.setState({
            selA: event.target.value
        }, this.setOptionsB)
    }

    setSelB = (event) => {
        this.setState({
            selB: event.target.value
        })
    }



    /* adds an item to the cart */
    addToCart = (index) => {
        let item = this.data[this.state.selA].gruppe[this.state.selB].artikel[index]
        let newCart = [...this.state.cart]
        newCart.push({
            'Name': item.titel,
            'Preis': item.preis
        })
        this.setState({
            cart: newCart
        })
    }

    /* removes an item from the cart array by the index*/
    removeFromCart = (index) => {
        let newCart = [...this.state.cart]
        newCart.splice(index, 1)
        this.setState({
            cart: [...newCart]
        })
    }

    render() {
        let s = this.state
        return (
            <BrowserRouter>
                <>
                    <header>
                        <h1>Bücher und Mehr</h1>
                    </header>
                    <nav className="clearfix">
                        <NavLink to="/shop"><div>Shop</div></NavLink>
                        <NavLink to="/cart"><div>Warenkorb ({s.cart.length})</div></NavLink>
                    </nav>
                    <main>
                        <Route path="/shop" exact render={() => (<Select    valueA={s.selA} 
                                                                            valueB={s.selB}
                                                                            optionsA={s.optionsA} 
                                                                            optionsB={s.optionsB} 
                                                                            changeA={this.setSelA} 
                                                                            changeB={this.setSelB} />)} />
                        {(s.selA !== "-1" && s.selB !== "-1") &&
                            <Route path="/shop" exact render={() => (
                               <Table   data={this.data[s.selA].gruppe[s.selB].artikel} 
                                        clickFunction={this.addToCart} 
                                        clickText={"Hinzufügen"} />
                            )} />}
                        <Route path="/cart" exact render={() => (
                            <Cart cart={s.cart} clickFunction={this.removeFromCart} clickText={"Entfernen"} />
                        )} />
                    </main>
                </>
            </BrowserRouter>
        );
    }
}

export default Main;