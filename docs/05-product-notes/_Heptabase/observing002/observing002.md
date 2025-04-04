---
title: 1st AMA 讀後感
tags: ['2024', heptabase]
keywords: [heptabase, AMA, vision]
last_update:
  date: 2024/08/23
---
[Heptabase AMA 2024/08](https://discord.com/channels/812292969183969301/1274713700695019520/1275397401334779904)

日常查看 Heptabase Discord 已經變成我這個挑食產品人的奇怪小興趣 (?)  
雖然很後知後覺地在 Alan 完成回覆後才知道他們在 8/16 - 8/18 舉辦了第一次的 AMA，但看完之後覺得有很多有趣的部分與想記錄下來的想法或問題，於是又來這裡寫寫。以下會有重點摘錄加上個人不成熟的想法們。


## 產品發展
### Heptabase 在 PKM 市場的地位以及對 AI 的態度
`Heptabase's position in the PKM market and its attitude toward AI.`

這題混合了產品市場定位與 AI 兩個看似無關的提問，但其實可以看出，在這一兩年之中，一個產品如何看待與規劃 AI 確實已經成為大家判斷一個產品走向是否能夠跟上技術演變的一個指標。  

#### 市場定位
關於產品定位我認為 Heptabase 一直是很清晰的，我很喜歡 Alan 以下的這段回覆，更詳細地**擴充**了核心的願景，同時解釋到「協作」在 roadmap 上優先層級較高的原因：

> We're not trying to build the best PKM product (if such a thing even exists). We're trying to build the best product for people who need to work on complex projects, learn complex topics, and solve complex problems to acquire a deep understanding and conquer complexity. **These use cases aren't limited to "personal knowledge management" by nature. Many complex projects are collective projects, and many complex topics are better learned through discussions and guidance from others.** Heptabase will address these scenarios in the upcoming iterations.

> ..., if you compare the current version of Heptabase with other PKM products, I believe the differentiation is in the way **we put together different PKM features into a coherent design that’s optimized for an opinionated workflow to help you extract atomic knowledge from different knowledge sources and reconstruct it into your understanding of a complex topic**.

由此以我的觀點提取出的 Heptabase Vision & Mission & Ultimate Goal 如下：
:::note 願景與使命
打造一個大多數人可以用來梳理龐雜資訊、學習深度知識、以及整頓複雜專案的工具  
（note. 我認為這裡 Project 的含義相比於工作專案，更偏向於協作型的學習或研究計劃）
:::
:::note 產品目標
讓用戶能夠達成：
1. 資訊的提取（拆解來源）
2. 知識的建立（利用白板等方式重組與整理）
3. 集體知識的交流（協作與討論）
4. 複雜專案的整合（某種形式的知識共創）
:::

將這些階段列出來，讓我想起曾有人告訴我許多創意的根本是立基於 `拆解、串聯、表述`，而這好像也適用於上述的流程之中。  

我認為產品目標的前兩步分別可以對應到拆解與串聯，這是知識與創意的基礎、整個流程的底層建設。而後兩步則對應到了表述，是藉由向他人分享和表述使知識或創意效果最顯著地增幅，但也是最困難的部分。比如協作會有技術上同步、紀錄、權限等的限制與規範需要制定，也會有人們如何相互理解知識脈絡的挑戰；複雜專案的整頓輸出，則涉及到不只是對特定成員之內的溝通，還有對於知識結構的統一，甚至對外的呈現與易讀性需要考量。

Heptabase 目前正在從 1. 2. 出發，並試圖擴展到 3. 4.，我很期待能夠有將多人知識、想法、決策脈絡用單一工具整合的時刻到來，不過這條路我目前仍沒辦法很具體想像。

#### 對 AI 的態度

至於 AI，Alan 提出了兩個發展可能性：
> - 加速提取 insight
> - 在白板附帶具有專業知識的 AI 教授，給予回饋與提出問題

他也提及其他 PKM 使用 AI 的方式也許會逐漸納入流程中，但**優先程度都不會高於賦能用戶處理資訊的高複雜度**。

從 Alan 提出的可能性中，我可以看出我們使用 AI 的方式大概十分不同，而這也許可以體現出用戶群裡對 AI 的想像也可能略有分歧，因此針對 AI 的應用方式我猜測難以避免再一波用戶對先後順序或做法不滿的情況發生（but it always happen）。

對我來說目前 AI 的用途是幫問題聚焦重點或發散研究方向、為具體的來源整理綱要、為個人的產出提出建議，而 Heptabase 帶給我的價值是整理「我看到的」關聯性。若是在 HB 之上使用 AI 為我總結 insight、給予我指導，略微偏離了我個人的期待。

### Heptabase 對互通性的態度
`Heptabase's attitude toward interoperability.`

針對互通性 Allan 提到了 API 的支援並不是不會發生，而是現階段底層系統仍在不斷迭代的狀況下，發布 API 會導致更高的維護成本進而影響開發速度。

> The real problem we want to solve is to unbundle data, computations, and view components from an app, where end users can easily create and publish useful computations and view components (with the help of AI) on top of Heptabase’s card database. MetaApp is purely a form of bundling computations and view components that are related to the same context.

我對程式底層的認識很有限，但 Allan 的這段解釋讓我驚艷於原本卡片系統的設計有想到如此長遠的應用廣度，當初始設計足夠彈性並具備足夠擴充性時，後續的呈現、串接的可能性會大大地被展開。

如同前面所說我對這個面向的認知還十分限制我提出更多見解，最近剛好有些 Open API、Tokenization 相關的功能需要研究，希望下次回頭來看可以有更多的想法補充。

## 功能計畫
### 未來的關鍵發展功能
`What features (planned or ideas) that you see as key for improving heptabase further?...What are the areas that you think Heptabase are currently lacking, and what are the main audience that will benefit the most from the direction heptabase is heading.`

- Features that create new capabilities → **Breaking complex things down** to acquire deep understanding.
    1. Annotation Layer (Breaking down all types of media) 
    2. Comminication Layer (Breaking down long discussions) → Connected atomic threads
    3. Application Layer (Breaking down complex projects into) → Atomic pieces of computational problems that can be solved

- Features that improve usability, make the product easier and more delightful to use, and lower the friction users face

### 針對圖表功能的計畫
`Heptabase's plans for diagramming.`

> We’re pretty sure we’ll build a diagramming feature, but unsure about which routes of implementation we’re going to choose (diagramming on the whiteboard vs. having an editable image card for diagramming). This probably comes after we have implemented features related to image annotation.

note.
- 好奇這裡指的 image annotation 是什麼樣的圖片註記形式
- diagramming 與 image annotation 在我第一眼看起來沒什麼相關，但因為提到了 diagram 的形式有可能在白板上或是卡片，可能和 diagram 本身是否為 image 或者是會與 annotation 使用的套件有關聯（極可能猜錯）
- 個人的使用角度是白板內 diagram 有更多的彈性並能讓白板更完善（或者是說更符合想像中白板能做的事）

### Heptabase 的白板協作計畫
`Heptabase's plans for whiteboard collaboration.`

這是我很感興趣的一個功能發展，最近在跟朋友開讀書會時會互給白板連結，但唯讀無法共編、共享卡片、有共用區域實在是太痛苦了！

Allan 在回覆裡提到他們更加在意討論過程中慢慢生產出「結構」的這個過程：

> We’re less interested in solving the problem of “presentation” and more interested in helping our users gradually build “structure” on top of all the discussions they have around a topic.

一起生產出結構確實是有趣的方向，但就如同其他白板工具適用於多人討論，我認為共創出討論內容本身並不是最困難的事，而是**如何利用各自原有的卡片**，利用 Heptabase 本身比起一般白板工具留有更多提取歷程的優勢，透過協作白板呈現出完整的**探索 → 收集 → 思考 → 創造 → 共享**脈絡。

## 團隊發展
### Heptabase 的團隊擴張計畫
`Heptabase's plans for team expansion.`

大家真的是等功能等急了開始關心團隊規模 🤣  
只能說團隊默默長到了 10 人真是非常恭喜，尤其在工程師角色密度高的情況下（猜的，並沒有提及團隊組成），這個人數已經是一個很好加速的規模，也是一個比較容易緊密溝通和管理的邊界。

Alan 提到在擴張團隊時，他其一想避免的事情：
> Focus on management and internal communication instead of product innovation and customer research

這讓我非常好奇目前 Heptabase 的協作模式、管理方法、以及如何和做研究與規劃平衡。（職業病開始跑出來）  

回想自己目前管理過的工程團隊大約都在 5 ~ 6 人間，類似的人數在不同的產品規模、流程嚴謹度、文件溝通方式下，管理與溝通起來的差異非常大：而在我的經驗裡，相對初期的團隊，在形成共識的溝通成本比有較為明確流程和文件的團隊略高；在成熟度較高的團隊則是因為有既定的流程和文件壓力，研究與規劃的餘裕略小一些。  
