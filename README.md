# Ohmine Dark Theme for Joplin

OhmineDT is a Joplin external CSS theme and and aims to provide you a better Markdown note-taking experience! 

Let's see what's OhmineDT brings you:

- 20 useful custom elements to improve your Joplin note-taking experience
- 35 useful switchers for quick customizing the theme
- No more messy markdown table syntax
- Well paragraph separation layout brings you the best screen reading experience
- Split out the Non-Monospace and Monospace fonts for easily identifying the main content.
- Eye-protector to protect your eyes from bright colors
- Including additional styles for helpful plugins
- Well formatting of exported PDF and HTML
- A magical background color #151b1a that make you quickly jump into a deep focus state
- Easy to customize whatever elements and colors of Joplin
- And more...

![OhmineDarkTheme](https://user-images.githubusercontent.com/86870826/154914242-cb57c3b2-a0c5-4031-a67a-163a2cf5a43e.png)



<!-- ============================================================================================================================================= Latest Released -->

## Latest Released

### OhmineDT-v3.1.75 updates ( 9-May-2022 tested on Joplin v2.7.15)

- **Render Viewer:**
    - New: add hover effects on Markdown TOC's links.
    - Improve: enlarged the click area of Markdown TOC's links.
    - Improve: codeblock background color changed. 
- **Markdown Editor:**
    - Improve: hroizontal line markdown syntax style.
- **Rich Text Editor:**
    - Fix: editor top toolbar visual broken.
- **Print/Export PDF:**
    - Fix: unexpected border on the table.
- **Joplin UI:**
    - Fix: white background splash once when startup.
    - Fix: bottom tag bar visual broken.
- **Source Code: userchrome.css:**
    - Change: renamed 1 switcher-related value.
    - New: add `general-body-background-color`
    - New: add `--hr-background-gradient`
- **Source Code: userstyle.css:**
    - New: add new switcher `--switcher-markdown-toc-link-text-wrap` for the wrap text effect of the markdown toc link text.
    - New: add `--mt-link-text-color-hover`
    - New: add `--mt-link-background-color-hover`

***

### OhmineDT-v3.1.61 updates ( 5-May-2022 tested on Joplin v2.7.15)

- **Render Viewer:**
    - Fix: The chinese font family was not applied to the table.
- **Markdown Editor:**
    - Change: Abstract Content Bar - list, blockquote, and table, color changed.
    - New: add background color to horizontal line markdown syntax.
    - Fix: Abstract Content Bar - blockquote didn't showing on the color bar.
- **Joplin UI:**
    - Improve: tag manager modal dialog styles.
- **Source Code: userchrome.css:**
    - Change: renamed 1 switcher.
    - Change: renamed 7 variables.
    - Change: removed 1 invalid variable `--codeblock-text-color`.
    - New: add `--switcher-mde-horizontal-line-background-color` for turn on/off the background color of horizontal line markdown syntax.
    - New: add `--hr-background-color`.
    - New: add `--hr-text-color`.
    - New: add custom code section to the bottom.
    - Fix: the value of `--np-notebook-item-text-color:` and `--np-notebook-item-border-color:` are affects to the notelist panel unexpectedly.
    - Improve: edit unclear comments.
- **Source Code: userstyle.css:**
    - Change: renamed 1 variable.
    - New: add `--switcher-markdown-toc-position-left` You can now position the Markdown TOC button to the left/right.
    - New: add `--mt-body-background-color-hover`.
    - New: add `--mt-body-border-color-hover`.
    - New: add `--mt-list-border-color`.
    - New: add custom code section to the bottom.
    - Improve: edit unclear comments.

***

<!-- =========================================================================================================================================== Table of contents -->

## Table of contents

- DESIGN
	- [The Inspiration of Ohmine Dark Theme](#the-inspiration-of-ohmine-dark-theme)
	- [Markdown Editor](#markdown-editor)
	- [Render Viewer](#render-viewer)
	- [Font Family](#font-family)
- FEATURES
	- [Sticky Notes (custom element)](#sticky-notes-custom-element)
		- [How to use](#how-to-use) 
	- [Art Gallery (custom element)](#art-gallery-custom-element)
		- [How to use](#how-to-use-1) 
	- [Custom Title Block (custom element)](#custom-title-block-custom-element)
		- [How to use](#how-to-use-2)
	- [Key Point (custom element)](#key-point-custom-element)
		- [How to use](#how-to-use-3)
	- [Abstract Content Bar](#abstract-content-bar)
		- [How to use](#how-to-use-4) 
	- [Customizable Heading](#customizable-heading)
	- [Floating Markdown TOC](#floating-markdown-toc)
	- [Eye-Protector](#eye-protector)
- MORE SCREENSHOTS
	- [Notebook Panel](#notebook-panel)
	- [Special Text Styles](#special-text-styles)
	- [Link](#link)
	- [Unordered List & Ordered List](#unordered-list--ordered-list)
	- [Checklist](#checklist)
	- [Blockquote](#blockquote)
	- [Codeblock](#codeblock)
- MUST KNOW ABOUT OHMINE DARK THEME
	- [Change Your Joplin Settings Before Using OhmineDT](#change-your-joplin-settings-before-using-ohminedt)
		- [Appearance](#appearance)
		- [Markdown](#markdown)
		- [Other Plugins](#other-plugins)
	- [OhmineDT Picks The Best Reading Fonts For You](#ohminedt-picks-the-best-reading-fonts-for-you)
	- [These Plugins Are Important to OhmineDT](#these-plugins-are-important-to-ohminedt)
		- [Rich Markdown](#rich-markdown)
		- [Quick HTML Tags](#quick-html-tags)
		- [Markdown Table Colorize](#markdown-table-colorize)
		- [Spoiler](#spoiler)
	- [Think Before Using The Custom Elements](#think-before-using-the-custom-elements)
- MORE INFORMATION
	- [About Print & Export](#about-print--export)
	- [Quick Guide to Customize OhmineDT](#quick-guide-to-customize-ohminedt)
	- [Why Using Joplin?](#why-using-joplin)
- FAQ
	- [How to install this theme?](#how-to-install-this-theme)
	- [How to delete this theme?](#how-to-delete-this-theme)
	- [How to install Joplin plugins?](#how-to-install-joplin-plugins)
	- [Will this theme develop as a Joplin plugin?](#will-this-theme-develop-as-a-joplin-plugin)
	- [How to contribute?](#how-to-contribute)
		- [Give me a user feedback](#give-me-a-user-feedback)
		- [Report Bugs](#report-bugs)

<!-- ====================================================================================================================================================== DESIGN -->
<!-- ======================================================================================================================== The Inspiration of Ohmine Dark Theme -->

## The Inspiration of Ohmine Dark Theme

The design inspiration comes from the below Japanese Sake Ohmine-3-Grain: 

![134671847-8748e277-1bbf-4c2a-9ad4-14899f09e12e](https://user-images.githubusercontent.com/86870826/154919485-db0b2f57-ce0d-4938-a10f-f805674a345a.png)

This is a gift from my friend and I was tasting it when I made this theme. I pretty much love the whole design series of Ohmine-3-Grain and this is originally designed by *Stockholm Design Lab*.

<img width="550" alt="134672093-8a9a0405-d9a1-4c7c-9d90-0ac4002c9545" src="https://user-images.githubusercontent.com/86870826/154919513-34a78dad-3aa8-451e-88b9-acbdaa52a6d2.png">

If you are interested to know more about the Ohmine-3-Grain design you may like to check out the below links:

[Stockholm Design Lab - Ohmine page](https://www.stockholmdesignlab.se/work/ohmine)

[Ohmine Official Video on Youtube](https://www.youtube.com/watch?v=L4TtyOKgv9s)


[:arrow_up:Back](#table-of-contents)

<!-- ============================================================================================================================================= Markdown Editor -->

## Markdown Editor

Markdown Editor is where your eyes will always keep focus for a long time when you write your Markdown notes. It means the Markdown Editor is always the key point to protect your eyes.

- Have you ever felt distressed to write notes when you have blurred vision?
- Have you ever felt visual messy due to using Markdown Syntax to create a complex note?
- Do you want to experience writing notes for a long time without feeling tired?

Ohmine Dark Theme is completely designed to solve these problems.

The key adjustments for the Markdown Editor are as below:

- Reduce the color contrast between the main content and the background
- Reduce brightness and fonts size for non-essential content
- Reduce the use of unnecessary colors
- Using a MAGICAL background color #151b1a

![MarkdownEditor](https://user-images.githubusercontent.com/86870826/154919256-8fc7c775-2fe8-4b55-9d63-93e1387d333d.png)


I'm choosing this background color not based on my personal favorite. As I tried assorted colors, I think the #151b1a is the most magical one that can always lead me to a deep focus state readily. When you spend an hour working with it, you will feel it.


[:arrow_up:Back](#table-of-contents)

<!-- =============================================================================================================================================== Render Viewer -->

## Render Viewer

Render Viewer is the place where you often want to quickly find out the correct information. It' means the Render Viewer needs a great content separating structure to let you identify the key information easily.

The key adjustments for the Render Viewer are as below:

- Use soft colors to differentiate content
- Clear separation of content
- Stand out the key information
- Avoid bright colors when scrolling down to read content

![RenderViewer](https://user-images.githubusercontent.com/86870826/154919289-d92d2e5c-f06c-4647-8aaa-8e3edc9baae5.png)


[:arrow_up:Back](#table-of-contents)

<!-- ================================================================================================================================================= Font Family -->

## Font Family

Ohmine dark theme is using the below font family for both Markdown Editor and Render Viewer:

- Montserrat
- Chiron Sans HK Pro (for Simplified & Traditional Chinese  簡、繁體中文)
- Avenir (Joplin default)
- Arial (Joplin default)
- Sans-Serif (Joplin default)

Montserrat is mostly recommended for this theme. When I've tested over 40 fonts with sizes from 12 to 15px, Montserrat is the ultimate champion. It provides the best reading experience with 14px.

Montserrat sample:

![FontFamily_Montserrat](https://user-images.githubusercontent.com/86870826/154921170-5dd414c0-bd8c-47c7-8a76-9460106fcf3c.png)

Then, the monospace font is used on all Markdown Syntax, such as a Markdown table, Markdown link, etc. You'll also see it in the code block and inline code.

Let's take a look at the monospace font family:

- Cascadia Mono Light
- Monospace (Joplin default)
- Chiron Sans HK Pro (for Simplified & Traditional Chinese  簡、繁體中文)

Cascadia Mono is one of the best monospace fonts. It would be a good choice if you don't need the ligature, and it provides clear symbol characters and works great at the 12px font size.

Cascadia Mono Light sample:

![FontFamily_CascadiaMono](https://user-images.githubusercontent.com/86870826/154921215-1eb1b8c4-a9ca-4fb9-ab10-00c4429f7cbf.png)

If you didn't install the above recommended fonts on your computer, Joplin will pick the default fonts for you.

Additionally, there are a few setting properties in `Tools`> `Options`> `Appearance` that would be no longer work once you installed this theme: 

- Editor font size
- Editor font family
- Editor monospace font family

You should always edit all the font-related settings directly in the CSS files.


[:arrow_up:Back](#table-of-contents)

<!-- ==================================================================================================================================================== FEATURES -->
<!-- =============================================================================================================================== Sticky Notes (custom element) -->

## Sticky Notes (custom element)

Ohmine Dark Theme has 7 custom elements for creating the Sticky Notes: `note` , `tip` , `question` , `explain` , `warning` , `keyword` , `important`. They can help you build the article structure. Normally, you would be removed them from the content when you have completed your article. 

Let’s see what are the Sticky Notes for:

![StickyNotes_batch](https://user-images.githubusercontent.com/86870826/154921538-1a6356ea-57b8-4d36-8f32-f27cf251795c.png)

### How to use

1. Make sure there is a blank line *before the open tag*, otherwise it may cause the format problem.
2. Start typing your content in a *new line*.
3. Use plain text within a custom element.
4. Use `ENTER` to add a line break.
5. Do not including any blank line within the Sticky Notes, if you want to adding a *blank line* please use  `<br>`.

**Code Sample:**
 ```
 
 <note> 
 here to type any of your content.
 </note>
 ```

**Output:**

![StickyNotes_SampleCodeOutput_batch](https://user-images.githubusercontent.com/86870826/154921825-254a5f13-035c-4bad-9e13-50159eee78a9.png)


Sticky Notes switchers for reference:

|Root Property|Value(ON)|Value(Off)|Description|
|-|-|-|-|
|--switcher-print-sticky-notes-display: | block; | none; | show/hide the sticky notes from the PDF */

[:arrow_up:Back](#table-of-contents)

<!-- ================================================================================================================================ Art Gallery (custom element) -->

## Art Gallery (custom element)

Art Gallery provides 11 custom elements for you to split attached images into columns. It would be helpful if you have many images needed to attach to your note. 

Art Gallery has limited the `max-height` to 60% viewport height by default. Let's see how its work:

| Custom Elements | Force Columns |
|:---------------:|:-------------:|
|       ag2       |       2       |
|       ag3       |       3       |
|       ag4       |       4       |
|       ag5       |       5       |
|       ag6       |       6       |
|       ag7       |       7       |
|       ag8       |       8       |
|       ag9       |       9       |
|       ag10      |       10      |
|       ag11      |       11      |
|       ag12      |       12      |

Below is the sample of the art gallery(ag6) with 48 images: 

![ArtGallery_batch](https://user-images.githubusercontent.com/86870826/154922320-02d7cb16-e432-413f-bd2c-dcfd6f0a41f2.png)


### How to use

1. The custom element name `ag` stands for *Art Gallery*.
2. The art gallery tag must use *right behind the plain text* .
3. Do not including any blank line within this part of the codes, *blank line will break the format* .

**Code Sample:**
 
 ```
 This is a normal paragraph content. <--
 <ag4> 
![joplin_logo.png](:/ec939f9c7c764c35ac2a5b71af077d56)
![davinci_resolve_logo.png](:/9981233bc3004ca791dce0c03c39e76a)
![blackmagic_logo.jpg](:/35a13cc95e68498f920300f5babb6038)
![affinity_serif_logo.jpg](:/6cfaf4d539284daa833a732b4bf63bbf)
![affinity_publisher_logo.png](:/782b1076fa1249a5b0d318c1af9d0b8f)
![affinity_photo_logo.png](:/7ad5221028b24bfe8fe11722b6845112)
![affinity_designer_logo.png](:/6ed16b90348146ae9f5a34b9a7c7f181)
![ableton_logo.png](:/bc5078587d8945cca940395d67bcc321)
 </ag4>
 ```

**Output:**

![ArtGallery_SampleCodeOutput_batch](https://user-images.githubusercontent.com/86870826/154922361-243133a2-f473-453e-aff5-f7957b434d62.png)


[:arrow_up:Back](#table-of-contents)

<!-- ========================================================================================================================= Custom Title Block (custom element) -->

## Custom Title Block (custom element)

Custom Title Block would be suitable for supplementing information that you think is important to readers. The usage is very similar to a blockquote but come up with a clear heading, it's making a key concept more outstanding.

Let's see what it looks like:

![CustomTitleBlock_SampleCodeOutput_batch](https://user-images.githubusercontent.com/86870826/154922812-991064ad-3831-412c-8e4e-0505edc49a7f.png)

### How to use

1. The custom element name `ctb` stands for *Custom Title Block*.
2. Type your title *next to the open tag* .
3. Keep your title *within one line*.
4. Start typing your content *in the second line*.
5. Use plain text within a custom element.
6. Please mention that *within one line* means it's *according to your panel width*.


**Code Sample:**
```
<ctb>Here To Type The title
Here to type any of your content
</ctb>
```


**Output:**

![CustomTitleBlock_SampleCodeOutput_2](https://user-images.githubusercontent.com/86870826/154922844-588f7514-3b82-4066-a908-5ad61258253b.png)


[:arrow_up:Back](#table-of-contents)

<!-- =================================================================================================================================================== Key Point -->

## Key Point (custom element)

The custom element Key Point is super useful while you want to split out a paragraph without using the Heading or Strong Text. It also can keeps your mind clear from the sense of overly using the Strong Text or Heading. The usage is very similar to the HTML Description List element.

3 best timing to use the Key Point:

1. To keep *multiple paragraph* of content stay within *one heading*.
2. To *explain a part of knowledge* that with *multiple key points* and each one have *a paragraph of description*.
3. To avoiding using Strong Text to *create a paragraph*. (keep your strong text only appear within a paragraph content.)

![KeyPoint_batch](https://user-images.githubusercontent.com/86870826/154923587-64b8be8e-e384-4667-9efe-77638eeb9642.png)

### How to use

1. The custom element name `kp` stands for *Key Point*.
2. I recommend **only** use it at *the beginning of line*.
3. It **cannot** be used within *any other block elements* such as Custom Title Block, Spoiler Block, Sticky Notes, etc...

**Code Sample:**

```
<kp>The Key Point</kp>- with a short description here.

<kp>The Key Point</kp>
With a paragraph of description here. Let the Ket Point on top of the paragraph to keep it more eye-catching from the paragraph.

<kp>The Key Point with multiple paragraphs of description</kp>

When you have a Key Point which is a whole sentence and you need more than one paragraph to describe it, you better to add a blank line between them.

It's make sense right? I hope you would enjoy to use this Key Point feature, and not to use the Strong Text to create a paragraph separation any more!
```

**Output:**

![KeyPoint_SampleCodeOutput_batch](https://user-images.githubusercontent.com/86870826/154923682-a8c1aeb7-9f0e-4571-88be-d43457144838.png)

Tips: It would be great to wrok together with the Horizontal Line `***`.


[:arrow_up:Back](#table-of-contents)

<!-- ======================================================================================================================================== Abstract Content Bar -->

## Abstract Content Bar

Abstract Content Bar helps you to identify the elements through the color bar which would be appearing on the right of the Markdown Editor. It will check your text line by line and then tell you what they are:

![AbstractContentBar_batch_batch2](https://user-images.githubusercontent.com/86870826/154956094-ef6c4852-1b7f-425f-bcd0-c46f83b79f75.png)

It would be helpful when you want to release your eyes from the text for sometimes, or when you are going to double-check the missing part of your content.

### How to use

1. The only thing you may need to do is to understand those colors' meanings.
2. If there is more than one element in the same line, it would be showing the color depending on their priority.

![AbstractContentBar_Priority_batch2](https://user-images.githubusercontent.com/86870826/166906072-2b6daa1c-4ac3-494c-8bef-0ec10b180b42.png)

(bigger number means higher priority)


[:arrow_up:Back](#table-of-contents)

<!-- ======================================================================================================================================== Customizable Heading -->

## Customizable Heading

Headings are the most important things to boost your reading mood. Since OhmineDT v3.0.0, you can easily customize the `color:`, `font-size`, `border` of headings. Let's check out what the headings look like: 

Heading samples (with border):

![CustomizableHeading_Border_batch](https://user-images.githubusercontent.com/86870826/154966809-c90891bc-8438-408d-8ed6-95d84b060777.png)

Heading samples (without border):

![CustomizableHeading_batch](https://user-images.githubusercontent.com/86870826/154966821-334f60db-eb17-4bc4-ad01-17adb8bb0774.png)

You can quick customize all of the heading's border through the CSS root section, below list out all the heading switchers for reference:

|Root Property|Value(ON)|Value(Off)|Description|
|-|-|-|-|
|--switcher-h1-font-variant: |small-caps;  |none;|turn on/off the small-caps effect of h1 heading|
|--switcher-h1-text-fill-color: |transparent; |none; | turn on/off heading gradient color effect|
|--switcher-h1-border-display: |block; |none; | show/hide h1 heading border|
|--switcher-h2-rice-icon-display: |inline-block; |none; | show/hide h2 heading rice icon|
|--switcher-h2-border-display: |block; |none; | show/hide h2 heading border|
|--switcher-h3-border-display: |block; |none; | show/hide h3 heading border|
|--switcher-h4-border-display: |block; |none; | show/hide h4 heading border|
|--switcher-h5-border-width: |1px; |0; | show/hide h5 heading border|
|--switcher-h6-border-width: |1px; |0; | show/hide h6 heading border|
|--switcher-mde-h1-font-variant: |small-caps; |none;|turn on/off the small-caps effect of h1 heading on Markdown editor|
 

[:arrow_up:Back](#table-of-contents)

<!-- ================================================================================================================================================ Markdown TOC -->

## Floating Markdown TOC

Joplin provides us a great built-in Markdown TOC feature which let you create the TOC by typing a simple command `[[toc]]` within your notes. OhmineDT has restyle it and made it floating at the bottom left of the Render Viewer.

![MarkdownToc_batch](https://user-images.githubusercontent.com/86870826/156605359-ce769aa2-e297-474a-83a2-6ad8e9fb1b74.png)

The Markdown TOC feature is disable by Joplin default. To use the Markdown TOC, you should enable the the extension manually.

Related Switchers:

|Root Property|Value(ON)|Value(Off)|Description|
|-|-|-|-|
|--switcher-markdown-toc-position-left: | 0;  | none;| turn on/off to position the markdown TOC button to the left/right |
|--switcher-markdown-toc-link-text-wrap: | normal; | nowrap; | turn on/off the wrap text of the Markdown TOC link text |

[:arrow_up:Back](#table-of-contents)

<!-- =============================================================================================================================================== Eye-Protector -->

## Eye-Protector

All attached images and mermaid charts will default to 20% darker than the original, to avoid bright light flickering your eyes while reading the notes. Hovering over them will restore the original brightness slowly.

Since OhmineDT v3.0.0, the Eye-Protector effect's switcher is split out into two, so you would be allowed to turn one of them on/off.

![EyeProtector](https://user-images.githubusercontent.com/86870826/154980775-2df6b700-ae1a-4a4d-b0f8-a9f99a60484f.jpg)

You can quick customize the eye-protector effects through the CSS root section, below list out all the eye-protector switchers for reference:

|Root Property|Value(ON)|Value(Off)|Description|
|-|-|-|-|
|--switcher-eye-protector-for-images-filter:|brightness(25%);|none;|turn on/off the reduce raw brightness effect on attached image|
|--switcher-eye-protector-for-images-animation:|eye-protector 1.5s forwards 1;|none;|turn on/off the brightness increasing hover effect on attached image|
|--switcher-eye-protector-for-mermaid-filter:|brightness(25%);|none;|turn on/off the reduce raw brightness effect on mermaid chart|
|--switcher-eye-protector-for-mermaid-animation:|eye-protector 1.5s forwards 1;|none;|turn on/off the brightness increasing hover effect on mermaid chart|

  
[:arrow_up:Back](#table-of-contents)

<!-- ============================================================================================================================================ MORE SCREENSHOTS -->
<!-- ============================================================================================================================================== Notebook Panel -->

## Notebook Panel

The CSS styling of Ohmine Dark Theme will only support up to 15 levels of subdirectories when Joplin didn't limit it to you. And sure, you can edit my CSS to fit your needs.

Since OhmineDT v3.0.0, you can now using `Shift` + `Scroll` to check out the overflow text from notebook panel.

![OhmineDarkThemeForJoplin_batch2](https://user-images.githubusercontent.com/86870826/154982521-3ea4f9c0-4d60-4915-8d3a-555126cbb7dd.png)


[:arrow_up:Back](#table-of-contents)

<!-- ========================================================================================================================================= Special Text Styles -->

## Special Text Styles

Joplin didn't provide enough CSS classes for styling the special text in Markdown Editor, so the styling of this part is relying on another plugin to get complete. That means you must download and install the plugin named Rich Markdown to get the style works.

Special Text is including the below: 

- Emphasize Text (`*emphasize*`)
- Strong Text (`**strong**`)
- Insert Text (`++insert++`)
- Strikethrough Text (`~~strikethrough~~`)
- Abbreviation Text (`*[abbreviation]: description`)
- Mark Text (`==mark==`)
- Inline Code Text (`` `inline code` ``)
- Search Text (Search Results) 
- Math Notation Text (`$$math notation$$`)

First to see how they look like in the Render Viewer:

![SpecialText_RenderViewer_batch](https://user-images.githubusercontent.com/86870826/154982853-9aaa2b0a-89a3-45cb-9613-6d2574581cc9.png)

And the Math Notation Text on Render Viewer:

![MathNotation_batch](https://user-images.githubusercontent.com/86870826/154982877-9b1f6211-2a65-4833-b1ca-d9f3d06ad7cd.png)

Since OhmineDT v3.0.0, the special text styles have changed on the markdown editor. Emphasize, Strong, Insert, Strikethrough, Mark, Abbreviation, they are now all grouped into the same color and using the dotted underline, and more clearly differentiated from the look of the search text.

See how they look like in the Markdown Editor:

![SpecialText_MarkdownEditor_batch_batch](https://user-images.githubusercontent.com/86870826/154982911-1375ad7b-0cb2-49cf-b6b8-aa5d32baa623.png)


[:arrow_up:Back](#table-of-contents)

<!-- ======================================================================================================================================================== Link -->

## Link

![Link Footnote_batch](https://user-images.githubusercontent.com/86870826/154984206-e9a60b8d-7ff9-446e-8711-d3a80963b70d.png)

Related Switchers:

|Root Property|Value(ON)|Value(Off)|Description|
|-|-|-|-|
|--switcher-link-bracket-display:| inline; | none; | turn on/off the effect of automatically adding the monospace bracket to links |
|--switcher-link-break-word: | break-all; | break word; | turn on/off to set how a line break present on the link text |

[:arrow_up:Back](#table-of-contents)

<!-- =============================================================================================================================== Unordered List & Ordered List -->

## Unordered List & Ordered List

![UnorderedList OrderedList_batch](https://user-images.githubusercontent.com/86870826/154984293-2267e4da-02b1-4f1c-9f80-97010790b70d.png)


[:arrow_up:Back](#table-of-contents)

<!-- =================================================================================================================================================== Checklist -->

## Checklist

![Checklist_batch](https://user-images.githubusercontent.com/86870826/154984371-482649d7-8f68-4f2e-a675-e5a37b137611.png)


[:arrow_up:Back](#table-of-contents)

<!-- ================================================================================================================================================== Blockquote -->

## Blockquote

![Blockquote_batch](https://user-images.githubusercontent.com/86870826/154984407-45ed62e4-5f04-4638-8f34-35bf9b82df8a.png)


[:arrow_up:Back](#table-of-contents)

<!-- ==================================================================================================================================== Code block & Inline Code -->

## Codeblock

![CodeBlock_batch](https://user-images.githubusercontent.com/86870826/154984900-e07387d1-72f3-40a3-849b-14ada8ac31c1.png)


[:arrow_up:Back](#table-of-contents)

<!-- =========================================================================================================== Change Your Joplin Settings Before Using OhmineDT -->

## Change Your Joplin Settings Before Using OhmineDT

OhmineDT has been styling lots of Joplin elements, and all of them are helpful to you. Some of the effects are highly rely on the Joplin built-in settings to get work, so you may need to follow the below guides to get 100% of what OhmineDT brings to you!


### Appearance

OhmineDT needs to run with the Joplin built-in Dark theme. Otherwise, it might cause some of the colors abnormal.

1. Open Joplin
2. Go to `tools` > `Options` >`Appearance` > `Theme`
3. Choose `Dark`
4. Click `Apply`

### Markdown

OhmineDT has styled the Special Text, but some of them didn't turn on by Joplin default, so you should turn them on manually.

1. Open Joplin
2. Go to `tools` > `Options` >`Markdown` 
3. Enable all of the below: 

	- `Enable math expressions (wysiwyg: yes)`
	- `Enable Mermaid diagrams support (wysiwyg: yes)`
	- `Enable ==mark== syntax (wysiwyg: yes)`
	- `Enable footnotes (wysiwyg: no)`
	- `Enable table of contents extension (wysiwyg: no)`
	- `Enable ~sub~ syntax (wysiwyg: yes)`
	- `Enable ^sup^ syntax (wysiwyg: yes)`
	- `Enable abbreviation syntax (wysiwyg: no)`
	- `Enable ++insert++ syntax (wysiwyg: yes)`

4. Click `Apply`

### Other Plugins

OhmineDT can be styling everything on the Joplin UI but not within the plugins, so if you want your plugin's background color to match with OhmineDT, you should set it manually.

1. Open Joplin
2. Go to `tools` > `Options` >`Plugins` > Whatever plugins that let you change the background color
3. Set the plugin background-color value to `#191919`
4. Click `Apply`


[:arrow_up:Back](#table-of-contents)

<!-- =============================================================================================================== OhmineDT Picks The Best Reading Fonts For You -->

## OhmineDT Picks The Best Reading Fonts For You

OhmineDT has spent almost a week searching and testing fonts before public release. Everything I test on this theme are based on these fonts, so I honestly recommend you use the fonts below:

- Montserrat - It's for the Non-Monospace font family
- Cascadia Mono - It's for the Monospace font family
- Chiron Sans HK Pro - for both Traditional and Simplified Chinese

They are all included in the [repository package](https://github.com/Nacandev/Ohmine-Dark-Theme-For-Joplin). You can download it by clicking `code` > `Download ZIP`, but you may need to install them to your computer manually.

Or, In case you want to download it directly from the official page: 

- [Google Fonts: Montserrat](https://fonts.google.com/specimen/Montserrat?query=montserrat)
- [Github Repository/Microsoft/Cascadia-Code: Cascadia Mono](https://github.com/microsoft/cascadia-code/releases)
- [Github Repository/chiron-fonts: Chiron Sans HK Pro](https://github.com/chiron-fonts/chiron-sans-hk-pro)


[:arrow_up:Back](#table-of-contents)

<!-- ===================================================================================================================== These Plugins Are Important to OhmineDT -->

## These Plugins Are Important to OhmineDT

OhmineDT has additional CSS codes that are written for some useful plugins. So, I would recommend you download the below plugins!

To quickly install and setting all the plugins, please follow the below one-flow steps:

1. Open Joplin
2. Go to `tools` > `Options` > `Plugins`
3. Search the plugin by inputting the word `rich`
4. Click `Install` on the `Rich Markdown`
5. Search the word `html`
6. Click `install` the `Quick HTML Tags`
7. Search the word `color`
8. Click `install` the `Markdown Table: Colorize`
9. Search the word `spoiler`
10. Click `install` the `Spoiler`
11. Search the word `turn`
12. Click `install` on the `TurnToChart`
13. Quit and restart Joplin
14. Go to `Tools` , `Options`, `Rich Markdown`
15. Enable the `Add additional CSS classes for enhanced customization`
16. Click `Apply`
17. Copy this line of text:  `kp;span;ctb;ag;note;tip;explain;question;keyword;important;`
18. Go to `Tools` > `Options` > `Quick HTML Tags`
19. Go to `HTML predefined tags` 
20. Paste the text into the input bar
21. Click `OK`

Then, you can still check out below to know more about how those plugins work with OhmineDT.

[:arrow_up:Back](#table-of-contents)

***

### Rich Markdown

This plugin has provided several great features. OhmineDT is relying on this plugin to style the Special Text and Abstract Content Bar because Joplin didn't give the CSS classes to specify those elements. So, it might cause some styles missing from OhmineDT while you didn't install this plugin, or you didn't enable the settings. 

Quick setting up:

1. Open Joplin
2. Go to `tools` > `Options` > `Plugins`
3. Search the plugin by inputting the word `rich`
4. Click `Install` on the `Rich Markdown`
5. Quit & restart Joplin app
6. Go to `Tools` , `Options`, `Rich Markdown`
7. Enable the `Add additional CSS classes for enhanced customization`
8. Press `OK` it's done!


[:arrow_up:Back](#table-of-contents)

***

### Quick HTML Tags

This plugin provides you with a quick and easy way to create HTML tags in your notes, and it's helpful to create the custom elements of OhmineDT.

Quick setting up:

1. Copy this line of text:  `kp;span;ctb;ag;note;tip;explain;question;keyword;important;`
2. Open Joplin
3. Go to `Tools` > `Options` > `Plugins`
4. Search plugin by input the word `html`
5. Click `Install` which on the `Quick HTML Tags` plugin
6. Quit & restart Joplin app
7. Go to `Tools` > `Options` > `Quick HTML Tags`
8. Go to `HTML predefined tags` 
9. Paste the text in the input bar
10. Press `Ok` it's done!

After this, you can use this plugin like below:

1. Whenever you want to use an HTML tag just press  `ctrl + h`
2. Then, press the `Down` key on your keyboard to find the right tag
3. Press the `Enter` key. It's done!

Please mention that the `<ag>` is not a complete custom element name. You should add a number on it every time, such as `<ag4>`, `<ag8>` etc... Art Gallery lets you create 2 to 12 columns for images, so each time you create an `ag` tag with the Quick HTML Tags plugin, just don't forget to give it a number.


[:arrow_up:Back](#table-of-contents)

<!-- ===================================================================================================================================== Markdown Table Colorize -->

***

### Markdown Table Colorize

This plugin adds colors to Joplin markdown table syntax so you can quickly identify what column the content belongs to.

Sometimes, Markdown table syntax can be very messy when too much information is within the table. Thanks to the Markdown Table Colorize plugin, OhmineDT can create a better style for the markdown table now!

After installing the Markdown Table Colorize plugin and OhmineDT, you will see the markdown table syntax looks like below:

![Table_batch_batch](https://user-images.githubusercontent.com/86870826/154995262-c1a45bdc-f153-4d73-b4bc-4cf25dfc897a.png)

- Separating table rows into independent sections
- Use colored letters as a column mark
- Support up to 20 columns

**Use Tips:**

I would like to share the steps of how I create a markdown table. And these steps are perfect for use with this plugin style.

First to create the table structure:

```
||||||
||||||
||||||
```

Then, add the format to it:

```
||||||
|-|-|-|-|-|
||||||
```

Last, add content to it:

```
|TH|TH|TH|TH|TH|
|-|-|-|-|-|
|TD|TD|TD|TD|TD|
```

Quick setting up:

1. Open Joplin
2. Go to `tools` > `Options` > `Plugins`
3. Search the plugin by inputting the word `color`
4. Click `Install` on the `Markdown Table: Colorize`
5. Quit & restart Joplin app


[:arrow_up:Back](#table-of-contents)

<!-- ===================================================================================================================================================== Spoiler -->

***

### Spoiler

This plugin allows you to create inline spoilers and spoiler blocks with title and extendable body. And the below shows what Spoiler looks like in OhmineDT:

Let's take a look to the spoiler block:

![Spoiler_batch](https://user-images.githubusercontent.com/86870826/154995520-d2fe072a-f0c5-4d9d-bd20-2fa2f494f4f3.png)

In addition, OhmineDT has been created 4 more custom styles that you can use within the Spoiler block for advanced usage:

1. Spoiler Block > Span
2. Spoiler Block > List
3. Spoiler Block > List > Span
4. Spoiler Block > Custom Title Block

![Spoiler_AdditionalStyles_batch](https://user-images.githubusercontent.com/86870826/154995550-d331f86b-94c1-4b74-88ab-a158e53b4cb1.png)

1. Open Joplin
2. Go to `tools` > `Options` > `Plugins`
3. Search the plugin by inputting the word `spoiler`
4. Click `Install` which is on the `Spoiler`
5. Quit & restart Joplin app


[:arrow_up:Back](#table-of-contents)

<!-- ====================================================================================================================== Think Before Using The Custom Elements -->

## Think Before Using The Custom Elements

OhmineDT provides some of the features that function by Custom Elements. I recommend you use it to create a better reading experience, but first, you have to consider the below:

1. Not all Markdown editor software support using Custom Elements.
2. Custom Elements content will become plain text format when you export your notes to `.md` file or transfer your notes to other software.
3. Even if other note-taking software is supported using Custom Element you may need to copy the related codes to that software manually.

So, if you are only taking notes within Joplin, you don't have to worry about that. Otherwise, you should consider which notes you should use Custom Elements and which don't.


[:arrow_up:Back](#table-of-contents)

<!-- ============================================================================================================================================ MORE INFORMATION -->
<!-- ============================================================================================================================================== About Printing -->

## About Print & Export

Here are a few things you should know before you **Print** or **Export** a note to PDF :

1. There are some "Switcher" within the `root` section of  `userstyle.css`, and they help you quickly define what should show on the PDF:

|Root Property|Value(ON)|Value(OFF)|Description|
|-|-|-|-|
|--switcher-print-note-title-display:|block; | none; | show/hide the notebook title |
|--switcher-print-sticky-notes-display:|block; | none; | show/hide the sticky notes |
|--switcher-print-h1-border-display:|block; | none; | show/hide the h1 heading border |
|--switcher-print-link-href-display:|inline; | none; | show/hide the link href after the link text |
|--switcher-print-markdown-toc-display:|block; | none; | show/hide the markdown toc|
  
2. *Art Gallery* and *Code Block* are default to releasing the overflow limit, and listing out all the content.
3. Various elements are *standalone* restyled for print/export PDF.
4. By Joplin default, you can't select and copy the text if you are using the `print` to create a PDF file. If you expect to create a PDF file that allows you to do it, please use the `export`.
5. By the Spoiler plugin default, Spoiler Block will only appear normal when you use `export`.
6. By the Spoiler plugin default, Inline Spoiler will not show the text.
7. By the TurnToChart plugin default, the chart will only appear normal when you use `export`.


Export PDF Sample: [export_pdf_v3.1.28](https://drive.google.com/file/d/1TltcC2I-Aspd-jQBe8IgfNe1P1p70VHW/view?usp=sharing) (26-FEB-2022)

Export HTML Sample: [export_html file_v3.1.28](https://drive.google.com/file/d/1xmFYSE-ttIEBRpfOb6APpdhtVib2mTuF/view?usp=sharing) (26-FEB-2022)


[:arrow_up:Back](#table-of-contents)


<!-- =========================================================================================================================== Quick Guide To Customize OhmineDT -->

## Quick Guide To Customize OhmineDT

This is a quick guide for CSS beginners, please mention that this is only guiding you to edit OhmineDT and not a complete CSS tutorial.

OhmineDT put all the hot properties within the `:root` section, you might find them at the top of the source code on both `userstyle.css` and `userchrome.css` documents. Before you try to customize it, you may need to understand some basic concepts of CSS below:

- Property - This is a name that tells you what is the property for. 
- Value - Every property should have a value to get it to work.
- Comments - Used to explain the code, and may help when you edit the source code at a later date.

When you see the property name start with two hyphens in the `:root` section, that is a root property name (or variable name), for example:

- `--h1-font-size:`
- `--h1-text-color:`

Right behind a root property, you may see a value, for example:

- `14px;`
- `#bdbdbd;`

When combining the property and value, we call that a "declaration", for example:

- `--h1-font-size: 14px;`
- `--h1-text-color: #bdbdbd;`

When you see the text starts with `/*` and ends with `*/`, we call it a comment, for example:

- `/* This is a font size setting for h1 heading */`
- `/* This is the color value of h1 heading */`

And combining all together, that's all you will see within the `:root` section, for example:

- `--h1-font-size: 14px; /* This is a font size setting for h1 heading */`
- `--h1-text-color: #bdbdbd; /* This is the color value of h1 heading */`

And the comments are always describe the declaration which is *under* or *in front of* it , for example:

```
:root {
	/* headings -------------------------------------------- */
	--h1-font-size: 14px; /* This is a font size setting for h1 heading */
	--h1-text-color: #bdbdbd; /* This is the color value of h1 heading */

	/* paragraph ------------------------------------------- */
	--paragraph-text-color: #bdbdbd;
}
```

Additionally, you may see a declaration like below:

```
--h3-border-color: var(--h2-border-color);
```

It means the `--h3-border-color` is equal to `--h2-border-color`.

Finally, when you are going to customize this theme, all you have to do is to ***give the property a right value***. And due to that, you have to learn about how to do this.

There are two kinds of values you may use in the OhmineDT:

**SIZE:**

CSS is providing many different units of size values, but here you might only use the below serval units to customize OhmintDT:

|Size Units|Description|
|-|-|
|px|pixels|
|em|Relative to the font-size of the element (2em means 2 times the size of the current font)|
|%|Relative to the parent element|
|vh|Relative to 1% of the height of the viewport(depends on the browser window size)|
|vw|Relative to 1% of the width of the viewport(depends on the browser window size)|

For reference, you can go to visit this page: [CSS units](https://www.w3schools.com/cssref/css_units.asp) 

**COLOR:**

CSS also provides many color values, but you may just learn the HEX Color Code and Gradient Color is enough to customize OhmineDT. For reference, you can go to visit this page: [HEX Color](https://www.w3schools.com/colors/colors_hexadecimal.asp) & [Gradient Color](https://www.w3schools.com/colors/colors_gradient.asp)

Overall, when you are customizing the color, then give it the right color value; when you are customizing the size, then give a size value etc... Let's open the CSS file, read the comments, and then edit it, It's that easy!

1. Open Joplin
2. Go to `Tools` > `Options` > `Appearance`
3. Click `Show Advance Settings`
4. Click `Custom Stylesheet for Rendered Markdown` to open the `userstyle.css`
5. Click `Custom Stylesheet for Joplin-Wide App Styles` to open the `userchrome.css`

P.S. After edit the CSS document, you should quit & restart Joplin.


[:arrow_up:Back](#table-of-contents)

<!-- =========================================================================================================================================== Why Using Joplin? -->

## Why Using Joplin?

![home-top-img-2x](https://user-images.githubusercontent.com/86870826/135713998-ececa8e9-b79a-4b0f-a95d-ee54ca1271b3.png)
Joplin is the best note-taking app in the market if you are looking for the below advantages:

- Free & Opensource
- Multiple text editors (Rich Text and Markdown)
- End-To-End Encryption to secure your notes
- Cross platforms app that available on Windows, macOS, Linux, Android, iOS, and terminal.
- Synchronizing with various services, including Joplin Cloud, Dropbox, OneDrive, Next cloud...
- Take screenshots and save web pages as note with a Web Clipper browser extension.
- Customize the app with your own scripts and plugins using the Extension API.
- Or... ***You love the Ohmine Dark Theme***  :sunglasses::heart:
- And much more...

It can be covering all your needs in note-taking! Especially the privacy protection!

Visit [Joplin Homepage](https://joplinapp.org/) for more details.


<!-- ========================================================================================================================================================= FAQ -->
<!-- =================================================================================================================================== How to install this theme -->

## How to install this theme?

1. Open Joplin
2. Go to `tools` > `Options` >`Appearance` > `Theme`
3. Choose `Dark`
4. Click `Apply`
5. In the same page, click `Show Advanced Settings`
6. Click `Custom stylesheet for rendered Markdown` , it will open a `userstyle.css`
7. Copy my `userstyle.css` codes on this page: https://github.com/Nacandev/Ohmine-Dark-Theme-For-Joplin/blob/main/userstyle.css
8. Paste my codes on your `userstyle.css`
9. Back to the `Appearance` page again
10. Click `Custom stylesheet for Joplin-wide app styles` . it will open a `userchrome.css`
11. Copy my `userchrome.css` codes on this page: https://github.com/Nacandev/Ohmine-Dark-Theme-For-Joplin/blob/main/userchrome.css
12. Paste on your `userchrome.css`
13. Quit & restart Joplin and it's done.


[:arrow_up:Back](#table-of-contents)

<!-- ==================================================================================================================================== How to delete this theme -->

## How to delete this theme?

1. Go to `Tools` > `Options` > `Appearance` 
2. Click `Show Advanced Settings`
3. Click `Custom stylesheet for rendered Markdown` , it will open a `userstyle.css`
4. Click `Custom stylesheet for Joplin-wide app styles` . it will open a `userchrome.css`
5. Delete all the related codes within these two documents.
6. It's done! but I'm hurt!

[:arrow_up:Back](#table-of-contents)

<!-- =============================================================================================================================== How to install Joplin plugins -->

## How to install Joplin plugins?

1. Go to `Tools` > `Options` > `Plugins`
2. Search a plugin name
3. Click `Install`
4. After installing all you need, quit & restart Joplin app

If you want to discover all of the Joplin plugins, you can go visit the [Joplin Plugins Repository](https://github.com/joplin/plugins#joplin-plugin-repository)

[:arrow_up:Back](#table-of-contents)

<!-- ================================================================================================================== Will this theme develop as a Joplin plugin -->

## Will this theme develop as a Joplin plugin?

The answer is "DEFINITELY YES!" And the `OhmineDT v3.0.0` updates is the first step to doing this.

<!-- =========================================================================================================================================== How to contribute -->

## How to contribute

### Give me a user feedback

Whatever you like this theme or not, I'll open my mind to accept any of your comments and treat your feeling as mine. It would be my pleasure if I could get any feedback from you! Go to leave me a message on [Joplin Forum](https://discourse.joplinapp.org/t/css-theme-ohmine-dark-theme/21000) or [Github Discussions](https://github.com/Nacandev/Ohmine-Dark-Theme-For-Joplin/discussions/new)

### Report Bugs

If you experiencing any bugs or bad issues while using this theme, please create a bug report on [issues page](https://github.com/Nacandev/Ohmine-Dark-Theme-For-Joplin/issues/new/choose) and let me know it.

[:arrow_up:Back](#table-of-contents)
