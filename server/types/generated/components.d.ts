import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeatureItems extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_items';
  info: {
    displayName: 'FeatureItems';
    icon: 'stack';
  };
  attributes: {
    items: Schema.Attribute.Component<'items.feature-item', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ItemsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_items_feature_items';
  info: {
    displayName: 'featureItem';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface MetadataPageMeta extends Struct.ComponentSchema {
  collectionName: 'components_metadata_page_metas';
  info: {
    displayName: 'Page Meta';
    icon: 'chartPie';
  };
  attributes: {
    canonical: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://yourdomain.com/{{slug}}'>;
    description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Short, clear summary of the page content.'>;
    og_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Your Page Title | SS'>;
  };
}

export interface TestCategoryTest extends Struct.ComponentSchema {
  collectionName: 'components_test_category_tests';
  info: {
    displayName: 'Test';
    icon: 'dashboard';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'default value test'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.feature-items': BlocksFeatureItems;
      'blocks.hero': BlocksHero;
      'items.feature-item': ItemsFeatureItem;
      'metadata.page-meta': MetadataPageMeta;
      'test-category.test': TestCategoryTest;
    }
  }
}
