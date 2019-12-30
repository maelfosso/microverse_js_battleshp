import Cell from './Cell';
import { el } from './utils';

const Ship = ({ ship, context }) => {
  
  const cells = ship.map((a) => <Cell />)

  return (
    <div className="ship">{ cells }</div>
  )
}

export default Cell;