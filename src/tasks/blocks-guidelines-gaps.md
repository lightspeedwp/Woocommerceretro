# Blocks Guidelines Gaps Task List

**Source:** A4 Blocks Coverage Audit (2026-02-21)  
**Status:** ✅ COMPLETE  
**Updated:** March 17, 2026  
**Coverage:** P0-P2 100% (all priority blocks documented), structural complete. Remaining low-priority blocks listed for future reference.
// ... existing code ...
- [x] **T4.37** Consider reorganizing guidelines to match component subdirectory structure (21 subdirs) — **DECISION:** Current structure adequate. Guidelines already organized into 18 subdirs matching most component dirs. Missing dirs (blog, dev-tools, forms-advanced, interactive, navigation, search, ui) are low-priority blocks with no guidelines yet — will create matching dirs when guidelines are written. No reorganization needed.
- [x] **T4.38** Create shared "Funky Form Controls" guideline covering Input, Select, Checkbox, RadioGroup, Textarea, Switch — they share the neon focus pattern — ✅ Created `/guidelines/blocks/forms/FunkyFormControls.md` v1.0

---

## Remaining Blocks Without Guidelines (Lower Priority)

### display/ (6 components)
- `AspectRatio.tsx` — layout utility, no funky needed
- `Avatar.tsx` — glow border ring
- `Badge.tsx` — gradient variants, neon glow
- `Chart.tsx` — neon data series, glass tooltip
- `Countdown.tsx` — neon digits, glow separator
- `Table.tsx` — glass rows, neon header accent

### forms/ (remaining)
- `Label.tsx` — no funky needed
- `Switch.tsx` — neon track color
- `Textarea.tsx` — neon focus ring
- `Toggle.tsx` — neon active state
- `ToggleGroup.tsx` — neon selected, glow group

### forms-advanced/ (3 components)
- `Calendar.tsx` — glass panel, neon selected date
- `InputOTP.tsx` — neon focus per digit
- `Slider.tsx` — neon track and thumb

### interactive/ (5 components)
- `Carousel.tsx` — glow active slide, neon arrows
- `Collapsible.tsx` — glow expand state
- `Command.tsx` — glass command palette, neon results
- `Resizable.tsx` — neon handle
- `ScrollArea.tsx` — neon scrollbar track

### layout/ (remaining)
- `Modal.tsx` — glass panel, gradient header
- `Sheet.tsx` — glass panel
- `Sidebar.tsx` — glass panel, neon active nav

### overlay/ (remaining)
- `AlertDialog.tsx` — glass panel, gradient warning
- `ContextMenu.tsx` — glass menu
- `DropdownMenu.tsx` — glass dropdown, neon hover
- `EnquiryModal.tsx` — glass form, neon focus (EXISTS)
- `HoverCard.tsx` — glass card, glow border
- `Popover.tsx` — glass panel
- `Tooltip.tsx` — glass tooltip, neon border

### search/ (2 components)
- `ProductSearch.tsx` — neon focus, glass results
- `SearchAutocomplete.tsx` — glass dropdown, neon results highlight

### blog/ (1 component)
- `CategoryFilter.tsx` — neon active filter pill

### media/ (1 component)
- `VideoTestimonial.tsx` — glow video frame

### order/ (remaining)
- `AccountCreation.tsx` — glass panel, neon inputs
- `AdditionalFields.tsx` — neon inputs
- `AdditionalInformation.tsx` — glass info panel
- `AddressDetails.tsx` — glass address card
- `DownloadsSection.tsx` — glass file cards, neon download button
- `OrderSummary.tsx` (order/) — glass summary panel

### checkout/ui/ (4 components)
- `Checkbox.tsx` — neon variant for checkout context
- `CheckoutInput.tsx` — neon focus, checkout-specific styling
- `FloatingLabelInput.tsx` — neon floating label, glass input
- `RadioButton.tsx` — neon selected indicator