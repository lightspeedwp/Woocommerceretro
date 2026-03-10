import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import { House, MagnifyingGlass, WarningCircle, Ghost } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;
var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;

/**
 * PageNotFound Template — Funky Redesign
 *
 * Full funky 404 page — gradient bg, glassmorphism card, animated illustration.
 *
 * @template
 * @route /error/404, /error/500, /error/503, /error/network, *
 */
export function PageNotFound() {
  return React.createElement(Layout, null,
    React.createElement('div', { 
      className: "page-not-found",
      style: {
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--wp--preset--color--base)',
        padding: 'var(--wp--preset--spacing--60) 0'
      }
    },
      /* Background Elements */
      React.createElement('div', { className: "funky-orb funky-animate-float", style: { top: '10%', left: '10%', width: '300px', height: '300px', background: 'var(--wp--preset--color--neon-pink)', opacity: 0.15 } }),
      React.createElement('div', { className: "funky-orb funky-animate-float", style: { bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'var(--wp--preset--color--neon-cyan)', opacity: 0.15, animationDelay: '-2s' } }),
      
      React.createElement(Container, null,
        React.createElement('div', { 
          className: "funky-glass-panel",
          style: {
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            padding: 'var(--wp--preset--spacing--80) var(--wp--preset--spacing--60)',
            position: 'relative',
            zIndex: 1
          }
        },
          React.createElement('div', { style: { marginBottom: 'var(--wp--preset--spacing--40)', color: 'var(--wp--preset--color--neon-cyan)', display: 'flex', justifyContent: 'center' } },
            React.createElement(Ghost, { size: 80, weight: 'duotone', className: 'funky-animate-float' })
          ),
          
          React.createElement('h1', { 
            className: "funky-section__heading--gradient", 
            style: { 
              fontSize: 'var(--wp--preset--font-size--gigantic)', 
              lineHeight: 1, 
              marginBottom: 'var(--wp--preset--spacing--20)' 
            } 
          }, "404"),
          
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--40)' } }, "Oops! We can't find that page."),
          
          React.createElement('p', { style: { color: 'var(--wp--preset--color--muted-foreground)', marginBottom: 'var(--wp--preset--spacing--60)' } },
            "It looks like you've wandered into the digital void. The page you're looking for has moved or no longer exists."
          ),
          
          React.createElement('div', { style: { display: 'flex', gap: 'var(--wp--preset--spacing--30)', justifyContent: 'center', flexWrap: 'wrap' } },
            React.createElement(Link, { 
              to: "/", 
              className: "wp-block-button__link wp-element-button funky-spring-hover",
              style: { 
                background: 'linear-gradient(135deg, var(--wp--preset--color--neon-pink), var(--wp--preset--color--neon-cyan))', 
                color: '#000', 
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--wp--preset--spacing--10)'
              } 
            },
              React.createElement(House, { size: 20, weight: 'bold' }),
              "Back to Home"
            ),
            React.createElement(Link, { 
              to: "/search", 
              className: "wp-block-button__link wp-element-button funky-spring-hover",
              style: { 
                background: 'transparent',
                border: '2px solid var(--wp--preset--color--neon-cyan)',
                color: 'var(--wp--preset--color--foreground)', 
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--wp--preset--spacing--10)'
              } 
            },
              React.createElement(MagnifyingGlass, { size: 20, weight: 'bold' }),
              "Search Site"
            )
          )
        )
      )
    )
  );
}

export default PageNotFound;