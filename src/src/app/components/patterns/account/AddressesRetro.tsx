/**
 * AddressesRetro
 *
 * "PlayPocket" FSE theme - Account Address Book sub-page.
 * Manages saved shipping/billing addresses with add/edit modal.
 * WCAG AA 2.2 compliant.
 *
 * Rendered inside AccountLayoutRetro <Outlet />.
 */

import { useState, type FormEvent } from 'react';
import { MapPin, Plus, PencilSimple, Trash, X } from '@phosphor-icons/react';
import { SAVED_ADDRESSES } from '../../../data/newPages';
import { toast } from 'sonner@2.0.3';

interface Address {
  id: string;
  label: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
}

export const AddressesRetro = () => {
  const [addresses, setAddresses] = useState<Address[]>(SAVED_ADDRESSES);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter((a) => a.id !== id));
    toast.success('Address deleted!', { duration: 2000 });
  };

  const handleSetDefault = (id: string) => {
    setAddresses(
      addresses.map((a) => ({
        ...a,
        isDefault: a.id === id,
      }))
    );
    toast.success('Default address updated!', { duration: 2000 });
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setShowForm(false);
    setEditId(null);
    toast.success(editId ? 'Address updated!' : 'Address added!', { duration: 2000 });
  };

  return (
    <div>
      <div className="retro-page-shell__header">
        <MapPin size={28} weight="bold" aria-hidden="true" />
        <h2 className="retro-font-display retro-bold retro-page-shell__title">
          SAVE FILES (ADDRESSES)
        </h2>
      </div>

      <div className="retro-addresses__grid">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`retro-addresses__card ${addr.isDefault ? 'retro-addresses__card--default' : ''}`}
          >
            {addr.isDefault && (
              <span className="retro-font-display retro-bold retro-addresses__default-badge">
                DEFAULT
              </span>
            )}
            <h3 className="retro-font-display retro-bold retro-addresses__card-label">
              {addr.label}
            </h3>
            <p className="retro-font-body retro-addresses__card-line">{addr.name}</p>
            <p className="retro-font-body retro-addresses__card-line">{addr.street}</p>
            <p className="retro-font-body retro-addresses__card-line">
              {addr.city}, {addr.state} {addr.zip}
            </p>
            <p className="retro-font-body retro-addresses__card-line">{addr.country}</p>

            <div className="retro-addresses__card-actions">
              <button
                onClick={() => {
                  setEditId(addr.id);
                  setShowForm(true);
                }}
                className="retro-btn retro-btn--secondary retro-font-display retro-bold"
                aria-label={`Edit ${addr.label}`}
              >
                <PencilSimple size={14} weight="bold" /> EDIT
              </button>
              {!addr.isDefault && (
                <>
                  <button
                    onClick={() => handleSetDefault(addr.id)}
                    className="retro-btn retro-btn--secondary retro-font-display retro-bold"
                    aria-label={`Set ${addr.label} as default`}
                  >
                    SET DEFAULT
                  </button>
                  <button
                    onClick={() => handleDelete(addr.id)}
                    className="retro-btn retro-btn--secondary retro-font-display retro-bold"
                    aria-label={`Delete ${addr.label}`}
                  >
                    <Trash size={14} weight="bold" />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <button
          onClick={() => {
            setEditId(null);
            setShowForm(true);
          }}
          className="retro-addresses__add-card"
          aria-label="Add new address"
        >
          <Plus size={32} weight="bold" className="retro-addresses__add-icon" />
          <span className="retro-font-display retro-bold retro-addresses__add-label">ADD NEW</span>
        </button>
      </div>

      {/* Address Form Modal */}
      {showForm && (
        <div
          className="retro-addresses__form-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={editId ? 'Edit address' : 'Add new address'}
        >
          <div className="retro-addresses__form-card">
            <div className="retro-addresses__form-header">
              <h3 className="retro-font-display retro-bold retro-addresses__form-title">
                {editId ? 'EDIT SAVE FILE' : 'NEW SAVE FILE'}
              </h3>
              <button
                onClick={() => { setShowForm(false); setEditId(null); }}
                className="retro-addresses__form-close"
                aria-label="Close"
              >
                <X size={24} weight="bold" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="retro-addresses__form-body">
              <div className="retro-addresses__form-field">
                <label htmlFor="addr-label" className="retro-font-display retro-bold retro-register__label">
                  LABEL
                </label>
                <input id="addr-label" type="text" required className="retro-input retro-font-body" placeholder="HOME BASE" />
              </div>
              <div className="retro-addresses__form-field">
                <label htmlFor="addr-name" className="retro-font-display retro-bold retro-register__label">
                  FULL NAME
                </label>
                <input id="addr-name" type="text" required className="retro-input retro-font-body" placeholder="Player One" />
              </div>
              <div className="retro-addresses__form-field">
                <label htmlFor="addr-street" className="retro-font-display retro-bold retro-register__label">
                  STREET ADDRESS
                </label>
                <input id="addr-street" type="text" required className="retro-input retro-font-body" placeholder="742 Pixel Lane" />
              </div>
              <div className="retro-addresses__form-row">
                <div className="retro-addresses__form-field">
                  <label htmlFor="addr-city" className="retro-font-display retro-bold retro-register__label">
                    CITY
                  </label>
                  <input id="addr-city" type="text" required className="retro-input retro-font-body" placeholder="Brooklyn" />
                </div>
                <div className="retro-addresses__form-field">
                  <label htmlFor="addr-state" className="retro-font-display retro-bold retro-register__label">
                    STATE
                  </label>
                  <input id="addr-state" type="text" required className="retro-input retro-font-body" placeholder="NY" />
                </div>
              </div>
              <div className="retro-addresses__form-row">
                <div className="retro-addresses__form-field">
                  <label htmlFor="addr-zip" className="retro-font-display retro-bold retro-register__label">
                    ZIP CODE
                  </label>
                  <input id="addr-zip" type="text" required className="retro-input retro-font-body" placeholder="11201" />
                </div>
                <div className="retro-addresses__form-field">
                  <label htmlFor="addr-country" className="retro-font-display retro-bold retro-register__label">
                    COUNTRY
                  </label>
                  <input id="addr-country" type="text" required className="retro-input retro-font-body" placeholder="United States" />
                </div>
              </div>
              <div className="retro-addresses__form-actions">
                <button type="submit" className="retro-btn retro-btn--primary retro-font-display retro-bold">
                  {editId ? 'SAVE CHANGES' : 'ADD ADDRESS'}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setEditId(null); }}
                  className="retro-btn retro-btn--secondary retro-font-display retro-bold"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

AddressesRetro.displayName = 'AddressesRetro';
