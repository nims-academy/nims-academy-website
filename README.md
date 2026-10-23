[README.md](https://github.com/user-attachments/files/33857664/README.md)
# NIMS Academy Website
Plain HTML/CSS/JS. No build step: open `index.html` in a browser.

## Structure
`index.html` · `style.css` · `script.js` · `assets/{images,videos,icons,documents}`

## Customising
- **Logo:** edit the `.logo` span in the header of `index.html` (replace with an `<img>`).
- **Images/videos:** drop files into `assets/` using the filenames in `script.js` (`COURSES`, `FAC`, `GALLERY`, `VIDEO`) and `index.html` (hero, classroom, principal). Missing images show a labelled placeholder.
- **Brochure:** save as `assets/documents/course-brochure.pdf`. The button checks the file exists (needs a local server or hosting; opened via `file://` it shows "not uploaded").
- **Google Maps:** the map embed and address-search link use `CONFIG.address` in `script.js`. Update it if the institute's verified address changes.
- **Course details:** edit `COURSES` (descriptions) and the bracketed fields in the modal text inside `dialogs()`.
- **Contact info:** `CONFIG` in `script.js` (WhatsApp number) and the `tel:`/`mailto:` links and address text in `index.html`.

## Enquiry flow
The form validates input, then opens `https://wa.me/918281840022?text=...` with the details. The user must press send; nothing is stored or delivered automatically. For automatic delivery you need a real backend or approved form service (see `CONFIG.backendEndpoint`; not implemented).

## Complete before publishing
Logo, real photos/video, principal message and portrait, course names/durations/eligibility/fees, verified affiliations and documents (HRDS, NSBC, ASAP, ASAP Kerala), Google Maps link, brochure, favicon and Open Graph image, social links (none included).

## Testing
Open in desktop and phone browsers (or browser dev tools device mode); test the menu, course dialogs, form validation, WhatsApp links, FAQ and keyboard navigation (Tab, Enter, Escape).
