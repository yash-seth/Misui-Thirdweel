const StoreData = [
  { id: 0, src: "store1.png", alt: "store" },
  { id: 1, src: "store2.png", alt: "store" },
  { id: 2, src: "store1.png", alt: "store" },
  { id: 3, src: "store2.png", alt: "store" },
];

const StoryData = [
  { id: 0, src: "stories.jpg", alt: "stories circle", storyImg: "storyImage.png", timeAgo: "12hrs ago", name: "Laxmi Stores 1", type:"content" },
  { id: 1, src: "post 1.png", alt: "stories circle", prodImg:"prod.png",price: "$75", discount: "$45", prodName: "Lays Potato Chips - Masala Magic", amount: "115gm/130gm (Weight May Vary)", peopleWatching: 102, addr:"2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",  timeAgo: "12hrs ago", name: "Laxmi Stores 2" , type:"promo"},
  { id: 2, src: "stories.jpg", alt: "stories circle", storyImg: "post 2.png", timeAgo: "12hrs ago", name: "Laxmi Stores 3" , type:"content"},
  { id: 3, src: "post 2.png", alt: "stories circle", storyImg: "storyImage.png", timeAgo: "12hrs ago", name: "Laxmi Stores 4" , type:"content"},
  { id: 4, src: "stories.jpg", alt: "stories circle", prodImg:"prod.png",price: "$75", discount: "$45", prodName: "Lays Potato Chips - Masala Magic", amount: "115gm/130gm (Weight May Vary)", peopleWatching: 102, addr:"2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",  timeAgo: "12hrs ago", name: "Laxmi Stores 5" , type:"promo"},
  { id: 5, src: "post 1.png", alt: "stories circle", storyImg: "post 2.png", timeAgo: "12hrs ago", name: "Laxmi Stores 6" , type:"content"},
  { id: 6, src: "stories.jpg", alt: "stories circle", storyImg: "storyImage.png", timeAgo: "12hrs ago", name: "Laxmi Stores 7" , type:"content"},
  { id: 7, src: "post 2.png", alt: "stories circle", prodImg:"prod.png",price: "$75", discount: "$45", prodName: "Lays Potato Chips - Masala Magic", amount: "115gm/130gm (Weight May Vary)", peopleWatching: 102, addr:"2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",  timeAgo: "12hrs ago", name: "Laxmi Stores 8" , type:"promo"},
  { id: 8, src: "post 1.png", alt: "stories circle", storyImg: "post 1.png", timeAgo: "12hrs ago", name: "Laxmi Stores 9" , type:"content"},
];

const TrendingData = [
  { id: 0, src: "trendingItem.png", alt: "trendingItem" },
  { id: 1, src: "trendingItem.png", alt: "trendingItem" },
  { id: 2, src: "trendingItem.png", alt: "trendingItem" },
  { id: 3, src: "trendingItem.png", alt: "trendingItem" },
  { id: 4, src: "trendingItem.png", alt: "trendingItem" },
];

const DiscountBarData = [
  { id: 0, src: "learnMoreTeamBuy.png", alt: "app banner" },
  { id: 1, src: "discountBanner.png", alt: "app banner" },
];

const TopOfferData = [
  { id: 0, src: "discount1.png", alt: "discount" },
  { id: 1, src: "discount2.png", alt: "discount" },
  { id: 2, src: "discount1.png", alt: "discount" },
  { id: 3, src: "discount2.png", alt: "discount" },
];

const CategoryData = [
  { id: 0, src: "category1.png", alt: "category" },
  { id: 1, src: "category2.png", alt: "category" },
  { id: 2, src: "category3.png", alt: "category" },
  { id: 3, src: "category1.png", alt: "category" },
  { id: 4, src: "category2.png", alt: "category" },
  { id: 5, src: "category3.png", alt: "category" },
  { id: 6, src: "category1.png", alt: "category" },
  { id: 7, src: "category2.png", alt: "category" },
  { id: 8, src: "category3.png", alt: "category" },
  { id: 9, src: "category1.png", alt: "category" },
  { id: 10, src: "category2.png", alt: "category" },
  { id: 11, src: "category3.png", alt: "category" },
];

const DiscountBannerData = [
  { id: 0, src: "discountBanner.png", alt: "discountBanner" },
];

