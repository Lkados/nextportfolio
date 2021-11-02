export interface PersonalDetails {
  name: string;
  logo: string;
  about: string;
  socialMedia: SocialMedia[];
  resume: string;
  profile_img: string;
  calendyUrl: string;
  whatido:string;
}

export interface WorkDetails {
  resume: string;
  title: string;
  company: string;
  logo: string;
}
export interface SocialMedia {
  link: string;
  image_file: string;
  alt_text: string;
}

export interface Skill {
  name: string;
  src: string;
}
