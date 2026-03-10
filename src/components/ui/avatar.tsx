import * as React from "react";
import { 
  Avatar as NewAvatar, 
  AvatarImage as NewAvatarImage, 
  AvatarFallback as NewAvatarFallback 
} from "../../src/app/components/blocks/display/Avatar";

// Re-export component
var Avatar = NewAvatar;
var AvatarImage = NewAvatarImage;
var AvatarFallback = NewAvatarFallback;

/**
 * Legacy Avatar compatibility shim.
 * Redirects to new WordPress-aligned component.
 * @deprecated Import from @/src/app/components/blocks/display/Avatar instead.
 */
export { Avatar, AvatarImage, AvatarFallback };