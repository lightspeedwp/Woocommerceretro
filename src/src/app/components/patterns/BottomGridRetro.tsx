/**
 * BottomGridRetro
 *
 * Bottom section composing PowerUpSection and BestSellersBox side by side.
 *
 * **Styling:** BEM (.pp-bottom-grid__*)
 */

import React from 'react';
import { PowerUpSection } from './PowerUpSection';
import { BestSellersBox } from './BestSellersBox';

export const BottomGridRetro = () => {
  return (
    <div className="pp-bottom-grid">
      <PowerUpSection />
      <BestSellersBox />
    </div>
  );
};

BottomGridRetro.displayName = 'BottomGridRetro';
