import * as React from "react";
import { 
  Card as NewCard, 
  CardHeader as NewCardHeader, 
  CardFooter as NewCardFooter, 
  CardTitle as NewCardTitle, 
  CardDescription as NewCardDescription, 
  CardContent as NewCardContent,
  CardAction as NewCardAction
} from "@/components/blocks/design/Card";

/**
 * Legacy Card compatibility shim.
 * Redirects to new WordPress-aligned component.
 * @deprecated Import from @/components/blocks/design/Card instead.
 */
export {
  NewCard as Card,
  NewCardHeader as CardHeader,
  NewCardFooter as CardFooter,
  NewCardTitle as CardTitle,
  NewCardDescription as CardDescription,
  NewCardContent as CardContent,
  NewCardAction as CardAction
};
