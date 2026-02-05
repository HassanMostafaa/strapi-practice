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
      'seo.meta-data': SeoMetaData;
    }
  }
}
