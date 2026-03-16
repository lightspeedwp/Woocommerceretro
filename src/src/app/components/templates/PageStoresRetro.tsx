/**
 * PageStoresRetro
 *
 * "PlayPocket" FSE theme - Store Locator page.
 * WCAG AA 2.2 compliant.
 */

import { MapPin, Phone, Clock } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
}

const stores: Store[] = [
  {
    id: 1,
    name: 'NEO-TOKYO PLAZA',
    address: 'Sector 4, Level 99\nNeo-Tokyo, JP 100-0001',
    phone: '+81-00-1111-2222',
    hours: 'MON-SUN: 10:00 - 22:00',
  },
  {
    id: 2,
    name: 'ARCADE AVENUE',
    address: '128 Bit Lane\nNew York, NY 10012',
    phone: '1-800-PLAY-NOW',
    hours: 'MON-SAT: 11:00 - 20:00\nSUN: 12:00 - 18:00',
  },
  {
    id: 3,
    name: 'PIXEL MARKET',
    address: '64 Cartridge Rd.\nLondon, UK E1 6AN',
    phone: '+44-20-7946-0958',
    hours: 'MON-FRI: 09:00 - 19:00\nSAT-SUN: CLOSED',
  },
];

export const PageStoresRetro = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-stores-layout">
          <div className="retro-stores-layout__inner">
            <div className="retro-stores-layout__header">
              <MapPin size={64} weight="fill" color="var(--color-ink)" className="retro-stores-layout__icon" />
              <h1 className="retro-font-display retro-bold retro-stores-layout__title">STORE LOCATOR</h1>
              <p className="retro-font-body retro-stores-layout__subtitle">Find an item shop near you.</p>
            </div>

            <div className="retro-stores-layout__grid">
              {stores.map((store) => (
                <div key={store.id} className="retro-stores-layout__card">
                  <h2 className="retro-font-display retro-bold retro-stores-layout__card-name">{store.name}</h2>

                  <div className="retro-stores-layout__card-row">
                    <MapPin size={24} weight="fill" color="var(--color-ink)" className="retro-stores-layout__card-icon" />
                    <p className="retro-font-body retro-stores-layout__card-text retro-stores-layout__card-text--pre">{store.address}</p>
                  </div>

                  <div className="retro-stores-layout__card-row">
                    <Phone size={24} weight="fill" color="var(--color-ink)" className="retro-stores-layout__card-icon" />
                    <p className="retro-font-body retro-stores-layout__card-text">{store.phone}</p>
                  </div>

                  <div className="retro-stores-layout__card-row">
                    <Clock size={24} weight="fill" color="var(--color-ink)" className="retro-stores-layout__card-icon" />
                    <p className="retro-font-body retro-stores-layout__card-text retro-stores-layout__card-text--pre">{store.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PageStoresRetro.displayName = 'PageStoresRetro';