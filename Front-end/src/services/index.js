// Get Category Unique Data
export const uniqueCategory = (products) => {
  var uniqueCategorys = [];
  products.length > 0 &&
    products.map((product) => {
      if (product.tags.length > 0 && product.tags) {
        product.tags.map((categorys) => {
          if (categorys && categorys.length > 0) {
            if (uniqueCategorys.indexOf(categorys) === -1) {
              uniqueCategorys.push(categorys);
            }
          }
        });
      }
    });
  return uniqueCategorys;
};

// Get Unique Brand
export const uniqueBrand = (products) => {
  var uniqueBrands = [];
  products.length > 0 &&
    products.map((product) => {
      if (product.mainBrand !== "" && product.mainBrand) {
        if (uniqueBrands.indexOf(product.mainBrand) === -1) {
          uniqueBrands.push(product.mainBrand);
        }
      }
    });
  return uniqueBrands;
};

// Get Size Unique Data
export const uniqueSizes = (products) => {
  var uniqueSizes = [];
  products.length > 0 &&
    products.map((product) => {
      if (product.size.length > 0 && product.size) {
        product.size.map((sizes) => {
          if (sizes && sizes.length > 0) {
            if (uniqueSizes.indexOf(sizes) === -1) {
              uniqueSizes.push(sizes);
            }
          }
        });
      }
    });
  return uniqueSizes;
};

