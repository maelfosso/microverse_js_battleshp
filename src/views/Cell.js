import { el } from './utils';

const Cell = ({ context }) => {
  
  // new Array(10)
  //   .fill(undefined)
  //   .map((a) => {
  //     return new Array(10).fill(undefined)
  //       .map((c) => <div className="cell"></div>)
  //   });

  // return ship ? (<div class="cell ship"></div>) : (<div class="cell"></div>);
  // if (!ship) {
  //   return (
  //     <div class="cell"></div>
  //   );
  // } else {
  //   return (
  //     <div class="cell ship"></div>
  //   );
  // }

  return (
    <div class="cell"></div>
  );
}

export default Cell;