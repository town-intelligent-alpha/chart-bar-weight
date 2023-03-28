# chart-bar-weight
Bar chart for project/task weight

- 特色
    - 可動態調整寬、高
    - 可調整 bar 色彩（尚未開放參數調正)
    - 可調整 0 值捨棄
- 參數
    - [https://town-intelligent-alpha.github.io/chart-bar-weight?uuid=63044860&width=460&height=450&&zero=false](https://town-intelligent-alpha.github.io/chart-bar-weight/?uuid=63044860&width=460&height=450&index_only=true&zero=false)
        - uuid : task UUID ( 之所以採用 task UUID 是因為 eID 不會知道 project UUID，但回傳的圖仍為 project 權重)
        - width : 圖寬
        - height : 圖高
        - zero : 零值是否繪製 ( true/false )
        - index_only : 是否只顯示 index ( 捨棄 sdgs- ) ( true/false )
- 實驗
    - 網址 : [https://town-intelligent-alpha.github.io/chart-bar-weight?uuid=63044860&width=460&height=450&&zero=false](https://town-intelligent-alpha.github.io/chart-bar-weight/?uuid=63044860&width=460&height=450&index_only=true&zero=false)
    - 對應專案 : [https://alpha-2ndhome.townway.com.tw/content.html?uuid=39346656](https://alpha-2ndhome.townway.com.tw/content.html?uuid=39346656)
    - 任務：63044860
    - 可自行帶入 alpha / beta 的任意 task uuid … 直接更改網址即可

## Reference
- https://d3-graph-gallery.com/graph/barplot_animation_start.html
