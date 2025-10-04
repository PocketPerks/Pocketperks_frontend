export type ReviewItem = {
  name: string;
  date: string;
  title: string;
  text: string;
  imageUrl?: string;
  likes: number;
  rating: number; // supports halves
  avatarUrl?: string;
};

export const reviews: ReviewItem[] = [
  {
    name: "Rahul S.",
    date: "27-12-2014",
    title: "Ghee & Oil",
    text: "Great quality and value. Delivery was quick and packaging was neat.",
    imageUrl: "/products/product1.jpg",
    likes: 32,
    rating: 4.5,
    avatarUrl: "/logos/pfp.jpg",
  },
  {
    name: "Ananya P.",
    date: "27-12-2014",
    title: "Ghee & Oil",
    text: "Loved the aroma and purity. Will definitely buy again!",
    imageUrl: "/products/product2.jpg",
    likes: 21,
    rating: 4.0,
    avatarUrl: "/logos/pfp.jpg",
  },
  {
    name: "Vikram K.",
    date: "28-12-2014",
    title: "Cold Pressed Oil",
    text: "Good flavor and authentic taste. Packaging could be better.",
    imageUrl: "/products/product3.jpg",
    likes: 12,
    rating: 3.5,
    avatarUrl: "/logos/pfp.jpg",
  },
  {
    name: "Meera J.",
    date: "29-12-2014",
    title: "Organic Ghee",
    text: "Rich texture and aroma. My family loved it!",
    imageUrl: "/products/product1.jpg",
    likes: 48,
    rating: 4.8,
    avatarUrl: "/logos/pfp.jpg",
  },
  {
    name: "Arjun D.",
    date: "30-12-2014",
    title: "Artisanal Ghee",
    text: "A bit pricey but worth it for the quality.",
    imageUrl: "/products/product2.jpg",
    likes: 9,
    rating: 4.2,
    avatarUrl: "/logos/pfp.jpg",
  },
];