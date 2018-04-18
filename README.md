# Notes on things missing or that need to be moved into Fabric

## Action items
* Present findings to core Fabric people
* Open bugs, assign to myself so that I can load balance to others
* Organize a set of fixes to address these friction points
* p0 Bug with dependent selectors (ones with $ in them) not regenning

## General ideas and thoughts
* Should we have a Grid concept? Is it useful, or should we just be using styling? There is a lot of flexbox in the styling.
* Should we be abstracting text concepts?
* A StateComponent for adding state objects that can pipe into each other would be cool.
* Rendering date times which update live should be easier (moment.js?)
* Missing custom scrollbar support so we have ugly ones (When you scroll, there is no dropshadow)
* Missing a "touchable surface" base button that is lightweight and strips default button/link styling.
* No "button container" components, what is the right abstraction for sets of buttons?
* Some friction in getting text truncating in flexbox
* The "ChatEntry" component... we may want that in other UX. Word comments don't look/work the same.
* Focus treatment in Teams is inconsistent. Focus in Fabric is mostly consistent, but thin, we need to understand how Fluent affects that.
* The "new message" text entry should be shared with comments everywhere in the suite.

## VerticalDivider (aka Divider)
* There is no horizontal "Divider"! :(
* There is no centered label (e.g. "Today" in teams)
* There is no "emphasized"

## icons
* The icons don't match. We need to rationalize this. Having separate sets of icons creates friction and inconsistency.

## Pivot
* needs some visual polish (IT STILL JUMPS! :( )
* It is really hard to control the pivot content! (e.g. make it vertically scrollable.)
* The underlined TextField and the pivots should be similar in style
* doesn't take in className

## PersonaCoin
* doesn't take in className
* how should presence be hooked up?
* how should lpc be hooked up?
* why aren't colors of the presence showing up?

## RoundButton, buttons in general
* BaseButton is too heavy and we need a simple Touchable abstraction to create button variants
* IconButton is useless and indistinguished. Deprecate and use RoundButton?
* "primary" should be "emphasized" perhaps for semantic ui alignment

## FocusZone
* needs a "key to escape zone" callback

## List
* perf needs to be re-evaluated; lots of async work going on
* or, investigate react-virtualized

## TextField
* underlined mode doesn't have any focus treatment!

## ContextualMenu

## Icon
* iconName should just be "name"
