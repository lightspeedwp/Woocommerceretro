import React from "react";
import { Progress as NewProgress } from "../../src/app/components/blocks/feedback/Progress";

// Re-export component
const Progress = NewProgress;

/**
 * Legacy Progress compatibility shim.
 * Redirects to new WordPress-aligned component.
 * @deprecated Import from @/src/app/components/blocks/feedback/Progress instead.
 */
export { Progress };