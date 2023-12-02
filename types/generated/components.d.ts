import type { Schema, Attribute } from '@strapi/strapi';

export interface SettingLogo extends Schema.Component {
  collectionName: 'components_setting_logos';
  info: {
    displayName: 'logo';
    icon: 'picture';
  };
  attributes: {
    logo: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'setting.logo': SettingLogo;
    }
  }
}
