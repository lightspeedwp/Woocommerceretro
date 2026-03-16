import React, { useEffect } from 'react';
import { X } from '../../utils/phosphor-compat';
import { SearchAutocomplete } from '../blocks/search/SearchAutocomplete';

/**
 * SearchOverlay Component (Block)
 * Full-screen search overlay for mobile devices.
 */

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) { onClose(); }
    };
    document.addEventListener('keydown', handleEscape);
    return () => { document.removeEventListener('keydown', handleEscape); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="wp-search-overlay__backdrop" onClick={onClose} />
      <div className="wp-search-overlay__container">
        <div className="wp-search-overlay__content">
          <div className="wp-search-overlay__header">
            <h2 className="wp-search-overlay__title">Search Products</h2>
            <button onClick={onClose} aria-label="Close search" className="wp-search-overlay__close">
              <X size={24} />
            </button>
          </div>
          <div className="wp-search-overlay__body">
            <SearchAutocomplete
              placeholder="What are you looking for?"
              autoFocus={true}
              onSearch={() => onClose()}
            />
          </div>
        </div>
      </div>
    </>
  );
}