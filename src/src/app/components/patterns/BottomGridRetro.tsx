import React from 'react';
import { ArrowRight, Coins } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getNewArrivals } from '../../data/products';

interface BottomGridRetroProps {
  miniCards?: any[];
}

/**
 * BottomGridRetro
 *
 * Bottom section of the retro homepage with "You Might Also Like" product cards,
 * rewards box, and newsletter signup.
 *
 * **Styling:** BEM (.retro-mini-card__*, .retro-rewards-row, .retro-button--*) in /src/styles/sections/retro-patterns.css
 * **Shared tokens:** /src/styles/sections/front-page-funky.css
 */
export const BottomGridRetro = ({ miniCards }: BottomGridRetroProps) => {
  const items = miniCards || getNewArrivals(3);

  return (
    <section className="retro-bottom-grid">
      {/* You Might Also Like */}
      <div className="retro-mini-drops">
        <h3 className="retro-mini-drops-header retro-font-display retro-bold">YOU MIGHT ALSO LIKE...</h3>
        <div className="retro-mini-grid">
          {items.map((item, idx) => {
            const itemPrice = typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price;
            const primaryBadge = item.badges?.[0] || item.badge;
            const itemImg = item.image || item.img;

            return (
              <Link key={item.id || idx} to={`/product/${item.id || ''}`} className="retro-mini-card group">
                <div className="retro-mini-img-wrap">
                  <img src={itemImg} className="retro-mini-img" alt={item.name} />
                  {primaryBadge && <span className="retro-card-badge retro-font-display">{primaryBadge}</span>}
                </div>
                <h4 className="retro-font-display retro-bold retro-mini-card__name">{item.name}</h4>
                <div className="retro-font-display retro-bold retro-mini-card__price">{itemPrice}</div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sidebar (Rewards + Signup) */}
      <div className="retro-sidebar">
        {/* Rewards Box */}
        <div className="retro-rewards">
          <h3 className="retro-rewards-header retro-font-display retro-bold">
            LEVEL UP REWARDS <ArrowRight size={16} />
          </h3>
          <div className="retro-rewards-box retro-font-display retro-bold">
            <div className="retro-rewards-row">
              <Coins size={16} weight="fill" /> Earn 295 XP
            </div>
            <div className="retro-rewards-row">
              <ArrowRight size={16} /> You're Level 3!
            </div>
            <div className="retro-rewards-progress">
              <div className="retro-rewards-bar" />
            </div>
          </div>
          <ul className="retro-rewards-list retro-font-body retro-bold">
            <li>&#10045; Opportunity Points</li>
            <li>&#10045; Exclusive Perks</li>
          </ul>
          <button className="retro-button retro-button--fullwidth retro-button--inverted retro-font-display">
            TAKE BATTERY LAUNCHER <ArrowRight />
          </button>
        </div>

        {/* Sign Up Box */}
        <div className="retro-signup">
          <h3 className="retro-signup-title retro-font-display retro-bold">SIGN UP!</h3>
          <p className="retro-signup-desc retro-font-body retro-bold">Get Exclusive Drops + Discounts</p>
          <input type="text" placeholder="Your email" className="retro-input retro-font-display" />
          <button className="retro-button retro-button--fullwidth retro-font-display">
            SIGN UP <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

BottomGridRetro.displayName = 'BottomGridRetro';