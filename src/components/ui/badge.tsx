import React from "react";
import { Badge as NewBadge } from "@/components/blocks/ui/badge";

/**
 * Legacy Badge compatibility shim.
 * Redirects to new WordPress-aligned component.
 * @deprecated Import from @/components/blocks/ui/badge instead.
 */
var Badge = NewBadge;

function badgeVariants() { return ""; }

export { Badge, badgeVariants };