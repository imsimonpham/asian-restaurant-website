import dumplings from "../assets/icons/dumplings.png"
import springrolls from "../assets/icons/springrolls.png"
import dimsum from "../assets/icons/dimsum.png"
import noodles from "../assets/icons/noodles.png"
import rice from "../assets/icons/rice.png"
import soup from "../assets/icons/soup.png"
import ava1 from "../assets/customers/1.jpg"
import ava2 from "../assets/customers/2.jpg"
import ava3 from "../assets/customers/3.jpg"
import dish1 from "../assets/food/1.png"
import dish2 from "../assets/food/2.png"
import dish3 from "../assets/food/3.png"
import dish4 from "../assets/food/4.png"

export const colors = {
  darkish: "#17171D",
  red: "#DE4623",
  whiteish: "#FCF3DC",
  brownish: "#EFE4C9",
  darkest: "#0F0F14",
}

export const fonts = {
  raleway: "Raleway",
  ralewayMixed: "Raleway, Helvetica, Arial, sans-serif",
}

export const menu = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "About Us",
    link: "/about",
  },
  {
    page: "Menu",
    link: "/menu",
  },
  {
    page: "Gallery",
    link: "/gallery",
  },
  {
    page: "Contact Us",
    link: "/contact",
  },
]

export const screenSizes = {
  xl: "1536px",
  lg: "1200px",
  md: "900px",
  sm: "600px",
  xs: "0px",
}

export const menuIcons = [
  [
    { icon: soup, text: "soups", smallText: "Lorem ipsum dolor" },
    { icon: dumplings, text: "dumplings", smallText: "Lorem ipsum dolor" },
  ],
  [
    { icon: springrolls, text: "sping rolls", smallText: "Lorem ipsum dolor" },
    { icon: dimsum, text: "dim sum", smallText: "Lorem ipsum dolor" },
  ],
  [
    { icon: noodles, text: "noodles", smallText: "Lorem ipsum dolor" },
    { icon: rice, text: "rice", smallText: "Lorem ipsum dolor" },
  ],
]

export const customerTestimonials = [
  {
    avatar: ava1,
    testimonial:
      "tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum",
    name: "Joe Reffer",
  },
  {
    avatar: ava2,
    testimonial:
      "eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae",
    name: "Sarah Parlovsky",
  },
  {
    avatar: ava3,
    testimonial:
      "quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et",
    name: "Jenny Maze",
  },
]

export const restaurantMenu = [
  {
    dishCat: "Bao Bun",
    dishes: [
      {
        dishName: "Proin gravida gravida",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$23",
      },
      {
        dishName: "Mauris pellentesque",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$12",
      },
      {
        dishName: "Libero lacinia",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$16",
      },
    ],
    demoPic: dish1,
    reverse: false,
    breaker: true,
  },
  {
    dishCat: "Woo Bowl",
    dishes: [
      {
        dishName: "Proin gravida gravida",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$23",
      },
      {
        dishName: "Mauris pellentesque",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$12",
      },
      {
        dishName: "Libero lacinia",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$16",
      },
    ],
    demoPic: dish2,
    reverse: true,
    breaker: false,
  },
  {
    dishCat: "Soups",
    dishes: [
      {
        dishName: "Proin gravida gravida",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$23",
      },
      {
        dishName: "Mauris pellentesque",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$12",
      },
      {
        dishName: "Libero lacinia",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$16",
      },
    ],
    demoPic: dish3,
    reverse: false,
    breaker: true,
  },
  {
    dishCat: "Noodles",
    dishes: [
      {
        dishName: "Proin gravida gravida",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$23",
      },
      {
        dishName: "Mauris pellentesque",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$12",
      },
      {
        dishName: "Libero lacinia",
        description:
          "Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae.",
        price: "$16",
      },
    ],
    demoPic: dish4,
    reverse: true,
    breaker: false,
  },
]