const AboutData = [
  { id: 0, src: "pickup.png", alt: "about banner" },
  { id: 1, src: "delivery.png", alt: "about banner" },
];

const StoreSearchData = [
  {
    id: 0,
    src: "store.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "rating.png",
    distance: "4.2km",
    name: "Rahul Stores",
    product: [
      {
        id: 0,
        src: "product1.png",
        alt: "product",
        name: "Masala Lays",
        weight: "50 gm",
        price: "$20",
      },
      {
        id: 1,
        src: "product2.png",
        alt: "product",
        name: "Veggie Fingers",
        weight: "250 gm",
        price: "$120",
      },
      {
        id: 2,
        src: "product3.png",
        alt: "product",
        name: "Harpic Cleaner",
        weight: "500 ml",
        price: "$220",
      },
    ],
  },
  {
    id: 1,
    src: "store.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "rating.png",
    distance: "4.2km",
    name: "Rahul Stores",
    product: [
      {
        id: 0,
        src: "product1.png",
        alt: "product",
        name: "Masala Lays",
        weight: "50 gm",
        price: "$20",
      },
      {
        id: 1,
        src: "product2.png",
        alt: "product",
        name: "Veggie Fingers",
        weight: "250 gm",
        price: "$120",
      },
      {
        id: 2,
        src: "product3.png",
        alt: "product",
        name: "Harpic Cleaner",
        weight: "500 ml",
        price: "$220",
      },
    ],
  },
  {
    id: 2,
    src: "store.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "rating.png",
    distance: "4.2km",
    name: "Rahul Stores",
    product: [
      {
        id: 0,
        src: "product1.png",
        alt: "product",
        name: "Masala Lays",
        weight: "50 gm",
        price: "$20",
      },
      {
        id: 1,
        src: "product2.png",
        alt: "product",
        name: "Veggie Fingers",
        weight: "250 gm",
        price: "$120",
      },
      {
        id: 2,
        src: "product3.png",
        alt: "product",
        name: "Harpic Cleaner",
        weight: "500 ml",
        price: "$220",
      },
    ],
  },
  {
    id: 3,
    src: "store.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "rating.png",
    distance: "4.2km",
    name: "Rahul Stores",
    product: [
      {
        id: 0,
        src: "product1.png",
        alt: "product",
        name: "Masala Lays",
        weight: "50 gm",
        price: "$20",
      },
      {
        id: 1,
        src: "product2.png",
        alt: "product",
        name: "Veggie Fingers",
        weight: "250 gm",
        price: "$120",
      },
      {
        id: 2,
        src: "product3.png",
        alt: "product",
        name: "Harpic Cleaner",
        weight: "500 ml",
        price: "$220",
      },
    ],
  },
  {
    id: 4,
    src: "store.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "rating.png",
    distance: "4.2km",
    name: "Rahul Stores",
    product: [
      {
        id: 0,
        src: "product1.png",
        alt: "product",
        name: "Masala Lays",
        weight: "50 gm",
        price: "$20",
      },
      {
        id: 1,
        src: "product2.png",
        alt: "product",
        name: "Veggie Fingers",
        weight: "250 gm",
        price: "$120",
      },
      {
        id: 2,
        src: "product3.png",
        alt: "product",
        name: "Harpic Cleaner",
        weight: "500 ml",
        price: "$220",
      },
    ],
  },
  {
    id: 5,
    src: "store.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "rating.png",
    distance: "4.2km",
    name: "Rahul Stores",
    product: [
      {
        id: 0,
        src: "product1.png",
        alt: "product",
        name: "Masala Lays",
        weight: "50 gm",
        price: "$20",
      },
      {
        id: 1,
        src: "product2.png",
        alt: "product",
        name: "Veggie Fingers",
        weight: "250 gm",
        price: "$120",
      },
      {
        id: 2,
        src: "product3.png",
        alt: "product",
        name: "Harpic Cleaner",
        weight: "500 ml",
        price: "$220",
      },
    ],
  },
];

