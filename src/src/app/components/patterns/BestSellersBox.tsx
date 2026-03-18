/**
 * BestSellersBox
 *
 * Compact sidebar widget showing top-selling products in a list format.
 * Matches the design reference with dark header and product rows.
 *
 * **Styling:** BEM (.pp-bestsellers__*)
 * **WCAG:** Semantic list, adequate contrast, 44px touch targets
 */

import React from 'react';
import { ArrowRight } from '../../utils/phosphor-compat';
import { Link } from 'react-router';
import { getBestSellers } from '../../data/products';

const imgTote = 'https://images.unsplash.com/photo-1639270557985-f3cb5abd9c72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW52YXMlMjB0b3RlJTIwYmFnJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzM2MDgwMDR8MA&ixlib=rb-4.1.0&q=80&w=400';
const imgMug = 'https://images.unsplash.com/photo-1649715985817-615afa0cdd1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGNlcmFtaWMlMjBtdWclMjBwcm9kdWN0fGVufDF8fHx8MTc3MzYwODAwNHww&ixlib=rb-4.1.0&q=80&w=400';

const fallbackItems = [
  { id: 'bs-1', name: 'POCKET TOTE', price: 22, image: imgTote, slug: 'pocket-tote' },
  { id: 'bs-2', name: 'RETRO MUG', price: 18, image: imgMug, slug: 'retro-mug' },
  { id: 'bs-3', name: 'PIXEL SOCKS', price: 14, image: imgTote, slug: 'pixel-socks' },
  { id: 'bs-4', name: 'GAME POSTER', price: 16, image: imgMug, slug: 'game-poster' },
];

export const BestSellersBox = () => {
  let items: any[];
  try {
    const fetched = getBestSellers(4);
    items = fetched && fetched.length > 0 ? fetched : fallbackItems;
  } catch {
    items = fallbackItems;
  }

  return (
    <aside className="pp-bestsellers" aria-labelledby="bestsellers-heading">
      <div className="pp-bestsellers__header px-[12px] py-[0px]">
        <h2 id="bestsellers-heading" className="pp-bestsellers__title retro-font-display text-[24px]">
          BEST SELLERS
        </h2>
        <Link to="/best-sellers" className="pp-bestsellers__arrow" aria-label="View all best sellers">
          <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
      </div>

      <ul className="pp-bestsellers__list">
        {items.map((item, idx) => {
          const itemPrice = typeof item.price === 'number'
            ? `$${item.price.toFixed(0)}`
            : item.price;
          const itemImg = item.image || item.img || fallbackItems[idx % fallbackItems.length].image;
          const itemName = item.name || `ITEM ${idx + 1}`;

          return (
            <li key={item.id || idx} className="pp-bestsellers__item">
              <Link
                to={`/product/${item.slug || item.id || ''}`}
                className="pp-bestsellers__link"
              >
                <div className="pp-bestsellers__thumb">
                  <img
                    src={itemImg}
                    alt={itemName}
                    className="pp-bestsellers__img"
                    loading="lazy"
                  />
                </div>
                <span className="pp-bestsellers__name retro-font-display">{itemName}</span>
                <span className="pp-bestsellers__price retro-font-display">{itemPrice}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

BestSellersBox.displayName = 'BestSellersBox';