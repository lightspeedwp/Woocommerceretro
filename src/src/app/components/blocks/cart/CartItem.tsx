import { Trash as Trash2, Heart } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { QuantitySelector } from '../forms/QuantitySelector';

interface CartItemData {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variant?: string;
  inStock?: boolean;
  maxQuantity?: number;
}

interface CartItemProps {
  item: CartItemData;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onMoveToWishlist?: (id: string) => void;
  className?: string;
}

/**
 * CartItem Component
 *
 * Individual cart line item with quantity controls and actions.
 */
export const CartItem = ({
  item,
  onUpdateQuantity,
  onRemove,
  onMoveToWishlist,
  className = '',
}: CartItemProps) => {
  const itemTotal = item.price * item.quantity;

  return (
    <div className={`woocommerce-cart-item funky-cart-item ${className}`}>
      <Link to={`/product/${item.slug}`} className="woocommerce-cart-item__image-link">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="woocommerce-cart-item__image funky-cart-image"
          loading="lazy"
        />
      </Link>
      <div className="woocommerce-cart-item__details">
        <div className="woocommerce-cart-item__header">
          <Link to={`/product/${item.slug}`} className="woocommerce-cart-item__name funky-cart-name">
            {item.name}
          </Link>
          <button
            onClick={() => onRemove(item.id)}
            className="woocommerce-cart-item__remove funky-remove-btn"
            aria-label={`Remove ${item.name}`}
          >
            <Trash2 className="woocommerce-cart-item__remove-icon" />
          </button>
        </div>
        {item.variant && (
          <p className="woocommerce-cart-item__variant">{item.variant}</p>
        )}
        <div className="woocommerce-cart-item__meta">
          <span className="woocommerce-cart-item__price">{`$${item.price.toFixed(2)}`}</span>
          {item.inStock
            ? <span className="woocommerce-cart-item__stock woocommerce-cart-item__stock--in">In Stock</span>
            : <span className="woocommerce-cart-item__stock woocommerce-cart-item__stock--out">Out of Stock</span>
          }
        </div>
      </div>
      <div className="woocommerce-cart-item__actions">
        <QuantitySelector
          value={item.quantity}
          onChange={(newQuantity: number) => onUpdateQuantity(item.id, newQuantity)}
          min={1}
          max={item.maxQuantity || 99}
          disabled={!item.inStock}
          className="funky-quantity"
        />
        <div className="woocommerce-cart-item__total">
          <span className="woocommerce-cart-item__total-label">Total:</span>
          <span className="woocommerce-cart-item__total-price funky-total-price">
            {`$${itemTotal.toFixed(2)}`}
          </span>
        </div>
        {onMoveToWishlist && (
          <button
            onClick={() => onMoveToWishlist(item.id)}
            className="woocommerce-cart-item__wishlist funky-wishlist-btn"
            aria-label="Move to wishlist"
          >
            <Heart className="woocommerce-cart-item__wishlist-icon" />
            Save for later
          </button>
        )}
      </div>
    </div>
  );
};

CartItem.displayName = 'CartItem';
