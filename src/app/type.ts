interface CategoryType {
  title: string;
  description: string;
  backgroundSrc: string;
  href: string;
}

interface ProfileType {
  id: number;
  phone: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  city: string;
  avatar_url: string;
}

interface ReviewType {
  id: number;
  review_text: string;
  review_date: string;
  rating: number;
  client: ProfileType;
  master: number;
}

interface ServiceType {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
}

interface AppointmentType {
  id: number;
  date: string;
  start_time: number;
  appointment: null;
  is_available: boolean;
}

interface AppointmentTimeType {
  id: number;
  date: string;
  start_time: number;
  end_time: number;
  appointment: null;
  is_available: boolean;
}

interface MasterType {
  id: number;
  name: string;
  surname: string;
  specialities: number[];
  description: string;
  reviews: ReviewType[];
  services: ServiceType[];
  address: string;
  district: string;
  profile: ProfileType;
  is_favorited: boolean;
  avatar: string;
  phone: string;
  available_appointments: AppointmentType[];
  featured_photos: {
    id: number;
    image: string;
    uploaded_at: string;
  }[];
}

interface MasterFavorite {
  id: number;
  client: number;
  master: MasterType;
}

interface ServiceData {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
  service: ServiceInputType;
  photos: {
    id: number;
    image: string;
    uploaded_at: string;
  }[];
}

interface ServiceInputType {
  id: number;
  name: string;
  sub_category: number;
}

interface UserOrderType {
  id: number;
  client: ProfileType;
  service: ServiceData;
  status: number;
  master_info: MasterType;
  slot: {
    date: string;
    start_time: number;
  };
}

interface MasterOrderType {
  id: number;
  client: ProfileType;
  service: ServiceData;
  status: number;
  master_info: {
    name: string;
    surname: string;
    address: string;
    avatar: null;
    reviews: [];
  };
  slot: {
    date: string;
    start_time: number;
  };
}

interface EditProfileType {
  user_profile: ProfileType;
  master_profile: MasterType;
}

enum InputType {
  String,
  Number,
}
