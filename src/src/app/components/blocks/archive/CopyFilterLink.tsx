import { useState } from 'react';
import { Link as Link2, Check } from '../../../utils/phosphor-compat';
import { Button } from '../design/Buttons';
import { Typography } from '../../common/Typography';
import { toast } from 'sonner@2.0.3';
import { useLocation } from 'react-router';
import { copyToClipboard } from '../../../utils/clipboard';

interface CopyFilterLinkProps {
  className?: string;
}

/**
 * CopyFilterLink Component
 *
 * Copies the current filter URL to clipboard for sharing.
 */
export const CopyFilterLink = ({ className = '' }: CopyFilterLinkProps) => {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const currentUrl = window.location.origin + location.pathname + location.search;
    const success = copyToClipboard(currentUrl);

    if (success) {
      setCopied(true);
      toast.success('Filter link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className={`wp-copy-filter-link funky-copy-link ${className}`}>
      <Typography variant="body" className="wp-copy-filter-link__label">
        Share these filters:
      </Typography>
      <Button
        variant={copied ? 'secondary' : 'outline'}
        size="small"
        onClick={handleCopy}
        className="wp-copy-filter-link__btn funky-copy-btn"
      >
        {copied ? (
          <>
            <Check className="wp-copy-filter-link__icon" />
            Copied!
          </>
        ) : (
          <>
            <Link2 className="wp-copy-filter-link__icon" />
            Copy Link
          </>
        )}
      </Button>
    </div>
  );
};

CopyFilterLink.displayName = 'CopyFilterLink';