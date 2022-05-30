app.component('store-cart', {
    props: {
        cart: {
            type: Array,
            required:true,
      }  
    },
    template:
    /*html*/
        `
         <div class="cart">Cart({{ cart.length }})</div>
    `,

})