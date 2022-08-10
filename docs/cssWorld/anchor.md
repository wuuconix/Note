<script setup>
import Anchor1 from "../../components/cssWorld/Anchor1.vue"
import Anchor2 from "../../components/cssWorld/Anchor2.vue"
</script>

# 锚点定位的两种方法

## intro

在我们的文章很长的情况下，我们会用到锚点定位去定位到页面的某一个位置。

比如以下链接就能够定位到我的最新博文《JS该写分号嘛？》的第二部分的第二节。

https://wuuconix.link/2022/08/06/asi/#%E5%88%A9%E7%94%A8%E8%A7%A3%E6%9E%84%E8%AF%AD%E8%AF%AD%E6%B3%95swap%E7%9A%84%E6%97%B6%E5%80%99

我们可以看到url中有`hash`，即最后的`#利用解构语语法swap的时候`

![元素审查](https://tva2.sinaimg.cn/large/007YVyKcly1h5214x6wl4j313i0d7n6x.jpg)

经过元素审查，我们可以发现这个标题h2标签设置了id属性，而它的id属性就是我们的hash值。

所以我们可以知道通过设置元素id的方式，我们可以进行锚点定位。

## id

这是一个使用元素id来实现锚点定位的例子。

<Anchor1 />

::: details 代码
<<< @/../components/cssWorld/Anchor1.vue
:::

## a tag name
第二种方法是利用a标签的name属性，百度百科实际上就是利用的这种方式实现的锚点定位。

![百度百科](https://tva1.sinaimg.cn/large/007YVyKcly1h522nz6009j310r0h04fd.jpg)

这里也试一下。

<Anchor2 />

::: details 代码
<<< @/../components/cssWorld/Anchor2.vue
:::

不知道为什么，利用 a tag name的方式在vitepress中不发生效，你应该也发现了。

可以来[Vue SFC PlayGround](https://sfc.vuejs.org/#eNp1ks+O0zAQxl9lZIQE0iYpnFBoF3gOwsHrTBJX/ifbabeqeuGyL8NtDwghHgfRx2Bmk1a7XW0OiTPfzM/fjL0XX0IoNyOKWiwz2mBkxuvGAT3LVm9AGZnSqhHKuyy1w9gI2BRp8FsK8qcRc/pDiYQhYkfSK23796T9+/7r793v48/7458fx7t7ji4r+bTESYtUMldcyBSFFBXpQ84h1VUlVV+SHX1bWlN9ClqtqAyyzoYpE66GiQafjZftbBVWkOOIZ8fLijqk9bJ61Dn9JhV1yJAwj4Ei2gYfM+yBOoMDdNFbaATNrBGcTlYSJU98SnnTSZPwLWMn0AzNO4OQlA/YUoQ7mAYK+8lNqxN52NXQGbz9OMXWY8q62xWcjC7XoOiNcVal0b0rNJlPFwojilZHVFl7R6I3o3UkHhonv/IRfTtta2XstStufM7e1vBusVgE3p4yefRz1la3eajhw+L1CcJTPkMG1P1A9s6l1Dv3ey2u6Fh5fIWVoVwn7+iiPRTxebOQGlGfMPNUa1qcDjt1iq/nOpU+9hWtyji6rC2WmGxxE/02YSRwI64eMSoKbjAWEV2LkS/ty8yL1GdcxlJHB3H4D0kzFrk=)看看实际效果。

观察代码的话，实际上a name这种方式要麻烦许多，id这种方式则比较清爽方便。

之后无脑用id就ok了！

> Wuuconix
> 
> 2022/8/10 23:45 