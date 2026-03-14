"use client";

import React from "react";
import { Separator as NewSeparator } from "@/components/blocks/design/Separator";

/**
 * Legacy Separator compatibility shim.
 * Redirects to new WordPress-aligned component.
 * @deprecated Import from @/components/blocks/design/Separator instead.
 */
const Separator = NewSeparator;

export { Separator };