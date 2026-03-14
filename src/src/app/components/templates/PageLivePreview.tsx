import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Play, Code, Eye, Gear, Copy, Check, ArrowsClockwise, CaretDown, CaretRight } from '@phosphor-icons/react';
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

const PageLivePreview = () => {
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
      <div className="retro-devtools-page" style={{ backgroundColor: 'var(--color-paper)', color: 'var(--color-ink)', minHeight: '100vh', paddingBottom: '4rem' }}>

        {/* Page Header */}
        <section style={{
          padding: '3rem 0',
          borderBottom: '4px solid var(--color-ink)',
          backgroundColor: 'var(--color-signal)',
          backgroundImage: 'radial-gradient(var(--color-ink) 2px, transparent 2px)',
          backgroundSize: '16px 16px',
        }}>
          <Container>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '2rem',
              border: '4px solid var(--color-ink)',
              boxShadow: '8px 8px 0 rgba(0,0,0,0.2)',
              display: 'inline-block',
              color: 'var(--color-paper)'
            }}>
              <h1 className="retro-font-display retro-bold" style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>PLAYGROUND</h1>
              <p className="retro-font-body" style={{ fontSize: '1.125rem', margin: 0, opacity: 0.9 }}>
                Interactive component preview with real-time prop editing and code generation.
              </p>
            </div>
          </Container>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <Container>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {/* Component List Sidebar */}
              <div style={{
                flex: '0 0 250px',
                backgroundColor: 'var(--color-paper-deep)',
                border: '4px solid var(--color-ink)',
                boxShadow: '4px 4px 0 var(--color-ink)',
                padding: '1.5rem',
                alignSelf: 'flex-start'
              }}>
                <h3 className="retro-font-display retro-bold" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '2px dashed var(--color-ink)', paddingBottom: '0.5rem' }}>COMPONENTS</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {components.map((comp) => {
                    const isActive = selectedComponent === comp.id;
                    return (
                      <button
                        key={comp.id}
                        onClick={() => setSelectedComponent(comp.id)}
                        className="retro-font-display retro-bold"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          backgroundColor: isActive ? 'var(--color-ink)' : 'transparent',
                          color: isActive ? 'var(--color-paper)' : 'var(--color-ink)',
                          border: '2px solid',
                          borderColor: isActive ? 'var(--color-ink)' : 'transparent',
                          padding: '0.5rem',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <span>{comp.name}</span>
                        <span style={{
                          fontSize: '0.625rem',
                          backgroundColor: isActive ? 'var(--color-signal)' : 'var(--color-ink)',
                          color: 'var(--color-paper)',
                          padding: '0.125rem 0.25rem'
                        }}>
                          {comp.category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preview Area */}
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Toolbar */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--color-paper)',
                  border: '4px solid var(--color-ink)',
                  boxShadow: '4px 4px 0 var(--color-ink)',
                  padding: '1rem',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
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
                          className="retro-font-display retro-bold"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: isActive ? 'var(--color-ink)' : 'transparent',
                            color: isActive ? 'var(--color-paper)' : 'var(--color-ink)',
                            border: '2px solid var(--color-ink)',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer',
                            textTransform: 'uppercase'
                          }}
                        >
                          <btn.icon size={16} weight="bold" />
                          {btn.label}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    className="retro-font-display retro-bold"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: 'transparent',
                      color: 'var(--color-ink)',
                      border: 'none',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      textDecoration: 'underline'
                    }}
                  >
                    <ArrowsClockwise size={16} weight="bold" />
                    Reset
                  </button>
                </div>

                {/* Workspace */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {(viewMode === 'preview' || viewMode === 'both') && (
                    <div style={{
                      backgroundColor: 'var(--color-paper)',
                      border: '4px dashed var(--color-ink)',
                      padding: '3rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      minHeight: '200px'
                    }}>
                      {selectedComponent === 'button' && <Button>Click Me</Button>}
                      {selectedComponent === 'badge' && <Badge>New Label</Badge>}
                      {selectedComponent === 'alert' && <PageAlert title="Heads up!" message="This is a preview alert." />}
                      {selectedComponent === 'search' && <ProductSearch />}
                      {selectedComponent === 'pagination' && <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />}
                    </div>
                  )}
                  {(viewMode === 'code' || viewMode === 'both') && (
                    <div style={{
                      backgroundColor: 'var(--color-ink)',
                      border: '4px solid var(--color-ink)',
                      boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
                      color: 'var(--color-paper)',
                      position: 'relative'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '2px dashed var(--color-paper)',
                        padding: '0.75rem 1rem',
                        opacity: 0.8
                      }}>
                        <span className="retro-font-display retro-bold" style={{ fontSize: '0.875rem' }}>REACT CODE</span>
                        <button style={{
                          backgroundColor: 'transparent',
                          color: 'inherit',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex'
                        }}>
                          <Copy size={16} weight="bold" />
                        </button>
                      </div>
                      <pre style={{ margin: 0, padding: '1.5rem', overflowX: 'auto', fontFamily: 'monospace', fontSize: '0.875rem', color: 'var(--color-signal)' }}>
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