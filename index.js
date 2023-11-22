const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://www.imperialsugar.com/sites/default/files/recipe/Old-Fashioned-Buttermilk-Pancakes-imperial_0.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/86/9d/db/canada-s-diner-double.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://mangalorecookbook.files.wordpress.com/2017/01/milo_godzilla.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://imgmedia.lbb.in/media/2021/06/60d2f2456e30431f326897d0_1624437317533.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5hbSCp7dNV3lRI-DN4X1WpwPzLeyRdVRsS4d0bcCf3UXq24UpSQpo4rgXum-XnShIgcc&usqp=CAU",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://saltandbaker.com/wp-content/uploads/2020/12/oreo-milkshake-recipe.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Methi Matar Malai",
    category: "breakfast",
    price: 8.99,
    img: "https://pipingpotcurry.com/wp-content/uploads/2019/08/Methi-Matar-Malai-17.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Dal Bati",
    category: "lunch",
    price: 12.99,
    img: "https://images.news18.com/ibnkhabar/uploads/2023/08/mix-dal-bati.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Butter Paneer",
    category: "shakes",
    price: 16.99,
    img: "https://vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg.webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
let content = document.querySelector ('#content');
let buttons = document.querySelectorAll ('button');

window.addEventListener ("DOMContentLoaded", () => {
  displayMenu(menu);
});

buttons.forEach ((val) => {
  val.addEventListener ('click', (e) => {
    let category = e.currentTarget.dataset.id;
    let menuCategory = menu.filter ( (value) => {
      if (value.category == category) {
        return value;
      }
    });

    if (category === 'all') {
      displayMenu(menu);
    }else {
      displayMenu (menuCategory);
    }

  });
});

function displayMenu (menuItems) {
  let show = menuItems.map ( (val) => {
    return `<div id="item">
      <img src=${val.img} alt="pancakes">
      <div id="item-info">
          <div id="sub-item">
              <h4>${val.title}</h4>
              <span>${val.price}</span>
          </div>
          <span>${val.desc}</span>
      </div>
    </div>
    <hr>`;

  });

  content.innerHTML = show.join("\n");
}