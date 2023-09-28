export interface APIResults {
  site_id: string;
  seller: APIResultsSeller;
  country_default_time_zone: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: Sort[];
  available_filters: AvailableFilter[];
  pads_info: PadsInfo;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface PadsInfo {
  tracelog: string[];
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Product {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  sale_price: null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: number;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: string[];
  shipping: Shipping;
  stop_time: Date;
  seller: ResultSeller;
  seller_address: SellerAddress;
  address: Address;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  inventory_id: string;
}

export interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

export interface Attribute {
  id: string;
  name: string;
  value_id: string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct: null;
  values: AttributeValue[];
  source: number;
  value_type: string;
}

export interface AttributeValue {
  id: string;
  name: string;
  struct: null;
  source: number;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

export interface ResultSeller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: Date;
  tags: string[];
  car_dealer_logo: string;
  permalink: string;
  seller_reputation: PurpleSellerReputation;
  eshop: Eshop;
}

export interface Eshop {
  eshop_id: number;
  seller: number;
  nick_name: string;
  eshop_status_id: number;
  site_id: string;
  eshop_experience: number;
  eshop_rubro: null;
  eshop_logo_url: string;
}

export interface PurpleSellerReputation {
  level_id: string;
  power_seller_status: string;
  transactions: Transactions;
  metrics: PurpleMetrics;
}

export interface PurpleMetrics {
  sales: Sales;
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  cancellations: Cancellations;
}

export interface Cancellations {
  period: string;
  rate: number;
  value: number;
}

export interface Sales {
  period: string;
  completed: number;
}

export interface Transactions {
  canceled: number;
  completed: number;
  period: string;
  ratings: TransactionsClass;
  total: number;
}

export interface SellerAddress {
  comment: string;
  address_line: string;
  id: null;
  latitude: null;
  longitude: null;
  country: Sort;
  state: Sort;
  city: Sort;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  benefits: null;
  promise: null;
}

export interface APIResultsSeller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: Date;
  tags: string[];
  permalink: string;
  seller_reputation: FluffySellerReputation;
  eshop: Eshop;
}

export interface FluffySellerReputation {
  level_id: string;
  power_seller_status: string;
  transactions: TransactionsClass;
  metrics: TransactionsClass;
}

export interface Categories {
  id: string;
  name: string;
  picture: string;
  permalink: string;
  total_items_in_this_category: number;
  path_from_root: PathFromRoot[];
  children_categories: ChildrenCategory[];
  attribute_types: string;
  settings: CategoriesSettings;
  channels_settings: ChannelsSetting[];
  meta_categ_id: null;
  attributable: boolean;
  date_created: Date;
}

export interface ChannelsSetting {
  channel: string;
  settings: ChannelsSettingSettings;
}

export interface ChannelsSettingSettings {
  minimum_price?: number;
  status?: string;
  buying_modes?: string[];
  immediate_payment?: string;
}

export interface ChildrenCategory {
  id: string;
  name: string;
  total_items_in_this_category: number;
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  parentId: string | null;
}

export interface CategoriesSettings {
  adult_content: boolean;
  buying_allowed: boolean;
  buying_modes: string[];
  catalog_domain: string;
  coverage_areas: string;
  currencies: string[];
  fragile: boolean;
  immediate_payment: string;
  item_conditions: string[];
  items_reviews_allowed: boolean;
  listing_allowed: boolean;
  max_description_length: number;
  max_pictures_per_item: number;
  max_pictures_per_item_var: number;
  max_sub_title_length: number;
  max_title_length: number;
  max_variations_allowed: number;
  maximum_price: null;
  maximum_price_currency: string;
  minimum_price: number;
  minimum_price_currency: string;
  mirror_category: null;
  mirror_master_category: null;
  price: string;
  reservation_allowed: string;
  rounded_address: boolean;
  seller_contact: string;
  shipping_options: string[];
  shipping_profile: string;
  show_contact_information: boolean;
  simple_shipping: string;
  stock: string;
  sub_vertical: string;
  subscribable: boolean;
  vertical: string;
  vip_subdomain: string;
  buyer_protection_programs: string[];
  status: string;
}
