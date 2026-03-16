/**
 * PageGiftCardsRetro
 *
 * "PlayPocket" FSE theme - Gift Cards page.
 * WCAG AA 2.2 compliant.
 */

import { Gift, Wallet } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

const AMOUNTS = [10, 25, 50, 100, 200];

export const PageGiftCardsRetro = () => {
  const [amount, setAmount] = useState(50);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    alert(`Added $${amount} Gift Card to Cart!`);
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-gift-cards-layout">
          <div className="retro-gift-cards-layout__inner">
            <div className="retro-gift-cards-layout__header">
              <Gift size={64} weight="fill" color="var(--color-ink)" className="retro-gift-cards-layout__icon" />
              <h1 className="retro-font-display retro-bold retro-gift-cards-layout__title">DIGITAL GIFT CARDS</h1>
              <p className="retro-font-body retro-gift-cards-layout__subtitle">Power up someone's wallet.</p>
            </div>

            <div className="retro-gift-cards-layout__grid">
              {/* Preview Card */}
              <div className="retro-gift-cards-layout__preview">
                <div className="retro-gift-cards-layout__preview-header">
                  <h2 className="retro-font-display retro-bold retro-gift-cards-layout__preview-brand">PLAYPOCKET</h2>
                  <Wallet size={32} weight="fill" color="var(--color-ink)" />
                </div>
                <div className="retro-font-display retro-bold retro-gift-cards-layout__preview-amount">${amount}</div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="retro-gift-cards-layout__form">
                <div>
                  <h3 className="retro-font-display retro-bold retro-gift-cards-layout__form-heading">SELECT AMOUNT</h3>
                  <div className="retro-gift-cards-layout__amounts">
                    {AMOUNTS.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setAmount(val)}
                        className={`retro-button retro-font-display ${amount === val ? 'retro-button--primary' : 'retro-button--secondary'} retro-gift-cards-layout__amount-btn`}
                      >
                        ${val}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="retro-gift-cards-layout__field">
                  <label htmlFor="recipientEmail" className="retro-font-display retro-bold">RECIPIENT EMAIL</label>
                  <input id="recipientEmail" type="email" required placeholder="player2@domain.com" className="retro-font-body retro-gift-cards-layout__input" />
                </div>

                <div className="retro-gift-cards-layout__field">
                  <label htmlFor="giftMessage" className="retro-font-display retro-bold">GIFT MESSAGE</label>
                  <textarea id="giftMessage" rows={3} placeholder="It's dangerous to go alone! Take this." className="retro-font-body retro-gift-cards-layout__textarea" />
                </div>

                <button type="submit" className="retro-button retro-button--primary retro-font-display retro-bold retro-gift-cards-layout__submit">ADD TO CART</button>
              </form>
            </div>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PageGiftCardsRetro.displayName = 'PageGiftCardsRetro';