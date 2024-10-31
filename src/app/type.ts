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
  speciality: string;
  description: string;
  reviews: ReviewType[];
  services: ServiceType[];
  address: string;
  district: string;
  profile: ProfileType;
  is_favorited: boolean;
  available_appointments: AppointmentType[];
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
  master: MasterType;
}

interface ServiceData {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
}

enum InputType {
  String,
  Number,
}
