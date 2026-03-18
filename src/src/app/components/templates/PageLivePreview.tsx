import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Play, Code, Eye, Gear, Copy, Check, ArrowsClockwise, CaretDown, CaretRight } from '../../utils/phosphor-compat';
import { Button } from '../blocks/design/Buttons';
import { Badge } from '../blocks/ui/badge';
import { PageAlert } from '../blocks/feedback/PageAlert';
import { ProductSearch } from '../blocks/search/ProductSearch';
import { ProductSkeleton } from '../blocks/product/ProductSkeleton';
import { Pagination } from '../blocks/archive/Pagination';
import { CheckoutStep } from '../blocks/checkout/CheckoutStep';
import { ProductAddToCart } from '../blocks/single-product/ProductAddToCart';
import { ProductPrice } from '../blocks/single-product/ProductPrice';
import { ProductRating } from '../blocks/single-product/ProductRating';
import { CartItem as CartLineItem } from '../blocks/cart/CartItem';
import { CartTotals } from '../blocks/cart/CartTotals';
import { ThemeToggle } from '../blocks/theme/ThemeToggle';

/**
 * PageLivePreview Template — Funky Redesign (Phase 10, Dev Tool)
 *
 * Interactive component showcase with live prop editing and real-time preview.
 *
 * @template
 */

export const PageLivePreview = () => {
  const [selectedComponent, setSelectedComponent] = useState('button');
  const [viewMode, setViewMode] = useState('both');

  const components = [
    { id: 'button', name: 'Button', category: 'UI' },
    { id: 'badge', name: 'Badge', category: 'UI' },
    { id: 'alert', name: 'PageAlert', category: 'Block' },
    { id: 'search', name: 'ProductSearch', category: 'Block' },
    { id: 'pagination', name: 'Pagination', category: 'Block' },
  ];

  return (
    <>
      <div className="pp-live-preview retro-devtools-page">

        {/* Page Header */}
        <section className="pp-live-preview__header">
          <Container>
            <div className="pp-live-preview__header-box">
              <Heading level="1" className="pp-live-preview__header-title retro-font-display retro-bold">
                PLAYGROUND
              </Heading>
              <p className="pp-live-preview__header-desc retro-font-body">
                Interactive component preview with real-time prop editing and code generation.
              </p>
            </div>
          </Container>
        </section>

        <section className="pp-live-preview__body">
          <Container>
            <div className="pp-live-preview__layout">
              {/* Component List Sidebar */}
              <div className="pp-live-preview__sidebar">
                <Heading level="3" className="pp-live-preview__sidebar-title retro-font-display retro-bold">
                  COMPONENTS
                </Heading>
                <div className="pp-live-preview__sidebar-list">
                  {components.map((comp) => {
                    const isActive = selectedComponent === comp.id;
                    return (
                      <button
                        key={comp.id}
                        onClick={() => setSelectedComponent(comp.id)}
                        className={`pp-live-preview__sidebar-btn retro-font-display retro-bold${isActive ? ' pp-live-preview__sidebar-btn--active' : ''}`}
                      >
                        <span>{comp.name}</span>
                        <span className="pp-live-preview__sidebar-tag">
                          {comp.category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preview Area */}
              <div className="pp-live-preview__main">
                {/* Toolbar */}
                <div className="pp-live-preview__toolbar">
                  <div className="pp-live-preview__toolbar-group">
                    {[
                      { id: 'preview', icon: Eye, label: 'Preview' },
                      { id: 'code', icon: Code, label: 'Code' },
                      { id: 'both', icon: Gear, label: 'Split' }
                    ].map((btn) => {
                      const isActive = viewMode === btn.id;
                      return (
                        <button
                          key={btn.id}
                          onClick={() => setViewMode(btn.id)}
                          className={`pp-live-preview__view-btn retro-font-display retro-bold${isActive ? ' pp-live-preview__view-btn--active' : ''}`}
                        >
                          <btn.icon size={16} weight="bold" />
                          {btn.label}
                        </button>
                      );
                    })}
                  </div>
                  <button className="pp-live-preview__reset-btn retro-font-display retro-bold">
                    <ArrowsClockwise size={16} weight="bold" />
                    Reset
                  </button>
                </div>

                {/* Workspace */}
                <div className="pp-live-preview__workspace">
                  {(viewMode === 'preview' || viewMode === 'both') && (
                    <div className="pp-live-preview__preview-pane">
                      {selectedComponent === 'button' && <Button>Click Me</Button>}
                      {selectedComponent === 'badge' && <Badge>New Label</Badge>}
                      {selectedComponent === 'alert' && <PageAlert title="Heads up!" message="This is a preview alert." />}
                      {selectedComponent === 'search' && <ProductSearch />}
                      {selectedComponent === 'pagination' && <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />}
                    </div>
                  )}
                  {(viewMode === 'code' || viewMode === 'both') && (
                    <div className="pp-live-preview__code-pane">
                      <div className="pp-live-preview__code-header">
                        <span className="retro-font-display retro-bold">REACT CODE</span>
                        <button className="pp-live-preview__copy-btn" aria-label="Copy code">
                          <Copy size={16} weight="bold" />
                        </button>
                      </div>
                      <pre className="pp-live-preview__code-block">
                        <code>{`<${components.find((c) => c.id === selectedComponent)?.name} />`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default PageLivePreview;
