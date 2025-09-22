import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.img = "#";
    this.description = "This is the description of the photo."
    this.bgColor = "pink";
  }

  static get styles() {
    return css`
      :host {
        display:inline-block;
      }
      .card.yellow{
        background-color: yellow;
      }

      .card{
        background-color: pink;
        max-width: 400px;
        padding: 16px;
        border: 4px solid black;
      }
      .heading{
        text-align: center;
        word-wrap: break-word;
      }
      .p{
        font-size: 12px;
        text-align: left;
        width: 75%; 
        margin-left: auto;
        margin-right: auto;
      }
      .button{
        border-radius: 10px;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
      .button:hover {
        background-color: #04AA6D;
        color: white;
    }

      .img{
        margin-left: auto;
        margin-right: auto;
        max-width: 300px;
        display: flex;           /* use flexbox */
        justify-content: center; /* centers horizontally */
      }
      .img img {
        max-width: 100%;   /* makes sure it fits container */
        height: auto;      /* keeps proportions */
        display: block;    /* removes weird inline gaps */
      }
    `;
  }

  render() {
      return html`
      <div class="card" style="background-color: ${this.bgColor || 'pink'}">
        <h1 class="heading">${this.title}</h1>
        
        <img class="img" src="${this.img}" alt="${this.title}" />
        <div class="description">
          <p class="p">${this.description}</p>
          <a href="https://hax.psu.edu/" target="_blank">
          <button class = "button">Details</button>
          </a>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      description: { type: String },
      bgColor: { type: String } ,
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
