import type { Schema, Struct } from '@strapi/strapi';

export interface AtomsButton extends Struct.ComponentSchema {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'button';
    icon: 'medium';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    endIcon: Schema.Attribute.Media<'images' | 'files'>;
    href: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'label'>;
    startIcon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface MoleculesCard extends Struct.ComponentSchema {
  collectionName: 'components_molecules_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    button: Schema.Attribute.Component<'atoms.button', false>;
    media: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['outlined', 'ghost', 'contained']> &
      Schema.Attribute.DefaultTo<'outlined'>;
  };
}

export interface MoleculesFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_molecules_footer_columns';
  info: {
    displayName: 'footer-column';
  };
  attributes: {
    items: Schema.Attribute.Component<'atoms.button', true>;
    title: Schema.Attribute.String;
  };
}

export interface MoleculesHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_molecules_hero_slides';
  info: {
    displayName: 'hero-slide';
    icon: 'landscape';
  };
  attributes: {
    button: Schema.Attribute.Component<'atoms.button', false>;
    slideMedia: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface MoleculesTextMediaSection extends Struct.ComponentSchema {
  collectionName: 'components_molecules_text_media_sections';
  info: {
    displayName: 'text-media-section';
    icon: 'dashboard';
  };
  attributes: {
    button: Schema.Attribute.Component<'atoms.button', false>;
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface OrganismsCardsSwiperSection extends Struct.ComponentSchema {
  collectionName: 'components_organisms_cards_swiper_sections';
  info: {
    displayName: 'cards-swiper-section';
    icon: 'dashboard';
  };
  attributes: {
    items: Schema.Attribute.Component<'molecules.card', true>;
    maxColumns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface OrganismsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_organisms_hero_sections';
  info: {
    displayName: 'hero-section';
    icon: 'layout';
  };
  attributes: {
    slides: Schema.Attribute.Component<'molecules.hero-slide', true>;
  };
}

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'meta-data';
    icon: 'chartPie';
  };
  attributes: {
    description: Schema.Attribute.Text;
    longNavigationName: Schema.Attribute.String;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images' | 'files'>;
    ogTitle: Schema.Attribute.String;
    shortNavigationName: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'atoms.button': AtomsButton;
      'molecules.card': MoleculesCard;
      'molecules.footer-column': MoleculesFooterColumn;
      'molecules.hero-slide': MoleculesHeroSlide;
      'molecules.text-media-section': MoleculesTextMediaSection;
      'organisms.cards-swiper-section': OrganismsCardsSwiperSection;
      'organisms.hero-section': OrganismsHeroSection;
      'seo.meta-data': SeoMetaData;
    }
  }
}
