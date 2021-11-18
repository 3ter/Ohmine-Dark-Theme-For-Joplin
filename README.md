# Ohmine Dark Theme for Joplin

Ohmine Dark Theme is a Joplin CSS theme that aims to provide a better Work-On-Screen experience for those who want to treat their eyes better.

"Notes are my mind, and I want to be able to spend more time with it every day."

![2021-10-02 (71)_abg](https://user-images.githubusercontent.com/86870826/135724024-bf6631a1-b1df-4170-b748-3751f82e791a.png)


<!-- ======================================================================================================================================================== Latest Released -->

## Latest Released

OhmineDT-v2.2.5 updates (19-NOV-2021 tested on Joplin v2.5.12)

- New: add styling for [Markdown Table Colorize](#markdown-table-colorize) plugin - to create the best markdown table experience!
- New: add new CSS variables to the `root:` section of both `userchrome.css`
- Fix: table text color is unclear when using the Markdown Table Colorize plugin
- Fix: sync button style missing
- Change: remove notebook navigation button animation
- Change: mouse hover sync button to trigger animation

<!-- ================================================================================================================================================= Not a Joplin user yet? -->

## Not a Joplin user yet?

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

<!-- ====================================================================================================================================================== Table of contents -->

## Table of contents

- DESIGN
	- [The Inspiration of Ohmine Dark Theme](#the-inspiration-of-ohmine-dark-theme)
	- [Markdown Editor](#markdown-editor)
	- [Render Viewer](#render-viewer)
	- [Font Family](#font-family)
- FEATURES
	- [Sticky Notes (custom element)](#sticky-notes-custom-element)
		- [How to use](#how-to-use) 
	- [Custom Title Block (custom element)](#custom-title-block-custom-element)
		- [How to use](#how-to-use-1)
	- [Art Gallery (custom element)](#art-gallery-custom-element)
		- [How to use](#how-to-use-2) 
	- [Abstract Content Bar](#abstract-content-bar)
		- [How to use](#how-to-use-3) 
	- [Structural-friendly heading style](#structural-friendly-heading-style)
		- [How to use](#how-to-use-4) 
	- [Span](#span)
		- [How to use](#how-to-use-5)
	- [Eye-Protector](#eye-protector)
- PLUGIN STYLES
	- [Spoiler](#spoiler)
	- [Markdown Table Colorize](#markdown-table-colorize)
- MORE SCREENSHOTS
	- [Notebook Panel](#notebook-panel)
	- [Text Style](#text-style)
	- [Link](#link)
	- [Unordered List & Ordered List](#unordered-list--ordered-list)
	- [Checklist](#checklist)
	- [Blockquote](#blockquote)
	- [Code block & Inline Code](#code-block--inline-code)
	- [Math notation](#math-notation)
	- [Markdown TOC](#markdown-toc)
- MORE INFORMATION
	- [Requirements of Ohmine Dark Theme](#requirements-of-ohmine-dark-theme)
	- [Must Knows About Custom Element](#must-knows-about-custom-element)
	- [About Printing](#about-printing)
	- [Recommended plugins](#recommended-plugins)
		- [Quick HTML tags (most recommended to use with this theme)](#quick-html-tags-most-recommended-to-use-with-this-theme)
- FAQ
	- [How to install this theme?](#how-to-install-this-theme)
	- [How to delete this theme?](#how-to-delete-this-theme)
<!-- 	- [How to customize this theme?(Coming Soon...)](#how-to-customize-this-theme) -->
	- [How to install Joplin plugins?](#how-to-install-joplin-plugins)
	- [How to contribute?](#how-to-contribute)
		- [Give me a user feedback](#give-me-a-user-feedback)
		- [Report Bugs](#report-bugs)

<!-- ================================================================================================================================================================= DESIGN -->
<!-- =================================================================================================================================== The Inspiration of Ohmine Dark Theme -->

## The Inspiration of Ohmine Dark Theme

The design inspiration comes from the below Japanese Sake Ohmine-3-Grain: 


![Ohmine-3-Grain_500](https://user-images.githubusercontent.com/86870826/134671847-8748e277-1bbf-4c2a-9ad4-14899f09e12e.png)



This is a gift from my friend and I was tasting it when I making this theme. I pretty much love the whole design series of Ohmine-3-Grain and this is originally designed by *Stockholm Design Lab*.

<img width="520" alt="ohmine-3-grain-reference_800" src="https://user-images.githubusercontent.com/86870826/134672093-8a9a0405-d9a1-4c7c-9d90-0ac4002c9545.png">

If you are interested to know more about the Ohmine-3-Grain design you may like to check out the below links:

[Stockholm Design Lab - Ohmine page](https://www.stockholmdesignlab.se/work/ohmine)

[Ohmine Official Video on Youtube](https://www.youtube.com/watch?v=L4TtyOKgv9s)

[:arrow_up:Back](#table-of-contents)

<!-- ======================================================================================================================================================== Markdown Editor -->

## Markdown Editor

Markdown Editor is the place where your eyes will always keep focus for a long time when you are writing your Markdown notes. It's means the Markdown Editor is always the key point to protect your eyes.

- Have you ever felt distressed because you still want to write notes when you have blurred vision?
- Have you ever felt that visual messy because of using Markdown Syntax to create complex notes?
- Do you want to experience the feeling of focusing on writing notes for a long time without feeling tired?

Ohmine Dark Theme is completely designed to solve these problems. 

The key adjustments for the Markdown Editor as below:

- Reduce the color contrast between the main content and the background
- Darken and reduce fonts for non-essential content
- Reduce the use of unnecessary colors
- Using a MAGICAL background color #151b1a

![2021-10-02 (5)_abg_abg](https://user-images.githubusercontent.com/86870826/135716011-5b4c964d-9ebc-45eb-9cc8-cd3cfa2183d7.png)

I'm choosing this background color based on the needs and not based on my personal favorite. As I tried assorted colors, I think the #151b1a is the most magical one that can always lead me to a deep focus state readily. When you spend an hour working with it, you will feel it.

[:arrow_up:Back](#table-of-contents)

<!-- ========================================================================================================================================================== Render Viewer -->

## Render Viewer

Render Viewer is the place that you often want to quickly find out the correct information. It' means the Render Viewer need a great content separating structure to let you identify the key information easily.

The key adjustments for the Render Viewer as below:

- Use soft colors to differentiate content
- Well-structural heading style
- Stand out the key information
- Avoid bright colors when scrolling down to read content

![2021-10-02 (6)_abg_abg](https://user-images.githubusercontent.com/86870826/135716017-ef57455b-0b9a-4522-b9ef-6084bc874c23.png)

[:arrow_up:Back](#table-of-contents)

<!-- ============================================================================================================================================================ Font Family -->

## Font Family

Ohmine dark theme is using the below font family for both Markdown Editor and Render Viewer:

- Montserrat
  ([download it for free](https://fonts.google.com/specimen/Montserrat))
- Microsoft JHengHei Light (for Traditional Chinese 繁體中文)
- Avenir (Joplin default)
- Arial (Joplin default)
- Sans-Serif (Joplin default)

Montserrat is the most important part in this theme, I recommended you use it on this theme. I've tested over 40 fonts with sizes from 12 to 15px and Montserrat is the ultimate champion. It providing the best reading experience with 14px.

Montseratt sample:

![montserrat_font_sample_abg](https://user-images.githubusercontent.com/86870826/134675707-a3c36272-7219-4fba-9079-f4aa65c20d48.png)

Then, the monospace font is using on all Markdown Syntax, such as a Markdown table, Markdown link etc. You'll also see it in the code block and inline code.

Let's take a look at the monospace font family:

- Cascadia Mono Light
  ([download it for free](https://github.com/microsoft/cascadia-code/releases))
- Monospace (Joplin default)
- Microsoft JHengHei Light (for Traditional Chinese comments 繁體中文註釋)

Cascadia Mono Light is one of the best monospace font. It would be a good choice if you don't need the ligature, and it provides clear symbol characters and works great at the 12px font size.

Cascadia Mono Light sample:

![cascadia_mono_light_font_sample_abg](https://user-images.githubusercontent.com/86870826/134675876-8e6a1593-fbb9-4117-8c91-141a45e1d5dc.png)

If you didn't install the above recommend fonts on your computer, Joplin will pick the default fonts for you.

The settings in `Tools`> `Options`> `Appearance` will no longer work once you installed this theme. You should always edit all the font-related settings through the CSS files. 
(P.S.  `Tools` > `Options` > ` Appearance` > `Editor maximum width` is excepted)

[:arrow_up:Back](#table-of-contents)

<!-- =============================================================================================================================================================== FEATURES -->
<!-- ========================================================================================================================================== Sticky Notes (custom element) -->

## Sticky Notes (custom element)

Ohmine Dark Theme has 7 custom elements for creating the Sticky Notes: `note` , `tip` , `question` , `explain` , `warning` , `keyword` , `important`. They can help you to building the structure of article and only for personal reference. Normally, you would be removing them from the content once you are complete your article. 

Let’s see what are the Sticky Notes for:


![sticky_notes_sample_abg](https://user-images.githubusercontent.com/86870826/141187967-74fb903e-6a1a-4b1d-8baa-cbc09d5b3bc7.png)


### How to use

2 things you should know before use:


1. Make sure there is a blank line *before the open tag*, otherwise it may cause the format problem.
2. Use plain text within a custom element.

**Code Sample:**
 ```
 
 <note> 
 here to type any of your content.
 </note>
 ```

**Output:**

![sticky_notes_sample_output1_abg](https://user-images.githubusercontent.com/86870826/134674519-d88f0cee-ee9d-41e0-85a2-2d2e103ce0f5.png)

[:arrow_up:Back](#table-of-contents)

<!-- ==================================================================================================================================== Custom Title Block (custom element) -->

## Custom Title Block (custom element)
Custom Title Block is a public information for readers, it would be suitable for supplementing information which you think is important to readers. 

Let's see what it looks like:

![custom-title-block-sample](https://user-images.githubusercontent.com/86870826/136669416-8c087607-4657-49e5-8612-75e945ba9635.png)

### How to use

1. The custom element name `ctb` stands for Custom Title Block.
2. Type your title *next to the open tag* .
3. Keep your title *within one line*.
4. Start typing your content *in the second line*.
5. Use plain text within a custom element.

**Code Sample:**
```
<ctb>Your title
Your content
</ctb>
```
```
:[
Custom title block sample

<ctb>Custom Title Block In Spoiler
It's looks different in the spoiler block! 
</ctb>

]:
```

**Output:**

![custom-title-block-outpput](https://user-images.githubusercontent.com/86870826/136669432-24e36c8a-9e75-4235-ab99-99803a1c41c7.png)

![custom_title_block_in_spoiler_sample](https://user-images.githubusercontent.com/86870826/141188768-70e4de89-29c2-410f-9b4b-f2300fc29b71.png)

[:arrow_up:Back](#table-of-contents)

<!-- =========================================================================================================================================== Art Gallery (custom element) -->

## Art Gallery (custom element)

This art gallery providing 5 custom elements for you:

| Custom Elements | Columns Limit |       Gallery Size       | Scrolling Trigger (split layout) |
|:---------------:|:-------------:|:------------------------:|:--------------------------------:|
|       ag2       |       2       | W:100% * H:60vh + Scroll |          2 images above          |
|       ag3       |       3       | W:100% * H:60vh + Scroll |          6 images above          |
|       ag4       |       4       | W:100% * H:60vh + Scroll |         12 images above          |
|       ag5       |       5       | W:100% * H:60vh + Scroll |         20 images above          |
|       ag6       |       6       | W:100% * H:60vh + Scroll |         30 images above          |

(The data is based on the default margin value of editor in split layout.)

Below is the sample of the art gallery(ag6) with 48 images: 

![art_gallery_sample_abg](https://user-images.githubusercontent.com/86870826/134674614-dfb4a385-882c-4bb0-a05d-3d3d401dbdae.png)

### How to use

3 things you should know before use:

1. The custom element name `ag` stands for *Art Gallery*.
2. The art gallery tag must use *right behind the plain text* .
3. Do not including any blank line within this part of codes, *blank line will break the format* .

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

![art_gallery_output_abg](https://user-images.githubusercontent.com/86870826/134674925-7136494b-9ca1-4694-9ba1-e95ea285364a.png)

[:arrow_up:Back](#table-of-contents)

<!-- =================================================================================================================================================== Abstract Content Bar -->

## Abstract Content Bar

Abstract Content Bar helps you to identify the elements through the color bar in the markdown editor.

It will check your text line by line and then tell you what they are:

(bigger number means higher priority)

![2021-10-02 (3)_abg](https://user-images.githubusercontent.com/86870826/135714146-21eafb39-fd56-4764-bf27-513ecd361f47.png)

See the below example screenshot (look to the right):

![abstract_content_bar_sample](https://user-images.githubusercontent.com/86870826/135735799-8c4b7110-84c2-4b38-8a68-3da96d479667.png)

It would be helpful when you want to release your eyes from the text for sometimes, or when you are going to double-check the missing part of your content.

### How to use

2 things you should know before use:

1. If there is more than one element in the same line, it would be showing the color depends on their priority.
2. The only thing you may need to do is to understand those colors' meanings.

[:arrow_up:Back](#table-of-contents)

<!-- ====================================================================================================================================== Structural-friendly heading style -->

## Structural-friendly heading style

Here showing the heading samples:

![headings_sample_abg](https://user-images.githubusercontent.com/86870826/134675579-30beeb52-3886-4641-b79b-d426331c08b6.png)

### How to use

Due to the style of headings, something you may need to consider when every time you are going to use the H4 heading: 

1. If the H4 heading is the last level heading of your article, use H4.
2. If not, use the H5 to replaced the H4 to create a better reading experience.

[:arrow_up:Back](#table-of-contents)

<!-- =================================================================================================================================================================== Span -->

## Span

There are 4 situations you may want to use the span tag to separating the content:

1. When you want to use an emoji on the H1 heading
2. When you want to create a heading within the [spoiler block](#spoiler) - It wouldn't be treat as a heading in the Outline plugin
3. When you want to split out the side information within a list
4. When you want to split out the side information within a list which is in the [spoiler block](#spoiler)

### How to use

If you are using span in the H1 heading or in a list:
- You can start an open tag in a new line but don't including any blank line between the paragraph content and span content.

If you are using span in the spoiler block to create a heading:
- Please always start an open tag in a new line.

**Sample Code:**
```
- If you want to separate a content to describe the list item
<span>you should use a span tag like this</span>
- Here is another list item
```
```
# Ohmine Dark Theme For Joplin <span>:rocket:</span>
```
```
:[
spoiler block

<span>This is a span in spoiler block looks like</span>

]:
```
```
:[
spoiler block

- Spoiler list item
<span>This is a span within a spoiler list looks like</span>
- Spoiler list item

]:
```
**Output:**

![span-in-a-list-sample](https://user-images.githubusercontent.com/86870826/136670375-00da0920-dd29-44bf-8762-fafaf92adf10.png)

![span-in-h1-heading-sample](https://user-images.githubusercontent.com/86870826/136670451-f7f68c1d-58bc-4a19-adb3-7aaccacc8e62.png)

![span_in_spoiler_sample](https://user-images.githubusercontent.com/86870826/141186027-91542c39-ac66-4830-b124-4be2ef3babaf.png)

![span_in_spoiler_list_sample](https://user-images.githubusercontent.com/86870826/141186050-881c202c-db93-4bf0-adb6-acd690098b1f.png)

[:arrow_up:Back](#table-of-contents)

<!-- ========================================================================================================================================================== Eye-Protector -->

## Eye-Protector

All the attached images and Mermaid Charts will be defaulted by 30% darker than the original, to avoid the bright light flashing your eyes when scrolling down your note.

![eye-protector-sample](https://user-images.githubusercontent.com/86870826/134763020-4662fedb-6bc0-404d-bafc-e16ea5b2ea62.jpg)

Mouse hover on them to check out the original color, it will be getting bright smoothly.

[:arrow_up:Back](#table-of-contents)

<!-- ========================================================================================================================================================== PLUGIN STYLES -->
<!-- ================================================================================================================================================================ Spoiler -->

## Spoiler

OhmineDT has been styling for the Spoiler plugin, please make sure you are already installed this plugin to get it work.

This is a closed spoiler block:

![closed_spoiler_sample](https://user-images.githubusercontent.com/86870826/141187215-b3412759-f494-4f8a-9e17-2810f96eccee.png)

Here showing the inline spoiler and an opened spoiler block:

![opened_spoiler_sample](https://user-images.githubusercontent.com/86870826/141187235-27b61e58-96e7-471a-af53-36fe035d8238.png)

In addition, I've created 4 more custom styles that you can use within the Spoiler block for advanced usage:

1. Span in Spoiler - more details in [Span](#span)
2. Span in Spoiler List - more details in [Span](#span)
3. List in Spoiler - more details in [List](#unordered-list--ordered-list)
4. Custom Title Block in Spoiler - more details in [Custom Title Block](#custom-title-block-custom-element)

[:arrow_up:Back](#table-of-contents)

<!-- ================================================================================================================================================ Markdown Table Colorize -->

## Markdown Table Colorize

OhmineDT has been styling for the Markdown Table Colorize plugin, please make sure you are already installed this plugin to get it work.

Markdown table syntax sometimes can be very messey when too much information within the table. Thanks to the Markdown Table Colorize plugin, I can now create a better style for the markdown table!

After you installed the Markdown Table Colorize plugin, you will see the appearence of markdown table syntax is look like below: 

![markdown_table_colorize_smaple](https://user-images.githubusercontent.com/86870826/142474807-57d5fede-86e3-478c-bb35-7ce990ab15ce.png)

- Separating the independent section for table row
- Use colored letters as a column mark
- Support up to 20 columns table

**Use Tips:**
I would like to share you the steps of how I create a markdown table. And this steps is perfect for using with this plugin style.

First to create the table structure:

```
||||||
||||||
||||||
```

Then, add format in it:

```
||||||
|-|-|-|-|-|
||||||
```

Last, add content in it:

```
|TH|TH|TH|TH|TH|
|-|-|-|-|-|
|TD|TD|TD|TD|TD|
```

[:arrow_up:Back](#table-of-contents)

<!-- ======================================================================================================================================================= MORE SCREENSHOTS -->
<!-- ========================================================================================================================================================= Notebook Panel -->

## Notebook Panel

The CSS styling of Ohmine Dark Theme will only support up to 10 levels of subdirectories when Joplin didn't limit it to you. And sure, you can edit my CSS to fit your needs.

![notebook_panel_sample_abg](https://user-images.githubusercontent.com/86870826/134758745-81736f74-97bf-49e2-9779-2fb935085120.png)

[:arrow_up:Back](#table-of-contents)

<!-- ============================================================================================================================================================= Text Style -->

## Text Style

A sample in Render Viewer:

![text_sample_abg](https://user-images.githubusercontent.com/86870826/134675980-53e88bae-76dd-4a77-aaf8-2194242be97b.png)

Color was not always the best choice for indentifying information. Sometimes, circle the keywords just like what you do on a paper is the much better option for less noise. And this style will apply to the emphazise text, strong text, mark text, and the abbrviation text.

A sample in Markdown Editor:

![circle_keywords_sample](https://user-images.githubusercontent.com/86870826/135735920-f06de4c2-c832-481b-bc10-22ee2ca09f36.png)

Search text sample in Render Viewer:

![search-text-sample-rv](https://user-images.githubusercontent.com/86870826/136669473-937b68a9-6e16-45c9-90dc-372b800ae419.png)

Search text sample in Markdown Editor: 

![search-text-me](https://user-images.githubusercontent.com/86870826/136669482-13958ace-2521-43fd-843a-168d952d7071.png)

[:arrow_up:Back](#table-of-contents)

<!-- =================================================================================================================================================================== Link -->

## Link

![links_sample_abg](https://user-images.githubusercontent.com/86870826/134676007-f11a7822-610c-4f7e-a351-0366e505cccd.png)

[:arrow_up:Back](#table-of-contents)

<!-- ========================================================================================================================================== Unordered List & Ordered List -->

## Unordered List & Ordered List

![unordered_list_and_ordered_list_sample_abg](https://user-images.githubusercontent.com/86870826/134676050-a4a42e70-fb50-4bb0-b58a-b0a88463b42c.png)

A List in Spoiler Block:

![list_in_spoiler_sample](https://user-images.githubusercontent.com/86870826/141187686-7d9e4b2a-7a5c-4736-80d8-6305ace1256d.png)

[:arrow_up:Back](#table-of-contents)

<!-- ============================================================================================================================================================== Checklist -->

## Checklist

![checklist_sample_abg](https://user-images.githubusercontent.com/86870826/134676087-ab2580b3-164c-4da9-8ed6-bcf80ff1087b.png)

[:arrow_up:Back](#table-of-contents)

<!-- ============================================================================================================================================================= Blockquote -->

## Blockquote

![blockquote_sample_abg](https://user-images.githubusercontent.com/86870826/134676125-1bf895c8-a9a3-40b8-b159-72b21fa85782.png)

[:arrow_up:Back](#table-of-contents)

<!-- =============================================================================================================================================== Code block & Inline Code -->

## Code block & Inline Code

In the Render Viewer:

![inline_code_sample_abg](https://user-images.githubusercontent.com/86870826/134676173-043817c2-f3cd-4aef-8b24-21caa4ecc051.png)

In the Markdown Editor:

![md_inline_code_sample](https://user-images.githubusercontent.com/86870826/135751564-9cbd2d2c-5e63-4ba5-b413-f2254cf958b6.png)

Then, the code block is showing below:

![code_block_sample_abg](https://user-images.githubusercontent.com/86870826/134676214-8e428002-89b2-4c34-9a36-01e080c826b4.png)

[:arrow_up:Back](#table-of-contents)

<!-- ========================================================================================================================================================== Math notation -->

## Math notation

See how *magical* after added a bit of neon light to your mathematical formulas:

![math_notation_sample_abg](https://user-images.githubusercontent.com/86870826/134676276-37e88dd9-7485-44de-aedd-29d55869a12d.png)

[:arrow_up:Back](#table-of-contents)

<!-- =========================================================================================================================================================== Markdown TOC -->

## Markdown TOC

![markdown_toc_sample](https://user-images.githubusercontent.com/86870826/138591403-6827e185-072c-4641-9a95-91313fe3e6ed.png)

To use markdown TOC, you should enable the the extension first: 
`Tools` > `Options` > `Markdown` > `Enable table of contents extension (wysiwyg: no)`
Then, you can create the TOC with a very easy markdown syntax `[[toc]]` .

<!-- ======================================================================================================================================================= MORE INFORMATION -->
<!-- ====================================================================================================================================== Requirements of Ohmine Dark Theme -->

## Requirements of Ohmine Dark Theme

For the complete experience of using OhmineDT, please make sure you have done the below before you clone my CSS codes:

1. Use the Joplin built-in dark theme: `preference` > `Appearance` > `Theme` > `Dark`
2. Install the [Montserrat](https://fonts.google.com/specimen/Montserrat) font - The recommend font for OhmineDT
3. Install the [Cascadia](https://github.com/microsoft/cascadia-code/releases) font - The recommend monospace font for OhmineDT 
4. If you want your plugin background color is matching with OhmineDT, please change that plugin background color to #191919 (optional)

[:arrow_up:Back](#table-of-contents)

<!-- ======================================================================================================================================== Must knows about Custom Element -->

## Must knows about Custom Element

OhmineDT providing some of the features that function by Custom Elements. I absolutely recommend you use it to create a better reading experience, but first you have to consider the below:

1. Not all Markdown editor software support using Custom Elements.
2. Custom Elements content will become plain text format when you export your notes to `.md` file or transfer your notes to other software.
3. Even if other note-taking software is supported to using Custom Element you may need to copy the related codes to that software manually.

So, if you are only take notes within Joplin, you don't have to worry about that. Otherwise, you should considering which notes you should use Custom Elements and which doesn't.

[:arrow_up:Back](#table-of-contents)

<!-- ========================================================================================================================================================= About Printing -->

## About Printing

Here are few things you should know before you print out your article:

1. Sticky notes *will not display on printing*, it's for personal use by default. In case you want to print it out, just open the `userstyle.css` file and you will understand what to do.
2. Art Gallery will be releasing the overflow limit and listing out all the images but it won't change the number of columns.
3. A lot of elements are restyled for printing.
4. By Joplin default, you are not able to select and copy text if you are using the `print` to create a PDF file. If you expect to create a PDF file that allow you to do it, please use the `export`.
5. By the Spoiler plugin default, Spoiler Block will only appears normally when you use `export`.
6. By the Spoiler plugin default, Inline Spoiler will not print out the text.

The printing sample PDF for reference:
https://drive.google.com/file/d/1xSRkQxBqpMQzz7jU_BLgVmCCb1UgvCoT/view?usp=sharing (11-NOV-2021 updated)

[:arrow_up:Back](#table-of-contents)

<!-- ==================================================================================================================================================== Recommended plugins -->

## Recommended plugins

Below are some of the best plugins on Joplin, if you never try it before it's worth giving a try.

- Quick HTML tags (most recommend)[quick setting up](#quick-html-tags-most-recommended-to-use-with-this-theme)
- Table Formatter (most recommend)
- Spoiler (most recommend - OhmineDT has styles for it)
- Outline
- Note Tabs
- Quick Links
- Rich Markdown
- Menu items, Shortcuts, Toolbar icons

Check out more plugins on [Joplin Plugins Repository](https://github.com/joplin/plugins#joplin-plugin-repository)

[:arrow_up:Back](#table-of-contents)

### Quick HTML tags (most recommended to use with this theme)

It let you quick and easy to create HTML tags in your notes, and it's helpful to create the Sticky Notes, Art Gallery, span tag, and more.

Quick setting up:

1. Copy this line of text: `span;ctb;note;tip;explain;question;warning;keyword;important;ag2;ag3;ag4;ag5;ag6;`
2. Open Joplin
3. Go to `Tools` > `Options` > `Plugins`
4. Search plugin by input the word `html`
5. Click `Install` which on the `Quick HTML tags` plugin
6. Quit & restart Joplin app
7. Go to `Tools` > `Options` > `Quick HTML tags`
8. Go to `HTML predefined tags` 
9. Press `ctrl+v` to paste text in the input bar
10. Press `Ok` it's done!

After this, you can use this plugin like below:

1. Whenever you want to use an HTML tag just press  `ctrl + h`
2. Then, press the `Down` key on your keyboard to find the right tag
3. Press `Enter` key. It's done!

[:arrow_up:Back](#table-of-contents)

<!-- ==================================================================================================================================================================== FAQ -->
<!-- ============================================================================================================================================== How to install this theme -->

## How to install this theme

If you know where exactly your `userstyle.css` and `userchrome.css` are stored:

1. Make sure you have done the requirements of using the OhmineDT
2. Clone my codes
3. Copy my `userstyle.css` and `userchrome.css`
4. Replace your `userstyle.css` and `userchrome.css`
5. Quit & restart Joplin

If you are not sure where your files are stored, you can follow the steps below:

1. Make sure you are already installed Joplin on your computer. [Download Joplin](https://joplinapp.org/download/)
2. Download and install the most recommend fonts for this theme. [Montserrat](https://fonts.google.com/specimen/Montserrat) | [Cascadia](https://github.com/microsoft/cascadia-code/releases)
3. Open Joplin
4. Go to `Tools` > `Options` > `Appearance` 
5. Choose the `Dark` theme and click `Apply` (OhmineDT is better to run with the Joplin built-in dark theme)
6. In the `Appearance` page, click `Show Advanced Settings`
7. Click `Custom stylesheet for rendered Markdown` , it will open a `userstyle.css`
9. Copy my `userstyle.css` codes on this page: https://github.com/Nacandev/Ohmine-Dark-Theme-For-Joplin/blob/main/userstyle.css
10. And paste on your `userstyle.css`
11. Back to the `Appearance` page again and click `Custom stylesheet for Joplin-wide app styles` . it will open a `userchrome.css`
12. Copy my `userchrome.css` codes on this page: https://github.com/Nacandev/Ohmine-Dark-Theme-For-Joplin/blob/main/userchrome.css
13. And paste on your `userchrome.css`
14. Quit & restart Joplin and it's done.

[:arrow_up:Back](#table-of-contents)

<!-- =============================================================================================================================================== How to delete this theme -->

## How to delete this theme

1. Go to `Tools` > `Options` > `Appearance` 
2. Click `Show Advanced Settings`
3. Click `Custom stylesheet for rendered Markdown` , it will open a `userstyle.css`
4. Click `Custom stylesheet for Joplin-wide app styles` . it will open a `userchrome.css`
5. Delete all the code within these two documents. It's done! but I'm hurt!

[:arrow_up:Back](#table-of-contents)

<!-- ========================================================================================================================================== How to install Joplin plugins -->

## How to install Joplin plugins

1. Go to `Tools` > `Options` > `Plugins`
2. Search a plugin name
3. Click `Install`
4. After installed all you needs, quit & restart Joplin app

If you want to discover all of the Joplin plugins, you can go visit the [Joplin Plugins Repository](https://github.com/joplin/plugins#joplin-plugin-repository)

[:arrow_up:Back](#table-of-contents)

<!-- ====================================================================================================================================================== How to contribute -->

## How to contribute

### Give me a user feedback

Whatever you like this theme or not, I'll open my mind to accept any of your comments and treat your feeling as mine. It would be my pleasure if I could get any feedback from you! Go to leave me a message on [Joplin Forum](https://discourse.joplinapp.org/t/css-theme-ohmine-dark-theme/21000) or [Github Discussions](https://github.com/Nacandev/Ohmine-Dark-Theme-For-Joplin/discussions/new)

### Report Bugs

If you experiencing any bugs or bad issues while using this theme, please create a bug report on [issues page](https://github.com/Nacandev/Ohmine-Dark-Theme-For-Joplin/issues/new/choose) and let me know it.

[:arrow_up:Back](#table-of-contents)
