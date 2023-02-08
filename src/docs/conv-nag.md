---
title: サンスクリット・デーヴァナーガリー変換器
id: conv-nag
category: conv
tags:
  - 便利機能
  - 文字変換器
  - サンスクリット
  - デーヴァナーガリー
comment: "true"
---
**IAST** (International Alphabet of Sanskrit Transliteration)
による翻字を行います.
対応可能な入力方式は**京都・ハーバード式, ITRANS, Velthuis**.
数字も対応可能.

<HLConverter src="/conv/nag.tsv" />

## 対応表

ラテン文字表記は上段が IAST,
下段が入力方法 (最も実用的だと思われるもの).

|>|>|>|母音字・母音記号|>|その他記号|
|:---:|:---:|:---:|:---:|:---:|:---:|
|**अ ◌**|a|**आ ा**|ā|**​ं**|ṃ|
|^|a|^|A aa|^|M|
|**इ ि**|i|**ई ी**|ī|**​ः**|ḥ|
|^|i|^|I ii|^|H|
|**उ ु**|u|**ऊ ू**|ū|**​ँ**|◌̃|
|^|u|^|U uu|^|MM /|
|**ऋ ृ**|ṛ|**ॠ ॄ**|ṝ|**ऽ**|'|
|^|R|^|RR|^|' (apostrophe)|
|**ऌ ॢ**|ḷ|**ॡ ॣ**|ḹ|**ॐ**|Oṃ (非 IAST)|
|^|L|^|LL|^|O|
|**ए े**|e|**ऐ ै**|ai|**।**|.|
|^|e|^|ai|^|. (period)|
|**ओ ो**|o|**औ ौ**|au|>||
|^|o|^|au|^|^|

|子音字|>|>|>|無声音|>|>|>|有声音|>|鼻音|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
||>|**無気音**|>|**有気音**|>|**無気音**|>|**有気音**|>||
|**軟口蓋音**|**क**|ka|**ख**|kha|**ग**|ga|**घ**|gha|**ङ**|ṅa|
|^|^|ka|^|kha|^|ga|^|gha|^|Ga|
|**硬口蓋音**|**च**|ca|**छ**|cha|**ज**|ja|**झ**|jha|**ञ**|ña|
|^|^|ca|^|cha|^|ja|^|jha|^|Ja|
|**そり舌音**|**ट**|ṭa|**ठ**|ṭha|**ड**|ḍa|**ढ**|ḍha|**ण**|ṇa|
|^|^|Ta|^|Tha|^|Da|^|Dha|^|Na|
|**歯音**|**त**|ta|**थ**|tha|**द**|da|**ध**|dha|**न**|na|
|^|^|ta|^|tha|^|da|^|dha|^|na|
|**唇音**|**प**|pa|**फ**|pha|**ब**|ba|**भ**|bha|**म**|ma|
|^|^|pa|^|pha|^|ba|^|bha|^|ma|
|>|>|>|>|>|>|>|>|>|>||
|**接近音**|**य**|ya|**र**|ra|**ल**|la|**व**|va|>||
|^|^|ya|^|ra|^|la|^|va|^|^|
|**摩擦音**|**श**|śa|**ष**|ṣa|**स**|sa|**ह**|ha|^|^|
|^|^|za|^|Sa|^|sa|^|ha|^|^|

## 入力方法の詳細

![詳細](/upload/nag-lat.jpg)