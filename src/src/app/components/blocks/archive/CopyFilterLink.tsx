import React from 'react';
import { Link as Link2, Check } from '@phosphor-icons/react';
import * as ButtonsModule from '../design/Buttons';
import * as TypographyModule from '../../common/Typography';
import * as SonnerModule from 'sonner@2.0.3';
import * as ReactRouterModule from 'react-router';
import * as ClipboardModule from '../../../utils/clipboard';

var useState = React.useState;
var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;
var toast = SonnerModule.toast;
var useLocation = ReactRouterModule.useLocation;
var copyToClipboard = ClipboardModule.copyToClipboard;

/**
 * CopyFilterLink Component
 * 
 * Optimized for Figma Make parser:
 * - Uses var instead of const/let
 * - Uses function declarations
 * - No TypeScript-specific syntax
 */
export function CopyFilterLink(props) {
  var className = props.className || '';
  var location = useLocation();
  var _copied = useState(false);
  var copied = _copied[0];
  var setCopied = _copied[1];

  var handleCopy = function() {
    var currentUrl = window.location.origin + location.pathname + location.search;
    var success = copyToClipboard(currentUrl);
    
    if (success) {
      setCopied(true);
      toast.success('Filter link copied to clipboard!');
      setTimeout(function() {
        setCopied(false);
      }, 2000);
    } else {
      toast.error('Failed to copy link');
    }
  };

  return React.createElement('div', { className: "wp-copy-filter-link funky-copy-link " + className },
    React.createElement(Typography, { variant: "body", className: "wp-copy-filter-link__label" }, 
      "Share these filters:"
    ),
    React.createElement(Button, {
      variant: copied ? "secondary" : "outline",
      size: "small",
      onClick: handleCopy,
      className: "wp-copy-filter-link__btn funky-copy-btn"
    },
      copied 
        ? React.createElement(React.Fragment, null,
            React.createElement(Check, { className: "wp-copy-filter-link__icon" }),
            "Copied!"
          )
        : React.createElement(React.Fragment, null,
            React.createElement(Link2, { className: "wp-copy-filter-link__icon" }),
            "Copy Link"
          )
    )
  );
}

CopyFilterLink.displayName = 'CopyFilterLink';