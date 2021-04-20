# TOPdesk slide deck

Slide deck framework adapted from [deck.js](http://imakewebthings.com/deck.js/), with a TOPdesk brand visual sauce.

## TOPdesk theme

The visual theme is based as much as possible on the TOPdesk Brandbook.
All the web colors are available as CSS variables, as well as some of the named colors.

### Robin

You can add the TOPdesk Robin to a piece of text by adding a span with the `robin` class.
Remember to add the attributes `role="img"` and `title="topdesk logomark"` (or something else appropriate) so it represents itself as a topdesk logomark image for assistive technology users, and mouse users can get a tooltip if they do not know what the robin represents.

### Rounded shapes

The TOPdesk Brandbook proposes using wedges, optionally overlapping with a larger TOPdesk blue shape. Although you can't get quite the same effect due to width and height of the screen not being fixed in a web context. This slide deck makes these decorative shapes available out-of-the box and places them in a corner of choice.

Add these classes to an element with `class="slide"` that is a direct child of the element with `class="deck-container"`.

- `shape-small` enables the wedge shape (default aqua/azure, top right corner)
- `shape-large` enables the TOPdesk blue shape (default top right corner)
- `shape-tl` moves the shape(s) to the top left corner
- `shape-br` moves the shape(s) to the bottom right corner
- `shape-bl` moves the shape(s) to the bottom left corner
- `shape-red` sets the color of the small shape to coral/vermillion
- `shape-green` sets the color of the small shape to fern/pine
- `shape-orange` sets the color of the small shape to cantaloupe/pumpkin

## Slide transitions

There is no slide transition theme at this time as transitions tend to perform poorly in remote presentations.
If you'd like to add a slide transition theme from deck.js, be aware that the css from these themes may have some unexpected impact on the content of the slides.

## Goto extension

The deck.js Goto extension is included.
Press "g" to open a dialog to jump to a slide by number, or selecting it from the drop down.

## Menu extension

The deck.js Menu extension is included.
press "m" to show all slides in an overview.
Use arrow keys moves between the slides and sub-slides as normal.
Press "m" again to close the menu, and return to the presentation on the selected slide or even sub-slide.
Alternatively use the mouse to select the slide or sub-slide and return to the presentation immediately.
