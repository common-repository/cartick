!function(c,t){"use strict";c("button.cartick-oc-cart-btn").on("click",(function(){c(this).closest(".cartick-oc-cart-wrap").toggleClass("show")})),c(t).ready((function(){let t=c(".cartick-sticky-cart__qty-form");c(t).on("click",".cartick-sticky-cart__qty-plus",(function(t){let i=c(this).prev("input.cartick-sticky-cart__qty"),r=parseInt(i.val());i.val(r+1).change()})),c(t).on("click",".cartick-sticky-cart__qty-minus",(function(t){let i=c(this).next("input.cartick-sticky-cart__qty"),r=parseInt(i.val());console.log(r),r>0&&i.val(r-1).change()}))})),c(".cartick-sticky-cart__wrap.show_on_scroll").hide(),c(window).scroll((function(){c(window).scrollTop()>cartickSettings.sc_offset?c(".cartick-sticky-cart__wrap.show_on_scroll").slideDown():c(".cartick-sticky-cart__wrap.show_on_scroll").slideUp()}))}(jQuery,document);