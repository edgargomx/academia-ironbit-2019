import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end ;
  align-items: flex-end;
}`;
