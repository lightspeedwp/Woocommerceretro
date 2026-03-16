/**
 * PageStoresRetro
 *
 * "PlayPocket" FSE theme - Store Locator page.
 * Retro handheld gaming aesthetic.
 *
 * **CSS:** `/src/styles/sections/retro-shared-patterns.css`
 * **Dark Mode:** Automatic via retro theme tokens
 * **WCAG AA 2.2:** Semantic HTML, focus states, contrast
 *
 * @route /stores
 * @template
 */

import { MapPin, Phone, Clock } from '../../utils/phosphor-compat';
import { HeroRetro } from '../patterns/HeroRetro';

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
    <>
      <main className="retro-main">

        {/* Hero */}
        <HeroRetro
          titleLines={['FIND A', 'STORE']}
          highlight="NEAR YOU"
          description="Visit one of our item shops for hands-on demos, exclusive merch, and in-store events."
        />

        {/* Store Cards */}
        <section className="retro-section" aria-labelledby="stores-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="stores-heading" className="retro-font-display retro-bold retro-section-title">
                OUR LOCATIONS
              </h2>
            </div>

            <div className="retro-stores-layout__grid">
              {stores.map((store) => (
                <div key={store.id} className="retro-stores-layout__card">
                  <h3 className="retro-font-display retro-bold retro-stores-layout__card-name">{store.name}</h3>

                  <div className="retro-stores-layout__card-row">
                    <MapPin size={24} weight="fill" className="retro-stores-layout__card-icon" aria-hidden="true" />
                    <p className="retro-font-body retro-stores-layout__card-text retro-stores-layout__card-text--pre">{store.address}</p>
                  </div>

                  <div className="retro-stores-layout__card-row">
                    <Phone size={24} weight="fill" className="retro-stores-layout__card-icon" aria-hidden="true" />
                    <p className="retro-font-body retro-stores-layout__card-text">{store.phone}</p>
                  </div>

                  <div className="retro-stores-layout__card-row">
                    <Clock size={24} weight="fill" className="retro-stores-layout__card-icon" aria-hidden="true" />
                    <p className="retro-font-body retro-stores-layout__card-text retro-stores-layout__card-text--pre">{store.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

PageStoresRetro.displayName = 'PageStoresRetro';