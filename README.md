# Ohmine-Dark-Theme-For-Joplin
This is a custom CSS theme for the opensource note-taking app [Joplin](https://joplinapp.org).



## Feature: Sticky Notes

Here I created 7 custom elements for sticky notes: `note` , `tip` , `question` , `explain` , `warning` , `keyword` , `important`. 

Let's see what are the sticky notes for:


### How to use it?

3 things you should know before you use the sticky notes:

1. Sticky notes *will not display on printing*, it's for personal use by default. In case you want to print it out, you may need to edit a bit of CSS code in the `userstyle.css` file.
2. Make sure there is a blank line *before the open tag*, otherwise it may cause the format problem.

#### EXAMPLE: 
 ```
 
 <note> 
 here to type any of your content.
 </note>
 ```
#### OUTPUT:

<note> 
 here to type any of your content.
</note>

3. Or, if you want to use markdown codes inside the sticky notes, you should add a blank line *before and after the open tag*:

#### EXAMPLE:
```

<keyword>

| A | B | C | D |
|:-:|:-:|:-:|:-:|
| 1 | 2 | 3 | 4 |
</keyword>
```
#### OUTPUT:

<keyword>

| A | B | C | D |
|:-:|:-:|:-:|:-:|
| 1 | 2 | 3 | 4 |
</keyword>


 
 ## Feature: Art Gallery
 
This art gallery providing 5 CSS classes for you:
|Class Name|Columns Limit|Gallery Size|Scrolling Trigger|
|:----------:|:-------:|:------------:|:----------:|
|ag2|2|W:100% * H:60vh + Scroll|2 images above|
|ag3|3|W:100% * H:60vh + Scroll|6 images above|
|ag4|4|W:100% * H:60vh + Scroll|12 images above|
|ag5|5|W:100% * H:60vh + Scroll|20 images above|
|ag6|6|W:100% * H:60vh + Scroll|30 images above|

Below is the art gallery(ag6) with 48 images: 
<ag6> 
![zahaan-khan-BYNK7wHZLJA-unsplash.jpg](:/ca565068440f4e81aee591c646ec997b)
![yuiizaa-september-Kz8xmA35IVw-unsplash.jpg](:/6b7e31aa967649958e51e859b667fd67)
![tim-patch-oDKfnZfodRI-unsplash.jpg](:/9eaccfbe68eb4ea2b4192d1a7463ac9a)
![szabo-viktor-qw8YAUEbHEE-unsplash.jpg](:/e1c2c213378d4921a52d1d3a1bdbe014)
![siora-photography-3prD-aVJqy8-unsplash.jpg](:/a3d3968c62da49c88c9aac049674b34f)
![ren-ran-Jy6luiLBsrk-unsplash.jpg](:/605451f124774e74a413fcede568058d)
![pawel-czerwinski-XaiP_NLrtoM-unsplash.jpg](:/58a84f5ce7594561b0f5332031be8597)
![ninno-jackjr-dfq_fzgxVSc-unsplash.jpg](:/9aabb8d6acd44f7c930119aef70f2898)
![michael-dziedzic-qKKt9FW-lyo-unsplash.jpg](:/66ee5d349a7c45f68298b82f7e86a132)
![michael-dziedzic-0XkLAIrknco-unsplash.jpg](:/37410faefa9941879b3cecbfb76d61df)
![marcus-ganahl-saJ9-9dEDjc-unsplash.jpg](:/796e038546c844cdb4dbbbe7f7e28e02)
![levi-midnight-Up_3ggPCCo0-unsplash.jpg](:/21315469268e4c769fc1ef989791fda6)
![laura-chouette-GoUgABgaHhk-unsplash.jpg](:/f3113bd19d2b417c9650c0194a9d9bfe)
![isai-sanchez-Hl5ykR0fXw0-unsplash.jpg](:/2a2ef686ebc7476ab2e163c3e951b031)
![isaac-quesada-NeDzb0jAIX4-unsplash.jpg](:/68e22193bdc54e2fad4edf2f6a86d020)
![f265558b6fa15672453f86e1ed2fc3fb_m.jpg](:/0a09a818c8704e3bad2afa525842505a)
![f32f773fae47f178d53484246d897892_m.jpg](:/4522a04b471e41b395a9267f3197aa33)
![f25ee685d03d32658ca15495ee0c5171_m.jpg](:/59b9a1f6b3ed47de9e49b6c797ed4483)
![f3d81b99678436640a826f045bf25a28_m.jpg](:/9c2da252cfc54dd68d8dfc1ef3a49a6c)
![f003ae1ea9ac2c9af43b76aea426483f_m.jpg](:/a1624f6bee1145d1a35722ad1099e676)
![f1a78e7f5100cf436b33cdfcd0cd9a12_m.jpg](:/ec2ae05a2f2643b4a1184021d87cf904)
![f0f9cc70b886666aa9217c6d2f700cf2_m.jpg](:/de16fabc30594ac28c43f9712588dd96)
![e2ac1f73c9b511d62e53ed5084098857_m.jpg](:/c152ef8996924d749eae80cfde8e011c)
![dfacf4c1c0f473455f399b7410f61b1b_m.jpg](:/e6b0990109124e81867ef25c7e54c7cb)
![df8b59c74170f9d5ec78872ec85ac6da_m.jpg](:/ac64eded6e134e82ae1f550289ac5e9a)
![dcc7964fa8556dd59bf2aef9ec1eefda_m.jpg](:/c8519ce1dfe94071a9e58cc8ec463f7a)
![daniil-silantev-F6Da4r2x5to-unsplash.jpg](:/02fc3447157e4eda80f74fa6201a5017)
![cf0b0001499ec7b4b22506279d397659_m.jpg](:/4257de81777845628d6783f838de982e)
![bddb3c2bb0d2348635fa38dae359518a_m.jpg](:/dbb0141c235144df811b423f8576ef1c)
![bbdf38020fd4ea8bbd452ebea3c71cdb_m.jpg](:/fca9d646c0414fa2a4c95b1ae117c6e5)
![b9cebaae4d303a69af50c0b5efbe0fe2_m.jpg](:/4170b01c986545efb4490d8e40d536be)
![anton-maksimov-juvnsky-7L0dMoYIgCU-unsplash.jpg](:/1fe267a3193544deb8fff91247fa4eb9)
![alex-knight--4pZ_YqcSFc-unsplash.jpg](:/87ec22fc7ec349e695a0b5893fa9b3c6)
![4028206607bfa59034d79f0bc481ec51_m.jpg](:/690da3db72f44e898b68ab223ef7bc88)
![6379080aa5186d039ae94775a4fc5c7a_m.jpg](:/3888d69653e84c2ca7fc575bac10a348)
![93136ed8018aa9eb9ffd36c3841e3c38_m.jpg](:/5f3fd7bce7724049860bd85b1a50e505)
![8672cda04982de71d5d9ecace32304aa_m.jpg](:/adfb7ec73a634392ae36d8ebeb508b76)
![3750d04840e4bd3da8f87fac8845b01f_m.jpg](:/67b168a7af9c4908bf63fa1d4653cec7)
![545c7b49596d0805be953e294641ccef_m.jpg](:/926095789edf4a4fa1258d5230d5a33e)
![340dd96f25bf2c867fd4cd9eb3d6eb54_m.jpg](:/9086aba9841844369ef0a99dcbebda75)
![121acf06069f498bf5a034c8d8f579ac_m.jpg](:/e5705dbe464640f194cb3fd0a12f891f)
![96b9ef64f2bc3b1101b3617c22fa4515_m.jpg](:/e99b03a36fe641ba9b855cd1ce8e57f2)
![94f6acd4b38559022e2634818cca91e0_m.jpg](:/0ae63ceddc704312baf7aacd01190309)
![89f39be75641ae3a2e86fb8a03311ad0_m.jpg](:/9828ffd017d947dea1cd28ce27f2304c)
![5b4750681594583b8007be3d02526651_m.jpg](:/3f089d44d3b5433ca71773be248afdba)
![3f3ff1e3d731be0060f46c2a41128b97_m.jpg](:/973605a3e70a40fc8b3d6dd6192211bf)
![3c7ba439145fd1d3a5f8ca17f348314a_m.jpg](:/7dc8aba662754b3eace1b503c4d5979b)
![2e64afde84d4b7522148afbba1e4f470_m.jpg](:/fdb1d365706e46048e05518c5a58e287)
 </ag6>
 
### How to use it?

3 things you should know before you use the art gallery:

1. The class name `ag` stands for *Art Gallery*.
2. The art gallery tag must use *right behind the plain text.*
3. Do not including any blank line within this part of codes, *blank line will break the markdown syntax.*

#### EXAMPLE:
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
#### OUTPUT:
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
 
 ## Feature: Abstract Content Bar
 
This is the color line which is on the right of the markdown editor. It will help you check your text line by line and tell you what they are through the colors:

- plain text <span style="color:#383838;">(color sample)</span>
- heading <span style="color:#ffffff6e;">(color sample)</span>
- web link & file path link <span style="color:#cdd286;">(color sample)</span>
- footnote <span style="color:#5a5800;">(color sample)</span>
- abbreviation <span style="color:#da8d00;">(color sample)</span>
- attached image <span style="color:#008e156e;">(color sample)</span>
- code block <span style="color:#101413;">(color sample)</span> <-- same as code block background
- html tag <span style="color:#ff0063;">(color sample)</span>
- math notation <span style="color:#5aa5fb;">(color sample)</span>
- ordered & unordered list <span style="color:#b11da9;">(color sample)</span>
- checklist <span style="color:#5d00ff;">(color sample)</span>
- blank line <span style="color:#151b1a;">(color sample)</span> <-- same as background, (turn off by defualt)

See the below example screenshot (on the right):

------------------

![2021-09-13_23-16-53.png](:/ab59f4e6e0e444f198e36df23b875ac3)

------------------
It would be helpful when you want to release your eyes from the text for sometimes, or when you are going to double-check the missing part of your content.

### How to use it?
Just typing, as usual, it will be automatically appearing at the end of the line. The only thing you may need to do is to understand those colors' meanings.

## Styling

### Fonts Style

Ohmine dark theme is using the below font family for both markdown editor and render viewer:
- Montserrat
This is my most preferred font, you can download it at: (https://fonts.google.com/specimen/Montserrat)
- Microsoft JHengHei Light (for Traditional Chinese 繁體中文)
- Avenir (Joplin default)
- Arial (Joplin default)
- Sans-Serif (Joplin default)

If you didn't install the ==Montserrat== & ==Microsoft JHengHei UI Light== on your computer, system will pick the Joplin default fonts automatically.

### Text Style

Here is the **strong text**, *emphasis text*,  ~~Strikethrough text~~, ++Inserted text++ as you see, they are both easily get your eyes within the long article.

The ==mark text== is presented with a smooth rounding shape and adds a little space before and after the text. 

The Abbr text is added a little bold and change to a green color to make it more outstanding.
*[Abbr]: Abbreviations

### Headings Style

Here showing the heading samples:

# Sample: H1 heading 

H1: bolder text + small-caps + gradient color + bottom line

## Sample: H2 heading 

H2: rice icon + pure white + bottom line

### Sample: H3 heading 

H3: pure white

#### Sample: H4 ~ H6 heading 

H4 ~ H6: similar to H3 but smaller fonts size

### Blockquote

> This is what the blockquote looks like.
> It's a bit darker if compare to the *emphasized text* and **strong text**, and it is a bit brighter than the ~~Strikethrougt Text~~ . 

### Unordered List & Ordered List

- Unordered List Item
- Unordered List Item
- Unordered List Item
	- Unordered List Item
		- Unordered List Item
			- Unordered List Item
	
1. Ordered List Item
2. Ordered List Item
3. Ordered List Item
	1. Ordered List Item
		1. Ordered List Item
			1. Ordered List Item	

### Checklist

- [ ] Checklist Item
- [ ] Checklist Item
- [x] Checklist Item
- [x] Checklist Item

### Links & Resource Icon

Simple link: https://joplinapp.org
Anchoring text link: [Joplin](https://joplinapp.org)
Anchoring text link (with title): [Joplin](https://joplinapp.org "Joplin project page")
File path link: [LuckyDraw.xlsx](:/4c6c1cca71cb45d892183c8fa011ee83)
Footnote reference[^1]
Longnote reference[^longnote]
Inline note reference^[This is the Inline notes and contain a link https://www.joplinapp.org]
[^1]: Simple footnote
[^longnote]: Here is the longnote

### Code Block & Inline Code

The fonts family for code block & inline code are:

- Cascadia Mono Light 
download at: (https://github.com/microsoft/cascadia-code/releases)
- Monospace (Joplin default)
- Microsoft JHengHei UI Light (for Traditional Chinese)

If you didn't install the ==Cascadia Mono Light== on your computer, system will pick the Joplin default fonts automatically.

Here is what the `inline code` looks like.

Then, the code block is showing below:

```
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
```

### Math Notation

See how *magical* after added a bit of neon light to your mathematical formulas:
$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$


$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$



## Printing
Due to this theme is designed for the dark mode, so here are few things you should know before you print out your article.
1. Sticky Notes will not appear in the content by default.
2. Art Gallery will be releasing the overflow limit and listing out all the images.
3. A lot of HTML elements are restyled for printing.
