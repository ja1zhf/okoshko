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
  start_time: string;
  appointment: null;
  is_available: boolean;
}

interface MasterType {
  id: number;
  specialities: number[];
  description: string;
  reviews: ReviewType[];
  services: ServiceType[];
  address: string;
  district: string;
  profile: ProfileType;
  is_favorited: boolean;
  available_appointments: AppointmentType[];
  featured_photos: string[];
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

enum InputType {
  String,
  Number,
}