const itemsToExplore = [
  {
    id: 0,
    src: "product2.png",
    alt: "product",
    name: "Veggie Fingers",
    weight: "250 gm",
    price: "$120",
  },
  {
    id: 1,
    src: "product4.png",
    alt: "product",
    name: "Pringles",
    weight: "100 gm",
    price: "$80",
  },
  {
    id: 2,
    src: "product2.png",
    alt: "product",
    name: "Veggie Fingers",
    weight: "250 gm",
    price: "$120",
  },
  {
    id: 3,
    src: "product4.png",
    alt: "product",
    name: "Pringles",
    weight: "100 gm",
    price: "$80",
  },
  {
    id: 4,
    src: "product2.png",
    alt: "product",
    name: "Veggie Fingers",
    weight: "250 gm",
    price: "$120",
  },
  {
    id: 5,
    src: "product4.png",
    alt: "product",
    name: "Pringles",
    weight: "100 gm",
    price: "$80",
  },
  {
    id: 6,
    src: "product2.png",
    alt: "product",
    name: "Veggie Fingers",
    weight: "250 gm",
    price: "$120",
  },
]

const BoughtTogetherData =[
  {
    id: 0,
    src: "product2.png",
    alt: "product",
    name: "Veggie Fingers",
    weight: "250 gm",
    price: "$120",
  },
  {
    id: 1,
    src: "product4.png",
    alt: "product",
    name: "Pringles",
    weight: "100 gm",
    price: "$80",
  },
  {
    id: 2,
    src: "product2.png",
    alt: "product",
    name: "Veggie Fingers",
    weight: "250 gm",
    price: "$120",
  },
]

const localStoresData =[
  {
    id: 0,
    src: "store2.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "ratings.png",
    distance: "4.2km",
    name: "Rahul Stores",
  },
  {
    id: 1,
    src: "store2.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "ratings.png",
    distance: "4.2km",
    name: "Rahul Stores",
  },
  {
    id: 2,
    src: "store2.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "ratings.png",
    distance: "4.2km",
    name: "Rahul Stores",
  },
  {
    id: 3,
    src: "store2.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "ratings.png",
    distance: "4.2km",
    name: "Rahul Stores",
  },
  {
    id: 4,
    src: "store2.png",
    alt: "Store Info",
    address_line_one: "2nd Floor, K-Tech NASSCOM, 67, Phase 3,",
    address_line_two: "1st Sector, HSR Layout, Bengaluru,",
    address_line_three: "Karnataka 560102",
    contact: "75063326420",
    rating: "ratings.png",
    distance: "4.2km",
    name: "Rahul Stores",
  },
]

const imageGalleryData = [
    {id:0,src:"image 47.png", alt:"product image"},
    {id:1,src:"image 48.png", alt:"product image"},
    {id:2,src:"image 50.png", alt:"product image"}
  ]

const categoryDropdownData =[
  {id:0,name:"Fruits and Vegetables"},
  {id:1,name:"Foodgrains, Oil and Masala"},
  {id:2,name:"Bakery, Cakes and Dairy"},
  {id:3,name:"Beverages"},
  {id:4,name:"Snacks and Branded Foods"},
  {id:5,name:"Beauty and Hygiene"},
  {id:6,name:"Cleaning and Household"},
  {id:7,name:"Baby Care"},
  {id:8,name:"View All"},
]

const sortByData = [
  {id:0,name:"Relevance"},
  {id:1,name:"Rating"},
]

const TeamBuyData = [
  { id: 0, src: "banner.png", alt: "store" },
  { id: 1, src: "banner.png", alt: "store" },
  { id: 2, src: "banner.png", alt: "store" },
  { id: 3, src: "banner.png", alt: "store" },
];

const TeamBuyProductData = [
  { id: 0, teamLeaderSrc: "Ellipse 82.png", teamLeaderName: "Zoya", numOfMembers: [1,1,1,0], time: "23:18:03" },
  { id: 1, teamLeaderSrc: "Ellipse 83.png", teamLeaderName: "Rahul", numOfMembers: [1,1,0,0], time: "23:18:03" },
]


