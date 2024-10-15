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

interface MasterFeed {
  speciality: string;
  description: string;
  reviews: {
    id: number;
    review_text: string;
    review_date: string;
    rating: number;
    client: {
      id: number;
      phone: string;
      first_name: string;
      last_name: string;
      role: string;
      avatar_path: string;
    };
  }[];
  services: {
    id: number;
    title: string;
    description: string;
    price: number;
  }[];
  profile: {
    id: number;
    phone: string;
    first_name: string;
    last_name: string;
    role: string;
    avatar_path: string;
  };
}

interface MasterInfo {
  speciality: string;
  description: string;
  reviews: {
    id: number;
    review_text: string;
    review_date: string;
    rating: number;
    client: {
      id: number;
      phone: string;
      first_name: string;
      last_name: string;
      role: string;
      avatar_path: string;
    };
  }[];
  services: {
    id: number;
    title: string;
    description: string;
    price: number;
  }[];
  profile: {
    id: number;
    phone: string;
    first_name: string;
    last_name: string;
    role: string;
    avatar_path: string;
  };
}

interface UserType {
  id: number;
  phone: string;
  first_name: string;
  last_name: string;
  email: string | null;
  role: string;
  master: string | null;
}

enum InputType {
  String,
  Number,
}
