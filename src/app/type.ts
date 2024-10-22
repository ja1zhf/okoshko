interface CategoryType {
  title: string;
  description: string;
  backgroundSrc: string;
  href: string;
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
  is_favorited: boolean;
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
  is_favorited: boolean;
  available_appointments: string[];
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

interface ServicesType {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface MasterFavorite {
  id: number;
  client: number;
  master: {
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
    is_favorited: boolean;
  };
}

enum InputType {
  String,
  Number,
}
