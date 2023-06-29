

const Category = require("./models/categories");
const Item = require("./models/item");

(async function () {
  console.log(Category)
  await Category.deleteMany({});
  const categori = await Category.create([
      {
      index: 35,
      name: 'Comedy',
      category:'f' 
      
      },{index: 27,
          name: 'Horror',
          category:'g'
          },
          {index: 28,
            name: 'Action',
            category:'e'
            },
            {index: 878,
              name: 'Sci-fi',
              category:'d' 
              },
              {index: 11,
                name: 'Trending',
                category:'a'
                },
                {index: 22,
                  name: 'Top rating',
                  category:'b'
                  },
                  {index: 33,
                    name: 'Now playing',
                    category:'c'
                    },
  ]);

  // await Item.deleteMany({});
  // const items = await Item.create([
  //   {

  //   }
  //  ]);

  console.log(categori);

  process.exit();
})();