const addressData = [
  {id:0, label:"Home", name:"Shivam Rathore", address: "2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:1, label:"Work", name:"Shivam Rathore", address: "2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:2, label:"Home 2", name:"Shivam Rathore", address: "2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
]

const storeWiseCartData = [
  {id:0, name:"Laxman Stores",distance:"4.2 km",addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", total:"$1154",savings:"$145",products:[{id:0,name:"Lays Potato Chips - Masala Magic", amount: "115gm/130gm (Weight May Vary)", status: "In Stock", cost: "$55", quantity: "2", imgSrc:"prod1.png"},{id:1,name:"Fortune Sunlite Refined Sunflower Oil", amount: "5L", status: "In Stock", cost: "$680", quantity: "1", imgSrc:"prod2.png"}]},
  {id:1, name:"Laxman Stores",distance:"4.2 km",addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", total:"$1154",savings:"$145",products:[{id:0,name:"Lays Potato Chips - Masala Magic", amount: "115gm/130gm (Weight May Vary)", status: "In Stock", cost: "$55", quantity: "2", imgSrc:"prod1.png"},{id:1,name:"Fortune Sunlite Refined Sunflower Oil", amount: "5L", status: "In Stock", cost: "$680", quantity: "1", imgSrc:"prod2.png"}]},
  {id:2, name:"Laxman Stores",distance:"4.2 km",addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", total:"$1154",savings:"$145",products:[{id:0,name:"Lays Potato Chips - Masala Magic", amount: "115gm/130gm (Weight May Vary)", status: "In Stock", cost: "$55", quantity: "2", imgSrc:"prod1.png"},{id:1,name:"Fortune Sunlite Refined Sunflower Oil", amount: "5L", status: "In Stock", cost: "$680", quantity: "1", imgSrc:"prod2.png"}]},
]

const storeProfileData = [
  {id:0, name:"Laxmi Stores", distance: "4.2km", rating: "rating.png", postsCount: 23, followersCount: 356, contactDetails: "75063326420",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci, rem tempore perferendis vero inventore blanditiis dolore modi odit minus distinctio quos dolor consequuntur repudiandae eaque porro amet eligendi esse.", location: "Phase 3, Bengaluru"},
]

const storeProfileImages = [
  {id:0, src:"newPost.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
  {id:1, src:"post 2.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
  {id:2, src:"post 1.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
  {id:3, src:"post 2.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
  {id:4, src:"post 1.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
  {id:5, src:"post 2.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
]

const storeProfileTopProducts = [
  {
    id: 0,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 1,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 2,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 3,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 4,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 5,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
]

const ProfileData = [
  {id:0, name:"Suraj Nair", postsCount: 23, followersCount: 356, about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci, rem tempore perferendis vero inventore blanditiis dolore modi odit minus distinctio quos dolor consequuntur repudiandae eaque porro amet eligendi esse.", location: "Phase 3, Bengaluru"},
]

const ProfileImages = [
  {id:0, src:"newPost.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
  {id:1, src:"post 2.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
  {id:2, src:"post 1.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
  {id:3, src:"post 2.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
  {id:4, src:"post 1.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
  {id:5, src:"post 2.png", alt:"store profile image", caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam beatae dolorum nemo, facilis animi incidunt repudiandae nesciunt expedita, dolor dolore nihil harum. Atque, nisi iusto impedit officia et maiores!", likes: 9111, comments: 92, commentsList:[{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}, {id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1},{id:0, comment: "Nice Post. This is a good post. What a great post", profileImg: "Ellipse 72.png", name:"name", timePosted:"5s ago", likes:1, comments: 1}]},
]

const rewardsImages = [
  {id:0, src:"reward.png", alt:"store profile image", offerExpiry: "July 24, 2022", storeName: "Laxmi Stores", storeAddr: "2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:1, src:"reward.png", alt:"store profile image", offerExpiry: "July 24, 2022", storeName: "Laxmi Stores", storeAddr: "2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:2, src:"reward.png", alt:"store profile image", offerExpiry: "July 24, 2022", storeName: "Laxmi Stores", storeAddr: "2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:3, src:"reward.png", alt:"store profile image", offerExpiry: "July 24, 2022", storeName: "Laxmi Stores", storeAddr: "2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:4, src:"reward.png", alt:"store profile image", offerExpiry: "July 24, 2022", storeName: "Laxmi Stores", storeAddr: "2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:5, src:"reward.png", alt:"store profile image", offerExpiry: "July 24, 2022", storeName: "Laxmi Stores", storeAddr: "2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
]

const ProfileTopProducts = [
  {
    id: 0,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 1,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 2,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 3,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 4,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 5,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
  },
]

const StoreItemsPageInfo = [
  {id:0, src:"store.png", name: "Laxmi Stores", dist: "4.2km", location: "Phase 3, Bengaluru", contact: "75063326420", rating: "rating.png", about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci, rem tempore perferendis vero inventore blanditiis dolore modi odit minus distinctio quos dolor consequuntur repudiandae eaque porro amet eligendi esse."}
]

const StoreItemsProducts = [
  {id: 0,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
    quantity: 1,
    availableQuantities: [{id: 0, weight: "50gm", cost: "$25"},{id: 0, weight: "100gm", cost: "$50"},{id: 2, weight: "150gm", cost: "$100"},{id: 3, weight: "200gm", cost: "$150"}]
  },
  {id: 1,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays 1",
    weight: "50 gm",
    price: "$20",
    quantity: 1,
    availableQuantities: [{id: 0, weight: "750gm", cost: "$250"},{id: 0, weight: "100gm", cost: "$50"},{id: 2, weight: "150gm", cost: "$100"},{id: 3, weight: "200gm", cost: "$150"}]
  },
  {id: 2,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays 2",
    weight: "50 gm",
    price: "$20",
    quantity: 1,
    availableQuantities: [{id: 0, weight: "1500gm", cost: "$250"},{id: 0, weight: "100gm", cost: "$50"},{id: 2, weight: "150gm", cost: "$100"},{id: 3, weight: "200gm", cost: "$150"}]
  },
  {id: 3,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays 3",
    weight: "50 gm",
    price: "$20",
    quantity: 1,
    availableQuantities: [{id: 0, weight: "50gm", cost: "$25"},{id: 0, weight: "100gm", cost: "$50"},{id: 2, weight: "150gm", cost: "$100"},{id: 3, weight: "200gm", cost: "$150"}]
  },
  {id: 4,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays 4",
    weight: "50 gm",
    price: "$20",
    quantity: 1,
    availableQuantities: [{id: 0, weight: "50gm", cost: "$25"},{id: 0, weight: "100gm", cost: "$50"},{id: 2, weight: "150gm", cost: "$100"},{id: 3, weight: "200gm", cost: "$150"}]
  },
  {id: 5,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
    quantity: 1,
    availableQuantities: [{id: 0, weight: "50gm", cost: "$25"},{id: 0, weight: "100gm", cost: "$50"},{id: 2, weight: "150gm", cost: "$100"},{id: 3, weight: "200gm", cost: "$150"}]
  },
]

const StoreItemsCart = [
  {id: 0,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
    quantity: 1
  },
  {id: 1,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
    quantity: 1
  },
  {id: 2,
    src: "veggies.png",
    alt: "product",
    name: "Masala Lays",
    weight: "50 gm",
    price: "$20",
    quantity: 1
  },
]

const cartCheckoutPickupData = [
  {id: 0,
    name:"Shree Laxmi Stores, Sant Tukaram Marg, Thane (East)",
    addr: "Shop No 3, Vilas Apartments - Vilas CHSL, Sant Tukaram Road, Kopri, Daulat Nagar, Thane (East), Thane, Maharashtra",
    timeSlots: [
      {id:0, slot: "Tomorrow 10:00AM - 12:00PM"},
      {id:1, slot: "Tomorrow 03:00PM - 05:00PM"}
    ] 
  },
  {id: 1,
    name:"Shree Laxmi Stores, Sant Tukaram Marg, Thane (East)",
    addr: "Shop No 3, Vilas Apartments - Vilas CHSL, Sant Tukaram Road, Kopri, Daulat Nagar, Thane (East), Thane, Maharashtra",
    timeSlots: [
      {id:0, slot: "Tomorrow 10:00AM - 12:00PM"},
      {id:1, slot: "Tomorrow 03:00PM - 05:00PM"}
    ] 
  },
  {id: 2,
    name:"Shree Laxmi Stores, Sant Tukaram Marg, Thane (East)",
    addr: "Shop No 3, Vilas Apartments - Vilas CHSL, Sant Tukaram Road, Kopri, Daulat Nagar, Thane (East), Thane, Maharashtra",
    timeSlots: [
      {id:0, slot: "Tomorrow 10:00AM - 12:00PM"},
      {id:1, slot: "Tomorrow 03:00PM - 05:00PM"}
    ] 
  },
]

const paymentSuccessfulScatchCardData = 
  {id: 0, name: "Laxmi Store", scatchCards:[{id:0,unlocked:1,src:"B1G1ScratchCard.png", alt:"buy 1 get 1 scatch card"},{id:1,unlocked:0,src:"B1G1ScratchCard.png", alt:"buy 1 get 1 scatch card"},{id:2,unlocked:0,src:"B1G1ScratchCard.png", alt:"buy 1 get 1 scatch card"},{id:3,unlocked:0,src:"B1G1ScratchCard.png", alt:"buy 1 get 1 scatch card"}]}


const FAQTopicList = [
  {id:0, name:"Order"},
  {id:0, name:"Cancellations and returns"},
  {id:0, name:"Payments"},
  {id:0, name:"Shopping"},
  {id:0, name:"Wallet"},
  {id:0, name:"Seller"},
]

const FAQQuestionsList = [
  {id:0, question:"Lorem ipsum dolor sit amet, consectetur?", answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur vero optio labore veniam pariatur. Id nesciunt, vel tempora, libero ab quod aperiam doloribus ea asperiores, laborum quos a rem consequatur!'},
  {id:1, question:"Lorem ipsum dolor sit amet, consectetur?", answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur vero optio labore veniam pariatur. Id nesciunt, vel tempora, libero ab quod aperiam doloribus ea asperiores, laborum quos a rem consequatur!'},
  {id:2, question:"Lorem ipsum dolor sit amet, consectetur?", answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur vero optio labore veniam pariatur. Id nesciunt, vel tempora, libero ab quod aperiam doloribus ea asperiores, laborum quos a rem consequatur!'},
  {id:3, question:"Lorem ipsum dolor sit amet, consectetur?", answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur vero optio labore veniam pariatur. Id nesciunt, vel tempora, libero ab quod aperiam doloribus ea asperiores, laborum quos a rem consequatur!'},
  {id:4, question:"Lorem ipsum dolor sit amet, consectetur?", answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur vero optio labore veniam pariatur. Id nesciunt, vel tempora, libero ab quod aperiam doloribus ea asperiores, laborum quos a rem consequatur!'},
  {id:5, question:"Lorem ipsum dolor sit amet, consectetur?", answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur vero optio labore veniam pariatur. Id nesciunt, vel tempora, libero ab quod aperiam doloribus ea asperiores, laborum quos a rem consequatur!'},
  {id:6, question:"Lorem ipsum dolor sit amet, consectetur?", answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur vero optio labore veniam pariatur. Id nesciunt, vel tempora, libero ab quod aperiam doloribus ea asperiores, laborum quos a rem consequatur!'},
]

const CustomerServiceIssueQuestion = [
  {id:0, question:"I want to track my order", answer: 'Check order status and call the delivery agent'},
  {id:1, question:"I want to track my order", answer: 'Check order status and call the delivery agent'},
  {id:2, question:"I want to track my order", answer: 'Check order status and call the delivery agent'},
  {id:3, question:"I want to track my order", answer: 'Check order status and call the delivery agent'},
]

const AddAddressTopicList = [
  {id:0, name:"My Orders"},
  {id:1, name:"My Profile"},
  {id:2, name:"Payments"},
  {id:3, name:"My Chats"},
]

const profileAddresses = [
  {id:0, name:"Ishaan Kumar", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", contact: "75063326420"},
  {id:1, name:"Ravi Kumar", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", contact: "75063326420"},
  {id:2, name:"Ravi Kumar", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", contact: "75063326420"},
  {id:3, name:"Ravi Kumar", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", contact: "75063326420"},
]

const ChatRouletteData = [
  {id:0, src:"reward.png", name:"ABC Store", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:1, src:"reward.png", name:"ABC Store", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:2, src:"reward.png", name:"ABC Store", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:3, src:"reward.png", name:"ABC Store", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:4, src:"reward.png", name:"ABC Store", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:5, src:"reward.png", name:"ABC Store", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:6, src:"reward.png", name:"ABC Store", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:7, src:"reward.png", name:"ABC Store", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:8, src:"reward.png", name:"ABC Store", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
  {id:9, src:"reward.png", name:"ABC Store", addr:"2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"},
]

const productAvailabilityData = [
  {id: 0, name: "Masala Lays Chips - Masala Magic", lastSearchedDate: "17 March, 2022", lastSearchedTime: "7:00 PM", numOfStoresFound: 45, src:"prod.png"},
  {id: 1, name: "Masala Lays Chips - Masala Magic", lastSearchedDate: "17 March, 2022", lastSearchedTime: "7:00 PM", numOfStoresFound: 45, src:"prod.png"},
  {id: 2, name: "Masala Lays Chips - Masala Magic", lastSearchedDate: "17 March, 2022", lastSearchedTime: "7:00 PM", numOfStoresFound: 45, src:"prod.png"},
  {id: 3, name: "Masala Lays Chips - Masala Magic", lastSearchedDate: "17 March, 2022", lastSearchedTime: "7:00 PM", numOfStoresFound: 45, src:"prod.png"},
  {id: 4, name: "Masala Lays Chips - Masala Magic", lastSearchedDate: "17 March, 2022", lastSearchedTime: "7:00 PM", numOfStoresFound: 45, src:"prod.png"},
  {id: 5, name: "Masala Lays Chips - Masala Magic", lastSearchedDate: "17 March, 2022", lastSearchedTime: "7:00 PM", numOfStoresFound: 45, src:"prod.png"},
  {id: 6, name: "Masala Lays Chips - Masala Magic", lastSearchedDate: "17 March, 2022", lastSearchedTime: "7:00 PM", numOfStoresFound: 45, src:"prod.png"},
]

const OrderHistoryData = [
  {id: 0, status: "Complete", ID: 24245768, timestampPlaced: "17 Mar, Thu 4:00 PM - 7:00 PM", amount: "$1450", type: "Home Delivery", name: "Rohan Kumar", address: "2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", paymentMode: "UPI", savings: "$245"},
  {id: 1, status: "Complete", ID: 24245768, timestampPlaced: "17 Mar, Thu 4:00 PM - 7:00 PM", amount: "$1450", type: "Home Delivery", name: "Rohan Kumar", address: "2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", paymentMode: "UPI", savings: "$245"},
  {id: 2, status: "Complete", ID: 24245768, timestampPlaced: "17 Mar, Thu 4:00 PM - 7:00 PM", amount: "$1450", type: "Home Delivery", name: "Rohan Kumar", address: "2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", paymentMode: "UPI", savings: "$245"},
  {id: 3, status: "Complete", ID: 24245768, timestampPlaced: "17 Mar, Thu 4:00 PM - 7:00 PM", amount: "$1450", type: "Home Delivery", name: "Rohan Kumar", address: "2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", paymentMode: "UPI", savings: "$245"},
  {id: 4, status: "Complete", ID: 24245768, timestampPlaced: "17 Mar, Thu 4:00 PM - 7:00 PM", amount: "$1450", type: "Home Delivery", name: "Rohan Kumar", address: "2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", paymentMode: "UPI", savings: "$245"},
]

const TeamBuyHistoryData = [
  {id: 0, status: "Complete", ID: 24245768, timestampPlaced: "17 Mar, Thu 4:00 PM - 7:00 PM", amount: "$1450", type: "Home Delivery", name: "Rohan Kumar", address: "2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", paymentMode: "UPI", savings: "$245"},
  {id: 1, status: "Complete", ID: 24245768, timestampPlaced: "17 Mar, Thu 4:00 PM - 7:00 PM", amount: "$1450", type: "Home Delivery", name: "Rohan Kumar", address: "2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", paymentMode: "UPI", savings: "$245"},
  {id: 2, status: "Complete", ID: 24245768, timestampPlaced: "17 Mar, Thu 4:00 PM - 7:00 PM", amount: "$1450", type: "Home Delivery", name: "Rohan Kumar", address: "2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", paymentMode: "UPI", savings: "$245"},
  {id: 3, status: "Complete", ID: 24245768, timestampPlaced: "17 Mar, Thu 4:00 PM - 7:00 PM", amount: "$1450", type: "Home Delivery", name: "Rohan Kumar", address: "2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", paymentMode: "UPI", savings: "$245"},
  {id: 4, status: "Complete", ID: 24245768, timestampPlaced: "17 Mar, Thu 4:00 PM - 7:00 PM", amount: "$1450", type: "Home Delivery", name: "Rohan Kumar", address: "2nd floor, K-Tech NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", paymentMode: "UPI", savings: "$245"},
]

const profileStoryData = [
  { id: 0, src: "Ellipse 875.png", alt: "stories circle", caption: "new"},
  { id: 1, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 2, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 3, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 4, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 5, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 6, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 7, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 8, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
];

const storeStoryData = [
  { id: 0, src: "Ellipse 875.png", alt: "stories circle", caption: "new"},
  { id: 1, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 2, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 3, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 4, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 5, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 6, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 7, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
  { id: 8, src: "stories.jpg", alt: "stories circle" , caption: "shop"},
];

const highlightStoryData = [
  {id:0, src:"highlight.png", alt:"highlight story", date: "23 Jun"},
  {id:1, src:"highlight.png", alt:"highlight story", date: "23 Jun"},
  {id:2, src:"highlight.png", alt:"highlight story", date: "23 Jun"},
  {id:3, src:"highlight.png", alt:"highlight story", date: "23 Jun"},
  {id:4, src:"highlight.png", alt:"highlight story", date: "23 Jun"},
  {id:5, src:"highlight.png", alt:"highlight story", date: "23 Jun"},
  {id:6, src:"highlight.png", alt:"highlight story", date: "23 Jun"},
  {id:7, src:"highlight.png", alt:"highlight story", date: "23 Jun"},
  {id:8, src:"highlight.png", alt:"highlight story", date: "23 Jun"},
]

const teamBuyTeamAndItemData =  {id:0, src:"prod1.png", name: "Lays Potato Chips - Masala Magic", price: "$75", teamBuy: "$256", deliveryCharges: "$60", total: "$45", discPrice: "$55", amount: "115gm/130gm (Weight May Vary)", purchasedFrom:"Laxman Stores", addr: "2nd Floor, K-Tech, NASSCOM, 67, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102", dist: "4.2km", orderID: "22222222", orderPlacedTS: "17 Mar, 2022 4:00 PM - 7:00 PM"}

const teamBuyTeamDetails = [{id: 0, name: "Zoya", pfp:"Ellipse 82.png"}, {id: 1, name: "Jim", timeJoined:"2 hr ago", pfp:"Ellipse 83.png", state: true}, {id: 2, name: "Jim", timeJoined:"2 hr ago", pfp:"Ellipse 83.png", state: true}, {id: 3, name: "Jim", timeJoined:"2 hr ago", pfp:"Ellipse 83.png", state: false}]

const teamBuyItems = [
  {
    id: 0,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 1,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },{
    id: 2,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },{
    id: 3,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },{
    id: 4,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },{
    id: 5,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },{
    id: 6,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },{
    id: 7,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 8,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 9,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 10,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },
  {
    id: 11,
    src: "product1.png",
    alt: "product",
    name: "Lays Potato Chips Masala Magic ",
    weight: "50 gm",
    price: "$20",
  },
]

export {
  TrendingData,
  StoryData,
  StoreData,
  DiscountBarData,
  TopOfferData,
  CategoryData,
  DiscountBannerData,
  AboutData,
  StoreSearchData,
  itemsToExplore,
  BoughtTogetherData,
  localStoresData,
  imageGalleryData,
  categoryDropdownData,
  sortByData,
  TeamBuyData,
  TeamBuyProductData,
  addressData,
  storeWiseCartData,
  storeProfileData,
  storeProfileImages,
  storeProfileTopProducts,
  ProfileData,
  ProfileImages,
  ProfileTopProducts,
  StoreItemsPageInfo,
  StoreItemsProducts,
  StoreItemsCart,
  cartCheckoutPickupData,
  paymentSuccessfulScatchCardData,
  rewardsImages,
  FAQTopicList,
  FAQQuestionsList,
  CustomerServiceIssueQuestion,
  AddAddressTopicList,
  profileAddresses,
  ChatRouletteData,
  productAvailabilityData,
  OrderHistoryData,
  TeamBuyHistoryData,
  profileStoryData,
  storeStoryData,
  highlightStoryData,
  teamBuyTeamAndItemData,
  teamBuyTeamDetails,
  teamBuyItems,
};