import React from "react";
import { 
  Alert as NewAlert, 
  AlertTitle as NewAlertTitle, 
  AlertDescription as NewAlertDescription 
} from "../../src/app/components/blocks/feedback/Alert";

// Re-export component
var Alert = NewAlert;
var AlertTitle = NewAlertTitle;
var AlertDescription = NewAlertDescription;

/**
 * Legacy Alert compatibility shim.
 * Redirects to new WordPress-aligned component.
 * @deprecated Import from @/src/app/components/blocks/feedback/Alert instead.
 */
export { Alert, AlertTitle, AlertDescription };