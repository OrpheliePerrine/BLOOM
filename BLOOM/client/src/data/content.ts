export type Story = {
  id: number;
  creator: string;
  location: string;
  title: string;
  category: string;
  likes: number;
  comments: number;
  image: string;
  accent: string;
  featured?: boolean;
  body: string[];
};

export type Product = {
  id: number;
  name: string;
  maker: string;
  origin: string;
  price: string;
  image: string;
  tag: string;
  materials: string;
  description: string;
};

export const filters = ["All stories", "Textiles", "Adornment", "Design"];

export const stories: Story[] = [
  {
    id: 1,
    creator: "Nia K. Mensah",
    location: "Accra, Ghana",
    title: "The loom is a language",
    category: "Textiles",
    likes: 482,
    comments: 28,
    image:
      "https://i.pinimg.com/1200x/e7/fb/6d/e7fb6df08abb1190483a2818ec9c2c05.jpg",
    accent: "ochre",
    featured: true,
    body: [
      "Every pattern my grandmother wore was a sentence. The zigzag meant journey, the gold band meant gathering, the deep red was the earth asking to be remembered. When I sit at my loom in Accra, I am not making fabric — I am continuing a conversation that started long before me.",
      "For years, kente was sold to visitors as a souvenir, flattened into a postcard version of itself. My work pushes back against that. Each cloth I weave carries the name of the woman who taught me the stitch, the region the dye plants come from, and the occasion the pattern was first worn for.",
      "When a buyer on ALCHE reads this before they buy, something shifts. The cloth stops being décor and becomes correspondence. That is what this platform is for.",
    ],
  },
  {
    id: 2,
    creator: "Aïcha Diop",
    location: "Dakar, Senegal",
    title: "Jewellery for the in-between",
    category: "Adornment",
    likes: 316,
    comments: 19,
    image:
      "https://i.pinimg.com/736x/64/1f/8c/641f8c38dbc00d54493af9d4f451b6d1.jpg",
    accent: "rose",
    body: [
      "I grew up between Dakar and Marseille, always translating between two versions of myself. My jewellery lives in that in-between space — Wolof goldsmithing techniques shaped into forms that feel at home in any city.",
      "Every piece is cast in small batches by a collective of twelve women in the Médina district. We melt down recycled brass and silver, so nothing we make asks the earth for more than it has already given.",
      "The hoops, the cuffs, the rings — they are anchors. For the woman wearing them, and for the twelve women whose hands made them.",
    ],
  },
  {
    id: 3,
    creator: "Lindiwe Mokoena",
    location: "Johannesburg, South Africa",
    title: "A room can hold a whole lineage",
    category: "Design",
    likes: 257,
    comments: 34,
    image:
      "https://i.pinimg.com/736x/5f/f5/96/5ff596ae074a8ace82a407bd50b5913f.jpg",
    accent: "olive",
    body: [
      "Interior design in South Africa carries memory. The Ndebele murals my mother painted on our courtyard wall taught me that a room is never just a room — it is an archive you live inside.",
      "My studio works with families to translate their own histories into space: a kitchen the colour of a grandmother's church dress, a doorway measured to the proportions of the family homestead.",
      "Documenting this work matters. For decades, African interior motifs were photographed by outsiders and stripped of their names. Here, the story travels with the work, and the credit stays with the maker.",
    ],
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Kente / No. 07",
    maker: "Nia K. Mensah",
    origin: "Accra, Ghana",
    price: "€148",
    image:
      "https://i.pinimg.com/1200x/9f/9e/d5/9f9ed581d78e9161180c1d8a9cfd6178.jpg",
    tag: "Handwoven",
    materials: "Handwoven cotton, mineral dyes",
    description:
      "Woven over nine days on a traditional strip loom, No. 07 carries the journey pattern in ochre and gold. Each strip is sewn by hand into a cloth roughly 2.4m — enough for a throw, a wrap, or a framed piece.",
  },
  {
    id: 2,
    name: "Orbit Hoops",
    maker: "Aïcha Diop",
    origin: "Dakar, Senegal",
    price: "€92",
    image:
      "https://i.pinimg.com/1200x/0d/85/f3/0d85f3f4f99dd38767305d6efdc7217f.jpg",
    tag: "Small batch",
    materials: "Recycled brass, sterling silver posts",
    description:
      "Cast in small batches by the Médina women's collective. Lightweight, hand-polished, and finished with silver posts for sensitive ears. No two pairs are perfectly identical — that is the point.",
  },
  {
    id: 3,
    name: "Sunroom Study 02",
    maker: "Lindiwe Mokoena",
    origin: "Johannesburg, South Africa",
    price: "€210",
    image:
      "https://i.pinimg.com/736x/56/85/c9/5685c9da4cf7968e2b5ca077ea61983a.jpg",
    tag: "Limited print",
    materials: "Giclée print on cotton rag paper, A2",
    description:
      "A limited edition print from Lindiwe's Sunroom series — interior studies drawn from the colour memories of Johannesburg families. Edition of 50, signed and numbered, shipped rolled in a protective tube.",
  },
];

export const opportunities = [
  {
    label: "Mentorship",
    title: "Build your creative business with Mariam",
    meta: "6-week circle · Applications open",
  },
  {
    label: "Scholarship",
    title: "The Nala Fund for women in design",
    meta: "€4,000 award · Closes 18 Oct",
  },
  {
    label: "Conference",
    title: "Create / Africa 2026 in Nairobi",
    meta: "24–26 Nov · 320 seats left",
  },
];

export const getStory = (id: string) => stories.find((s) => s.id === Number(id));
export const getProduct = (id: string) => products.find((p) => p.id === Number(id));