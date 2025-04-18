export const addTocart = (prod) => ({
      payload: prod,
      type: "add_to_cart"
    });
    

    export const removeProd = (prod) => ({
      payload: prod,
      type: "remove_from_cart"
    });
    

    export const Incrementprod = (prod) => ({
      payload: prod,
      type: "increment_prod"
    });
    

    export const Decrementprod = (prod) => ({
      payload: prod,
      type: "decrement_prod"
    });
    