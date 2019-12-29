import { el } from './utils';

const PlayerGrid = ({}) => {
  const cells = new Array(10)
    .fill(undefined)
    .map((a) => {
      return new Array(10).fill(undefined)
        .map((c) => <div className="cell"></div>)
    });

  return (
    <div className="cells">{ cells.flat() }</div>
  );
}

export default PlayerGrid;