<script setup>
import TextArea1 from "../components/CSS_World/TextArea1.vue"
import TextArea2 from "../components/CSS_World/TextArea2.vue"
import TextArea3 from "../components/CSS_World/TextArea3.vue"
import TextArea4 from "../components/CSS_World/TextArea4.vue"
</script>

<style>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

# CSS新世界

## 怪异盒子真的怪异吗？

CSS世界中也指出了`box-sizing: border-box`即所谓的IE怪异盒模型才是更加符合直觉的模型。

所以说它怪异其实挺讽刺的，所谓的标准盒模型`box-sizing: content-box`才显得很怪异。

我不晓得中文社区里大家为什么都叫它怪异盒模型，目前我还没找到相关英文名称，之后有机会我想去CSS规范里一探究竟，看看为什么它他怪异盒。

下面是CSS世界中给的一个例子。textarea，然后想让它自适应父元素的的宽度。textarea比较奇怪，它作为一种 **替换元素**，即使在设置为`display: block`后，它仍无法想水流一样自适应父元素宽度。

<TextArea1 />

::: details 代码
<<< @/../components/CSS_World/TextArea1.vue
:::

所以想让textarea自适应父元素宽度唯一的方法是指定`width: 100%`。

<TextArea2 />

::: details 代码
<<< @/../components/CSS_World/TextArea2.vue
:::

你可能已经发现，现在这个textarea不友好，因为它没有一个padding，点击输入的时候光标是顶着它的边框的，我们很容易就能想到一个方法就是设置padding。然而设置后变成这样了。

<TextArea3 />

::: details 代码
<<< @/../components/CSS_World/TextArea3.vue
:::

你可以发现它比上一个textarea貌似长了一点，这就是`content-box`标准盒模型导致的原因，它的width是不包括边框和内边距的，这个时候我们可能就得手动`width: calc(100% - 20px)`计算一波了。

但是这个calc这个函数是CSS3中的内容，在CSS世界里用它就比较作弊了，在CSS3之前可能就得外面套一层div，然后模拟textarea的padding来实现了。

https://demo.cssworld.cn/3/2-9.php

最后仿照上面链接的效果写一个动画结束此文。

<div class="wrapper">
    <TextArea4 />
</div>

::: details 代码
<<< @/../components/CSS_World/TextArea4.vue
:::
