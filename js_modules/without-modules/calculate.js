console.log("Calculate js")

const calculatePrice = (products) => {
    return products.reduce((acc, product) => acc + product.price, 0)
  }
  