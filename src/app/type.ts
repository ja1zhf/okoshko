interface CategoryType {
  title: string;
  description: string;
  backgroundSrc: string;
  href: string;
}

interface Master {
  name: string;
  avatar: string;
  location: string;
  scores: number;
  reviewsCount: number;
  photos: string[];
  title: string;
  price: number;
}

interface UserType {
  id: number;
  phone: string;
  first_name: string;
  last_name: string;
  email: string | null;
  role: number;
  master: string | null;
}
