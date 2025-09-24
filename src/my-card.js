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
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display:inline-block;
      }
      :host([fancy]) .card{
        background-color: var(--my-card-fancy-bg, lightblue);
      }
      :host([fancy]) {
        border: 2px solid white;
        box-shadow: 10px 5px 5px red;
        max-width: 400px;
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
      .paragraph{
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
       details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

    details[open] summary {
      font-weight: bold;
    }
  
    details div {
      border: 2px solid black;
      text-align: left;
      padding: 8px;
      height: 70px;
      overflow: auto;
    }
    .slot{
      overflow: auto;
      height: 100px;
    }
    `;
  }

  render() {
      return html`
      <div class="card">
        <h1 class="heading">${this.title}</h1>
        
        <img class="img" src="${this.img}" alt="" />
        <div class="description">
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div class="slot">
            <slot>${this.description}</slot>
            </div>
          </details>

          <a href="https://hax.psu.edu/" target="_blank">
          <button class = "button">Details</button>
          </a>
        </div>
      </div>
    `;
  }

  openChanged(event){
    console.log(event.target);
    this.fancy = event.target.open;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
