import { el } from './utils';

const Cell = ({ ship, type, index, click, context }) => {

  return ship ? (
    <div class="cell ship" data-index={index}>{type}</div>
  ) : (
    <div class="cell" data-index={index} onClick={click}></div>
  );
}

export default Cell;