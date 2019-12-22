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

.battery-low {
  width: 50px;
  height: 14px;
  background: rgb(218, 99, 20);
}

.battery-medium {
  width: 50px;
  height: 14px;
  background: rgb(199, 241, 82);
}

.battery-high {
  width: 60px;
  height: 14px;
  background: rgb(42, 223, 81);
}

.battery-container {
  display: inline-block;
  width: 180px;
  height: 30px;
  border-color: #606160;
  border-style: solid;
  border-width: medium;
  font-size: 14px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}`;
