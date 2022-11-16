export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('movie', 10);
  server.create('movie',{
    title:"movie1",
    year:2020,
    rating:4.0
  });
  server.create('movie',{
    title:"movie2",
    year:2021,
    rating:4.0
  });
  server.create('product',{
    title: "T-Shirt",
    brand: "Puma",
    occasion: "Casual",
    cost:"Rs.500",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/532763/02/fv/fnd/IND/fmt/png"
  });
  server.create('product',{
    title: "Kurta",
    brand: "Vishudh",
    occasion: "Festive",
    cost:"Rs.1000",
    image: "https://i.pinimg.com/736x/cd/f5/be/cdf5be9a87113115dddba01ab956ef6a.jpg"
  });
  server.create('product',{
    title: "Shirt",
    brand: "Raymond",
    occasion: "Formal",
    cost:"Rs.1500",
    image: "https://m.media-amazon.com/images/I/81i7eTHH5DL._UY550_.jpg"
  });
  server.create('item',{
    title: "T-Shirt",
    brand: "Puma",
    occasion: "Casual",
    cost:"Rs.500",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/532763/02/fv/fnd/IND/fmt/png"
  });
  server.create('item',{
    title: "Kurta",
    brand: "Vishudh",
    occasion: "Festive",
    cost:"Rs.1,000",
    image: "https://i.pinimg.com/736x/cd/f5/be/cdf5be9a87113115dddba01ab956ef6a.jpg"
  });
  server.create('item',{
    title: "Shirt",
    brand: "Raymond",
    occasion: "Formal",
    cost:"Rs.1,500",
    image: "https://m.media-amazon.com/images/I/81i7eTHH5DL._UY550_.jpg"
  });
  server.create('item',{
    title: "Rose gold watch",
    brand: "Titan",
    occasion: "Casual",
    cost:"Rs.6,920",
    image: "https://staticimg.titan.co.in/Titan/Catalog/95141WM01_1.jpg?impolicy=pqlow&imwidth=640"
  });
  server.create('item',{
    title: "Wedges",
    brand: "Bata",
    occasion: "Casual",
    cost:"Rs.2,000",
    image: "https://rukminim1.flixcart.com/image/832/832/k6gsk280/sandal/d/e/h/761-5904-6-bata-pink-original-imafzgxq5ffskt98.jpeg?q=70"
  });
  server.create('item',{
    title: "Shoes",
    brand: "Adidas",
    occasion: "Casual",
    cost:"Rs.6,749",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Forum_Low_Shoes_White_FY7756_01_standard.jpg"
  });
  server.create('token',{
    username:"letme",
    password:"in"
  });
}
