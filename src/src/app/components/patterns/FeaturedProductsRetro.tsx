import React from 'react';
import { ArrowRight, Heart } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getFeaturedProducts } from '../../data/products';
import { useCart } from '../../contexts/CartContext';

interface FeaturedProductsRetroProps {
  products?: any[];
  title?: string;
  linkText?: string;
}

export const FeaturedProductsRetro = ({
  products,
  title = 'FEATURED ITEMS <<',
  linkText = 'FRESH + FUN! >',
}: FeaturedProductsRetroProps) => {
  const cartContext = useCart();
  const featured = products || getFeaturedProducts().slice(0, 4);

  return (
    <section>
      <div className="retro-section-header retro-font-display retro-bold" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
        <span>{title}</span>
        <span>{linkText}</span>
      </div>
      <div className="retro-grid">
        {featured.map((item, i) => {
          const primaryBadge = item.badges?.[0] || null;
          const btnClass = primaryBadge ? 'retro-card-btn--yellow' : 'retro-card-btn--white';
          const itemPrice = typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price;
          const itemImg = item.image || item.img;

          return (
            <Link key={item.id || i} to={`/product/${item.id || ''}`} className="retro-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              {primaryBadge && <span className="retro-card-badge retro-font-display">{primaryBadge}</span>}
              <button className="retro-heart-btn" onClick={(ev) => ev.preventDefault()}>
                <Heart size={16} weight="bold" />
              </button>
              <div className="retro-card-img-wrap">
                <img src={itemImg} className="retro-card-img" alt={item.name} />
              </div>
              <h3 className="retro-card-title retro-font-display retro-bold">{item.name}</h3>
              <p className="retro-card-price retro-font-display retro-bold">{itemPrice}</p>
              <button
                className={`retro-card-btn retro-font-display retro-bold ${btnClass}`}
                onClick={(ev) => {
                  ev.preventDefault();
                  cartContext.addToCart(item, 1);
                  alert('Item added to inventory!');
                }}
              >
                ADD TO CART
              </button>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

FeaturedProductsRetro.displayName = 'FeaturedProductsRetro';