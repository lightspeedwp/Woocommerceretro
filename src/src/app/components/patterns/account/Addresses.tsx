import React from 'react';
import { Plus, PencilSimple } from '@phosphor-icons/react';
import * as AccountDataModule from '../../../data/account';

var mockAddresses = AccountDataModule.mockAddresses;

/**
 * Account Addresses Pattern
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function Addresses() {
  var header = React.createElement('div', { key: 'header', className: "account-addr__header" }, [
    React.createElement('div', { key: 'title-wrap' }, [
      React.createElement('h2', { key: 't', className: "account-addr__title" }, "Addresses"),
      React.createElement('p', { key: 'd', className: "account-addr__desc" }, 
        "The following addresses will be used on the checkout page by default."
      )
    ]),
    React.createElement('button', { key: 'add', className: "account-addr__add-btn" }, [
      React.createElement(Plus, { key: 'i', size: 16, 'aria-hidden': "true" }),
      React.createElement('span', { key: 's' }, "Add new")
    ])
  ]);

  var cards = mockAddresses.map(function(address) {
    var isShipping = address.type === 'shipping';
    
    var cardHeader = React.createElement('div', { key: 'h', className: "account-addr__card-header" }, [
      React.createElement('h3', { 
        key: 't', 
        className: ("account-addr__card-type" + (isShipping ? ' account-addr__card-type--shipping' : ''))
      }, 
        address.type === 'billing' ? 'Billing address' : (address.type === 'shipping' ? 'Shipping address' : 'Address')
      ),
      React.createElement('button', { 
        key: 'e', 
        className: "account-addr__card-edit funky-spring-hover", 
        'aria-label': "Edit " + address.type + " address" 
      }, React.createElement(PencilSimple, { size: 16, weight: 'duotone' }))
    ]);

    var cardBody = React.createElement('div', { key: 'b', className: "account-addr__card-body" }, [
      React.createElement('p', { key: 'n', className: "account-addr__card-name" }, address.firstName + " " + address.lastName),
      React.createElement('p', { key: 'l1', className: "account-addr__card-line" }, address.address1),
      address.address2 ? React.createElement('p', { key: 'l2', className: "account-addr__card-line" }, address.address2) : null,
      React.createElement('p', { key: 'l3', className: "account-addr__card-line" }, address.city + ", " + address.postalCode),
      React.createElement('p', { key: 'l4', className: "account-addr__card-line" }, address.country)
    ]);

    return React.createElement('div', {
      key: address.id,
      className: ("account-addr__card funky-glass-panel" + (isShipping ? ' account-addr__card--shipping' : ''))
    }, [cardHeader, cardBody]);
  });

  var grid = React.createElement('div', { key: 'grid', className: "account-addr__grid" }, cards);

  return React.createElement('div', { className: "account-addr" }, [header, grid]);
}