// All Filter Used And Get Final Response
export const getFilterProductsdata = (
  data,
  { category, size, color, value, sortOrder, ratings, search, brand, gender }
) => {
  let sizes = size;
  return data
    .filter((product) => {
      let brandMatchValue; //brands name
      if (product.mainBrand)
        brandMatchValue = brand.includes(product.mainBrand);
      else brandMatchValue = false;

      let genderMatchValue; //gender name
      if (product.gender){ 
        genderMatchValue = gender.includes(product.gender)
      }
      else genderMatchValue = false;

      let categoryMatchValue; //category
      if (product.tags)
        categoryMatchValue = product.tags.some((tag) => category.includes(tag));
      else categoryMatchValue = false;

      let sizeMatchValue; //size
      if (product.size)
        sizeMatchValue = product.size.some((size) => sizes.includes(size));
      else sizeMatchValue = true;

      let colorMatchValue; //color
      if (color && product.colors) {
        colorMatchValue = product.colors.some((colors) =>
          color.includes(colors)
        );
      } else {
        colorMatchValue = false;
      }

      let searchMatchValue; //search
      if (product.name) {
        if (search == search.toLowerCase()) {
          searchMatchValue =
            product.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        } else {
          searchMatchValue =
            product.name.toUpperCase().indexOf(search.toUpperCase()) > -1;
        }
      } else {
        searchMatchValue = false;
      }
      //price
      const startPriceMatchValue =
        typeof value.min !== "number" || value.min <= product.salePrice;
      const endPriceMatchValue =
        typeof value.max !== "number" || product.salePrice <= value.max;

      if (
        category.length > 0 &&
        color.length > 0 &&
        size.length > 0 &&
        brand.length > 0 &&
        gender.length > 0
      ) {
        return (
          categoryMatchValue &&
          colorMatchValue &&
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          brandMatchValue &&
          genderMatchValue
        );
      }
      if (
        category.length > 0 &&
        size.length > 0 &&
        brand.length > 0 &&
        gender.length > 0
      ) {
        return (
          categoryMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          sizeMatchValue &&
          brandMatchValue &&
          genderMatchValue
        );
      }
      if (
        category.length > 0 &&
        color.length > 0 &&
        brand.length > 0 &&
        gender.length > 0
      ) {
        return (
          categoryMatchValue &&
          colorMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          brandMatchValue &&
          genderMatchValue
        );
      }
      if (
        color.length > 0 &&
        size.length > 0 &&
        brand.length > 0 &&
        gender.length > 0
      ) {
        return (
          colorMatchValue &&
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          brandMatchValue &&
          genderMatchValue
        );
      }

      if (
        color.length > 0 &&
        size.length > 0 &&
        category.length > 0 &&
        gender.length > 0
      ) {
        return (
          colorMatchValue &&
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          categoryMatchValue &&
          genderMatchValue
        );
      }

      if (
        color.length > 0 &&
        size.length > 0 &&
        category.length > 0 &&
        brand.length > 0
      ) {
        return (
          colorMatchValue &&
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          categoryMatchValue &&
          brandMatchValue
        );
      }

      if (category.length > 0 && size.length > 0 && brand.length > 0) {
        return (
          categoryMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          sizeMatchValue &&
          brandMatchValue
        );
      }
      if (category.length > 0 && color.length > 0 && brand.length > 0) {
        return (
          categoryMatchValue &&
          colorMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          brandMatchValue
        );
      }
      if (color.length > 0 && size.length > 0 && brand.length > 0) {
        return (
          colorMatchValue &&
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          brandMatchValue
        );
      }

      if (color.length > 0 && size.length > 0 && category.length > 0) {
        return (
          colorMatchValue &&
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          categoryMatchValue
        );
      }

      if (color.length > 0 && size.length > 0 && gender.length > 0) {
        return (
          colorMatchValue &&
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          categoryMatchValue &&
          genderMatchValue
        );
      }
      if (color.length > 0 && brand.length > 0 && gender.length > 0) {
        return (
          colorMatchValue &&
          brandMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          categoryMatchValue &&
          genderMatchValue
        );
      }
      if (color.length > 0 && category.length > 0 && gender.length > 0) {
        return (
          colorMatchValue &&
          sizeMatchValue &&
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          categoryMatchValue &&
          genderMatchValue
        );
      }

      if (category.length > 0 && brand.length > 0) {
        return (
          categoryMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue &&
          brandMatchValue
        );
      }

      if (color.length > 0 && category.length > 0) {
        return (
          categoryMatchValue &&
          colorMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }

      if (size.length > 0 && brand.length > 0) {
        return (
          sizeMatchValue &&
          brandMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }

      if (color.length > 0 && brand.length > 0) {
        return (
          brandMatchValue &&
          colorMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }

      if (color.length > 0 && size.length > 0) {
        return (
          sizeMatchValue &&
          colorMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }

      if (category.length > 0 && size.length > 0) {
        return (
          categoryMatchValue &&
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }

      if (gender.length > 0 && size.length > 0) {
        return (
          genderMatchValue &&
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }

      if (gender.length > 0 && color.length > 0) {
        return (
          genderMatchValue &&
          colorMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }

      if (gender.length > 0 && brand.length > 0) {
        return (
          genderMatchValue &&
          brandMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }

      if (gender.length > 0 && category.length > 0) {
        return (
          genderMatchValue &&
          categoryMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }

      if (gender.length > 0) {
        return (
          genderMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }

      if (color.length > 0) {
        return (
          colorMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }
      if (category.length > 0) {
        return (
          categoryMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }
      if (brand.length > 0) {
        return (
          brandMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }
      if (size.length > 0) {
        return (
          sizeMatchValue &&
          startPriceMatchValue &&
          endPriceMatchValue &&
          searchMatchValue
        );
      }
      if (ratings.length > 0) {
        return startPriceMatchValue && endPriceMatchValue && searchMatchValue;
      } else {
        return startPriceMatchValue && endPriceMatchValue && searchMatchValue;
      }
    })
    .sort((sortpro1, sortpro2) => {
      if (sortOrder === "Pricehigh") {
        return sortpro2.salePrice < sortpro1.salePrice ? -1 : 1;
      } else if (sortOrder === "Pricelow") {
        return sortpro2.salePrice > sortpro1.salePrice ? -1 : 1;
      } else if (sortOrder === "NewProduct") {
        return sortpro2.id < sortpro1.id ? -1 : 1;
      } else {
        return sortpro2.salePrice > sortpro1.salePrice ? -1 : 1;
      }
    });
};

// Get Color Unique Data
export const uniqueColors = (products) => {
  var uniqueColors = [];
  products.map((product) => {
    if (product.colors.length > 0 && product.colors) {
      product.colors.map((color) => {
        if (color && color.length > 0) {
          if (uniqueColors.indexOf(color) === -1) {
            uniqueColors.push(color);
          }
        }
      });
    }
  });
  return uniqueColors;
};

// Get Min & Max Data in Json
export const uniqueMinMaxPrice = (products) => {
  let minimum = 0,
    maximum = 1000;
  products.map((product, index) => {
    let v = product.salePrice;
    if (v < minimum) {
      minimum = v;
    } else {
      minimum = minimum;
    }
    if (v > maximum) {
      maximum = v;
    } else {
      maximum = maximum;
    }
  });
  return { min: minimum, max: maximum };
};
