import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PageSectionsDynamicZoneInput: { input: any; output: any; }
};

export type IGenAnnouncementBar = {
  __typename?: 'AnnouncementBar';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<IGenAnnouncementBar>>;
  localizations_connection: Maybe<IGenAnnouncementBarRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  text: Maybe<Scalars['JSON']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type IGenAnnouncementBarInput = {
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  text: InputMaybe<Scalars['JSON']['input']>;
};

export type IGenAnnouncementBarRelationResponseCollection = {
  __typename?: 'AnnouncementBarRelationResponseCollection';
  nodes: Array<IGenAnnouncementBar>;
};

export type IGenBooleanFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains: InputMaybe<Scalars['Boolean']['input']>;
  containsi: InputMaybe<Scalars['Boolean']['input']>;
  endsWith: InputMaybe<Scalars['Boolean']['input']>;
  eq: InputMaybe<Scalars['Boolean']['input']>;
  eqi: InputMaybe<Scalars['Boolean']['input']>;
  gt: InputMaybe<Scalars['Boolean']['input']>;
  gte: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt: InputMaybe<Scalars['Boolean']['input']>;
  lte: InputMaybe<Scalars['Boolean']['input']>;
  ne: InputMaybe<Scalars['Boolean']['input']>;
  nei: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<IGenBooleanFilterInput>;
  notContains: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type IGenComponentAtomsButton = {
  __typename?: 'ComponentAtomsButton';
  ariaLabel: Maybe<Scalars['String']['output']>;
  endIcon: Maybe<IGenUploadFile>;
  href: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isNewTab: Maybe<Scalars['Boolean']['output']>;
  label: Scalars['String']['output'];
  startIcon: Maybe<IGenUploadFile>;
};

export type IGenComponentAtomsButtonFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentAtomsButtonFiltersInput>>>;
  ariaLabel: InputMaybe<IGenStringFilterInput>;
  href: InputMaybe<IGenStringFilterInput>;
  isNewTab: InputMaybe<IGenBooleanFilterInput>;
  label: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentAtomsButtonFiltersInput>>>;
};

export type IGenComponentAtomsButtonInput = {
  ariaLabel: InputMaybe<Scalars['String']['input']>;
  endIcon: InputMaybe<Scalars['ID']['input']>;
  href: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  isNewTab: InputMaybe<Scalars['Boolean']['input']>;
  label: InputMaybe<Scalars['String']['input']>;
  startIcon: InputMaybe<Scalars['ID']['input']>;
};

export type IGenComponentMoleculesAllServicesSection = {
  __typename?: 'ComponentMoleculesAllServicesSection';
  id: Scalars['ID']['output'];
  itemsCallToAction: Scalars['String']['output'];
  paginationDetailsText: Scalars['String']['output'];
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type IGenComponentMoleculesCard = {
  __typename?: 'ComponentMoleculesCard';
  button: Maybe<IGenComponentAtomsButton>;
  id: Scalars['ID']['output'];
  media: Maybe<IGenUploadFile>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  variant: Maybe<IGenEnum_Componentmoleculescard_Variant>;
};

export type IGenComponentMoleculesCardFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentMoleculesCardFiltersInput>>>;
  button: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  not: InputMaybe<IGenComponentMoleculesCardFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentMoleculesCardFiltersInput>>>;
  subtitle: InputMaybe<IGenStringFilterInput>;
  title: InputMaybe<IGenStringFilterInput>;
  variant: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentMoleculesFooterColumn = {
  __typename?: 'ComponentMoleculesFooterColumn';
  id: Scalars['ID']['output'];
  items: Maybe<Array<Maybe<IGenComponentAtomsButton>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type IGenComponentMoleculesFooterColumnItemsArgs = {
  filters: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentMoleculesFooterColumnFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentMoleculesFooterColumnFiltersInput>>>;
  items: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  not: InputMaybe<IGenComponentMoleculesFooterColumnFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentMoleculesFooterColumnFiltersInput>>>;
  title: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentMoleculesFooterColumnInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  items: InputMaybe<Array<InputMaybe<IGenComponentAtomsButtonInput>>>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenComponentMoleculesHeroSlide = {
  __typename?: 'ComponentMoleculesHeroSlide';
  button: Maybe<IGenComponentAtomsButton>;
  id: Scalars['ID']['output'];
  slideMedia: Maybe<IGenUploadFile>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type IGenComponentMoleculesHeroSlideFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentMoleculesHeroSlideFiltersInput>>>;
  button: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  not: InputMaybe<IGenComponentMoleculesHeroSlideFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentMoleculesHeroSlideFiltersInput>>>;
  subtitle: InputMaybe<IGenStringFilterInput>;
  title: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentMoleculesServicesTeaser = {
  __typename?: 'ComponentMoleculesServicesTeaser';
  ViewAllButton: Maybe<IGenComponentAtomsButton>;
  id: Scalars['ID']['output'];
  services: Array<Maybe<IGenService>>;
  services_connection: Maybe<IGenServiceRelationResponseCollection>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type IGenComponentMoleculesServicesTeaserServicesArgs = {
  filters: InputMaybe<IGenServiceFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenComponentMoleculesServicesTeaserServices_ConnectionArgs = {
  filters: InputMaybe<IGenServiceFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentMoleculesTextMediaSection = {
  __typename?: 'ComponentMoleculesTextMediaSection';
  button: Maybe<IGenComponentAtomsButton>;
  content: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<IGenUploadFile>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type IGenComponentOrganismsCardsSwiperSection = {
  __typename?: 'ComponentOrganismsCardsSwiperSection';
  id: Scalars['ID']['output'];
  items: Maybe<Array<Maybe<IGenComponentMoleculesCard>>>;
  maxColumns: Maybe<Scalars['Int']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  variant: Maybe<IGenEnum_Componentorganismscardsswipersection_Variant>;
};


export type IGenComponentOrganismsCardsSwiperSectionItemsArgs = {
  filters: InputMaybe<IGenComponentMoleculesCardFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentOrganismsHeroSection = {
  __typename?: 'ComponentOrganismsHeroSection';
  id: Scalars['ID']['output'];
  slides: Maybe<Array<Maybe<IGenComponentMoleculesHeroSlide>>>;
};


export type IGenComponentOrganismsHeroSectionSlidesArgs = {
  filters: InputMaybe<IGenComponentMoleculesHeroSlideFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentSeoMetaData = {
  __typename?: 'ComponentSeoMetaData';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  longNavigationName: Maybe<Scalars['String']['output']>;
  ogDescription: Maybe<Scalars['String']['output']>;
  ogImage: Maybe<IGenUploadFile>;
  ogTitle: Maybe<Scalars['String']['output']>;
  shortNavigationName: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type IGenComponentSeoMetaDataFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentSeoMetaDataFiltersInput>>>;
  description: InputMaybe<IGenStringFilterInput>;
  longNavigationName: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenComponentSeoMetaDataFiltersInput>;
  ogDescription: InputMaybe<IGenStringFilterInput>;
  ogTitle: InputMaybe<IGenStringFilterInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentSeoMetaDataFiltersInput>>>;
  shortNavigationName: InputMaybe<IGenStringFilterInput>;
  title: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentSeoMetaDataInput = {
  description: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  longNavigationName: InputMaybe<Scalars['String']['input']>;
  ogDescription: InputMaybe<Scalars['String']['input']>;
  ogImage: InputMaybe<Scalars['ID']['input']>;
  ogTitle: InputMaybe<Scalars['String']['input']>;
  shortNavigationName: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenDateTimeFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains: InputMaybe<Scalars['DateTime']['input']>;
  containsi: InputMaybe<Scalars['DateTime']['input']>;
  endsWith: InputMaybe<Scalars['DateTime']['input']>;
  eq: InputMaybe<Scalars['DateTime']['input']>;
  eqi: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  ne: InputMaybe<Scalars['DateTime']['input']>;
  nei: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<IGenDateTimeFilterInput>;
  notContains: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenDeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export enum IGenEnum_Componentmoleculescard_Variant {
  Contained = 'contained',
  Ghost = 'ghost',
  Outlined = 'outlined'
}

export enum IGenEnum_Componentorganismscardsswipersection_Variant {
  Contained = 'contained',
  Ghost = 'ghost'
}

export enum IGenEnum_Service_Category {
  Backend = 'Backend',
  Frontend = 'Frontend',
  FullStack = 'Full_Stack'
}

export type IGenError = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message: Maybe<Scalars['String']['output']>;
};

export type IGenFileInfoInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type IGenFloatFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains: InputMaybe<Scalars['Float']['input']>;
  containsi: InputMaybe<Scalars['Float']['input']>;
  endsWith: InputMaybe<Scalars['Float']['input']>;
  eq: InputMaybe<Scalars['Float']['input']>;
  eqi: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  ne: InputMaybe<Scalars['Float']['input']>;
  nei: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<IGenFloatFilterInput>;
  notContains: InputMaybe<Scalars['Float']['input']>;
  notContainsi: InputMaybe<Scalars['Float']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type IGenFooter = {
  __typename?: 'Footer';
  content: Maybe<Scalars['JSON']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  linksColumns: Maybe<Array<Maybe<IGenComponentMoleculesFooterColumn>>>;
  locale: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<IGenFooter>>;
  localizations_connection: Maybe<IGenFooterRelationResponseCollection>;
  logo: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type IGenFooterLinksColumnsArgs = {
  filters: InputMaybe<IGenComponentMoleculesFooterColumnFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenFooterInput = {
  content: InputMaybe<Scalars['JSON']['input']>;
  linksColumns: InputMaybe<Array<InputMaybe<IGenComponentMoleculesFooterColumnInput>>>;
  logo: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenFooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  nodes: Array<IGenFooter>;
};

export type IGenGenericMorph = IGenAnnouncementBar | IGenComponentAtomsButton | IGenComponentMoleculesAllServicesSection | IGenComponentMoleculesCard | IGenComponentMoleculesFooterColumn | IGenComponentMoleculesHeroSlide | IGenComponentMoleculesServicesTeaser | IGenComponentMoleculesTextMediaSection | IGenComponentOrganismsCardsSwiperSection | IGenComponentOrganismsHeroSection | IGenComponentSeoMetaData | IGenFooter | IGenHeader | IGenI18NLocale | IGenPage | IGenReviewWorkflowsWorkflow | IGenReviewWorkflowsWorkflowStage | IGenService | IGenUploadFile | IGenUsersPermissionsPermission | IGenUsersPermissionsRole | IGenUsersPermissionsUser;

export type IGenHeader = {
  __typename?: 'Header';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  items: Maybe<Array<Maybe<IGenComponentAtomsButton>>>;
  locale: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<IGenHeader>>;
  localizations_connection: Maybe<IGenHeaderRelationResponseCollection>;
  logo: Maybe<Scalars['String']['output']>;
  primaryAction: Maybe<IGenComponentAtomsButton>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type IGenHeaderItemsArgs = {
  filters: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenHeaderInput = {
  items: InputMaybe<Array<InputMaybe<IGenComponentAtomsButtonInput>>>;
  logo: InputMaybe<Scalars['String']['input']>;
  primaryAction: InputMaybe<IGenComponentAtomsButtonInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenHeaderRelationResponseCollection = {
  __typename?: 'HeaderRelationResponseCollection';
  nodes: Array<IGenHeader>;
};

export type IGenI18NLocale = {
  __typename?: 'I18NLocale';
  code: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type IGenI18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<IGenI18NLocale>;
  pageInfo: IGenPagination;
};

export type IGenI18NLocaleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenI18NLocaleFiltersInput>>>;
  code: InputMaybe<IGenStringFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  name: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenI18NLocaleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenI18NLocaleFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenIdFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains: InputMaybe<Scalars['ID']['input']>;
  containsi: InputMaybe<Scalars['ID']['input']>;
  endsWith: InputMaybe<Scalars['ID']['input']>;
  eq: InputMaybe<Scalars['ID']['input']>;
  eqi: InputMaybe<Scalars['ID']['input']>;
  gt: InputMaybe<Scalars['ID']['input']>;
  gte: InputMaybe<Scalars['ID']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt: InputMaybe<Scalars['ID']['input']>;
  lte: InputMaybe<Scalars['ID']['input']>;
  ne: InputMaybe<Scalars['ID']['input']>;
  nei: InputMaybe<Scalars['ID']['input']>;
  not: InputMaybe<IGenIdFilterInput>;
  notContains: InputMaybe<Scalars['ID']['input']>;
  notContainsi: InputMaybe<Scalars['ID']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IGenIntFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains: InputMaybe<Scalars['Int']['input']>;
  containsi: InputMaybe<Scalars['Int']['input']>;
  endsWith: InputMaybe<Scalars['Int']['input']>;
  eq: InputMaybe<Scalars['Int']['input']>;
  eqi: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  ne: InputMaybe<Scalars['Int']['input']>;
  nei: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<IGenIntFilterInput>;
  notContains: InputMaybe<Scalars['Int']['input']>;
  notContainsi: InputMaybe<Scalars['Int']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type IGenJsonFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains: InputMaybe<Scalars['JSON']['input']>;
  containsi: InputMaybe<Scalars['JSON']['input']>;
  endsWith: InputMaybe<Scalars['JSON']['input']>;
  eq: InputMaybe<Scalars['JSON']['input']>;
  eqi: InputMaybe<Scalars['JSON']['input']>;
  gt: InputMaybe<Scalars['JSON']['input']>;
  gte: InputMaybe<Scalars['JSON']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt: InputMaybe<Scalars['JSON']['input']>;
  lte: InputMaybe<Scalars['JSON']['input']>;
  ne: InputMaybe<Scalars['JSON']['input']>;
  nei: InputMaybe<Scalars['JSON']['input']>;
  not: InputMaybe<IGenJsonFilterInput>;
  notContains: InputMaybe<Scalars['JSON']['input']>;
  notContainsi: InputMaybe<Scalars['JSON']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type IGenMutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<IGenUsersPermissionsLoginPayload>;
  createPage: Maybe<IGenPage>;
  createReviewWorkflowsWorkflow: Maybe<IGenReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage: Maybe<IGenReviewWorkflowsWorkflowStage>;
  createService: Maybe<IGenService>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<IGenUsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
  deleteAnnouncementBar: Maybe<IGenDeleteMutationResponse>;
  deleteFooter: Maybe<IGenDeleteMutationResponse>;
  deleteHeader: Maybe<IGenDeleteMutationResponse>;
  deletePage: Maybe<IGenDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow: Maybe<IGenDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage: Maybe<IGenDeleteMutationResponse>;
  deleteService: Maybe<IGenDeleteMutationResponse>;
  deleteUploadFile: Maybe<IGenUploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<IGenUsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation: Maybe<IGenUsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword: Maybe<IGenUsersPermissionsPasswordPayload>;
  login: IGenUsersPermissionsLoginPayload;
  /** Register a user */
  register: IGenUsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<IGenUsersPermissionsLoginPayload>;
  updateAnnouncementBar: Maybe<IGenAnnouncementBar>;
  updateFooter: Maybe<IGenFooter>;
  updateHeader: Maybe<IGenHeader>;
  updatePage: Maybe<IGenPage>;
  updateReviewWorkflowsWorkflow: Maybe<IGenReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage: Maybe<IGenReviewWorkflowsWorkflowStage>;
  updateService: Maybe<IGenService>;
  updateUploadFile: IGenUploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<IGenUsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
};


export type IGenMutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type IGenMutationCreatePageArgs = {
  data: IGenPageInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateReviewWorkflowsWorkflowArgs = {
  data: IGenReviewWorkflowsWorkflowInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: IGenReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateServiceArgs = {
  data: IGenServiceInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateUsersPermissionsRoleArgs = {
  data: IGenUsersPermissionsRoleInput;
};


export type IGenMutationCreateUsersPermissionsUserArgs = {
  data: IGenUsersPermissionsUserInput;
};


export type IGenMutationDeleteAnnouncementBarArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IGenMutationDeleteFooterArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IGenMutationDeleteHeaderArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IGenMutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IGenMutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type IGenMutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type IGenMutationDeleteServiceArgs = {
  documentId: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IGenMutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type IGenMutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type IGenMutationLoginArgs = {
  input: IGenUsersPermissionsLoginInput;
};


export type IGenMutationRegisterArgs = {
  input: IGenUsersPermissionsRegisterInput;
};


export type IGenMutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type IGenMutationUpdateAnnouncementBarArgs = {
  data: IGenAnnouncementBarInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateFooterArgs = {
  data: IGenFooterInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateHeaderArgs = {
  data: IGenHeaderInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdatePageArgs = {
  data: IGenPageInput;
  documentId: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateReviewWorkflowsWorkflowArgs = {
  data: IGenReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: IGenReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateServiceArgs = {
  data: IGenServiceInput;
  documentId: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<IGenFileInfoInput>;
};


export type IGenMutationUpdateUsersPermissionsRoleArgs = {
  data: IGenUsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type IGenMutationUpdateUsersPermissionsUserArgs = {
  data: IGenUsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type IGenPage = {
  __typename?: 'Page';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<IGenPage>>;
  localizations_connection: Maybe<IGenPageRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  sections: Maybe<Array<Maybe<IGenPageSectionsDynamicZone>>>;
  seo: Maybe<IGenComponentSeoMetaData>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type IGenPageLocalizationsArgs = {
  filters: InputMaybe<IGenPageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenPageLocalizations_ConnectionArgs = {
  filters: InputMaybe<IGenPageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenPageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  nodes: Array<IGenPage>;
  pageInfo: IGenPagination;
};

export type IGenPageFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenPageFiltersInput>>>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  locale: InputMaybe<IGenStringFilterInput>;
  localizations: InputMaybe<IGenPageFiltersInput>;
  not: InputMaybe<IGenPageFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenPageFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  seo: InputMaybe<IGenComponentSeoMetaDataFiltersInput>;
  slug: InputMaybe<IGenStringFilterInput>;
  title: InputMaybe<IGenStringFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenPageInput = {
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  sections: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']['input']>>;
  seo: InputMaybe<IGenComponentSeoMetaDataInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenPageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  nodes: Array<IGenPage>;
};

export type IGenPageSectionsDynamicZone = IGenComponentMoleculesAllServicesSection | IGenComponentMoleculesServicesTeaser | IGenComponentMoleculesTextMediaSection | IGenComponentOrganismsCardsSwiperSection | IGenComponentOrganismsHeroSection | IGenError;

export type IGenPagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IGenPaginationArg = {
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};

export enum IGenPublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type IGenQuery = {
  __typename?: 'Query';
  announcementBar: Maybe<IGenAnnouncementBar>;
  footer: Maybe<IGenFooter>;
  header: Maybe<IGenHeader>;
  i18NLocale: Maybe<IGenI18NLocale>;
  i18NLocales: Array<Maybe<IGenI18NLocale>>;
  i18NLocales_connection: Maybe<IGenI18NLocaleEntityResponseCollection>;
  me: Maybe<IGenUsersPermissionsMe>;
  page: Maybe<IGenPage>;
  pages: Array<Maybe<IGenPage>>;
  pages_connection: Maybe<IGenPageEntityResponseCollection>;
  reviewWorkflowsWorkflow: Maybe<IGenReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage: Maybe<IGenReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<IGenReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection: Maybe<IGenReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<IGenReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection: Maybe<IGenReviewWorkflowsWorkflowEntityResponseCollection>;
  service: Maybe<IGenService>;
  services: Array<Maybe<IGenService>>;
  services_connection: Maybe<IGenServiceEntityResponseCollection>;
  uploadFile: Maybe<IGenUploadFile>;
  uploadFiles: Array<Maybe<IGenUploadFile>>;
  uploadFiles_connection: Maybe<IGenUploadFileEntityResponseCollection>;
  usersPermissionsRole: Maybe<IGenUsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<IGenUsersPermissionsRole>>;
  usersPermissionsRoles_connection: Maybe<IGenUsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: Maybe<IGenUsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<IGenUsersPermissionsUser>>;
  usersPermissionsUsers_connection: Maybe<IGenUsersPermissionsUserEntityResponseCollection>;
};


export type IGenQueryAnnouncementBarArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryFooterArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryHeaderArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocalesArgs = {
  filters: InputMaybe<IGenI18NLocaleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocales_ConnectionArgs = {
  filters: InputMaybe<IGenI18NLocaleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPageArgs = {
  documentId: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPagesArgs = {
  filters: InputMaybe<IGenPageFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPages_ConnectionArgs = {
  filters: InputMaybe<IGenPageFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStagesArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowsArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryServiceArgs = {
  documentId: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryServicesArgs = {
  filters: InputMaybe<IGenServiceFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryServices_ConnectionArgs = {
  filters: InputMaybe<IGenServiceFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFilesArgs = {
  filters: InputMaybe<IGenUploadFileFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFiles_ConnectionArgs = {
  filters: InputMaybe<IGenUploadFileFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRoles_ConnectionArgs = {
  filters: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUsers_ConnectionArgs = {
  filters: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};

export type IGenReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish: Maybe<IGenReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<IGenReviewWorkflowsWorkflowStage>>;
  stages_connection: Maybe<IGenReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type IGenReviewWorkflowsWorkflowStagesArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflow>;
  pageInfo: IGenPagination;
};

export type IGenReviewWorkflowsWorkflowFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes: InputMaybe<IGenJsonFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  name: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  stageRequiredToPublish: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  stages: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenReviewWorkflowsWorkflowInput = {
  contentTypes: InputMaybe<Scalars['JSON']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish: InputMaybe<Scalars['ID']['input']>;
  stages: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IGenReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  workflow: Maybe<IGenReviewWorkflowsWorkflow>;
};

export type IGenReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflowStage>;
  pageInfo: IGenPagination;
};

export type IGenReviewWorkflowsWorkflowStageFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>>>;
  color: InputMaybe<IGenStringFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  name: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
  workflow: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
};

export type IGenReviewWorkflowsWorkflowStageInput = {
  color: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  workflow: InputMaybe<Scalars['ID']['input']>;
};

export type IGenReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflowStage>;
};

export type IGenService = {
  __typename?: 'Service';
  category: Maybe<IGenEnum_Service_Category>;
  content: Maybe<Scalars['JSON']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  image: Maybe<IGenUploadFile>;
  locale: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<IGenService>>;
  localizations_connection: Maybe<IGenServiceRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  seo: IGenComponentSeoMetaData;
  slug: Scalars['String']['output'];
  subtitle: Maybe<Scalars['String']['output']>;
  thumbnailImage: Maybe<IGenUploadFile>;
  title: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type IGenServiceLocalizationsArgs = {
  filters: InputMaybe<IGenServiceFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenServiceLocalizations_ConnectionArgs = {
  filters: InputMaybe<IGenServiceFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection';
  nodes: Array<IGenService>;
  pageInfo: IGenPagination;
};

export type IGenServiceFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenServiceFiltersInput>>>;
  category: InputMaybe<IGenStringFilterInput>;
  content: InputMaybe<IGenJsonFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  locale: InputMaybe<IGenStringFilterInput>;
  localizations: InputMaybe<IGenServiceFiltersInput>;
  not: InputMaybe<IGenServiceFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenServiceFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  seo: InputMaybe<IGenComponentSeoMetaDataFiltersInput>;
  slug: InputMaybe<IGenStringFilterInput>;
  subtitle: InputMaybe<IGenStringFilterInput>;
  title: InputMaybe<IGenStringFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenServiceInput = {
  category: InputMaybe<IGenEnum_Service_Category>;
  content: InputMaybe<Scalars['JSON']['input']>;
  image: InputMaybe<Scalars['ID']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  seo: InputMaybe<IGenComponentSeoMetaDataInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  subtitle: InputMaybe<Scalars['String']['input']>;
  thumbnailImage: InputMaybe<Scalars['ID']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenServiceRelationResponseCollection = {
  __typename?: 'ServiceRelationResponseCollection';
  nodes: Array<IGenService>;
};

export type IGenStringFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  containsi: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  eq: InputMaybe<Scalars['String']['input']>;
  eqi: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  ne: InputMaybe<Scalars['String']['input']>;
  nei: InputMaybe<Scalars['String']['input']>;
  not: InputMaybe<IGenStringFilterInput>;
  notContains: InputMaybe<Scalars['String']['input']>;
  notContainsi: InputMaybe<Scalars['String']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type IGenUploadFile = {
  __typename?: 'UploadFile';
  alternativeText: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext: Maybe<Scalars['String']['output']>;
  focalPoint: Maybe<Scalars['JSON']['output']>;
  formats: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata: Maybe<Scalars['JSON']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  related: Maybe<Array<Maybe<IGenGenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width: Maybe<Scalars['Int']['output']>;
};

export type IGenUploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<IGenUploadFile>;
  pageInfo: IGenPagination;
};

export type IGenUploadFileFiltersInput = {
  alternativeText: InputMaybe<IGenStringFilterInput>;
  and: InputMaybe<Array<InputMaybe<IGenUploadFileFiltersInput>>>;
  caption: InputMaybe<IGenStringFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  ext: InputMaybe<IGenStringFilterInput>;
  focalPoint: InputMaybe<IGenJsonFilterInput>;
  formats: InputMaybe<IGenJsonFilterInput>;
  hash: InputMaybe<IGenStringFilterInput>;
  height: InputMaybe<IGenIntFilterInput>;
  mime: InputMaybe<IGenStringFilterInput>;
  name: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenUploadFileFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenUploadFileFiltersInput>>>;
  previewUrl: InputMaybe<IGenStringFilterInput>;
  provider: InputMaybe<IGenStringFilterInput>;
  provider_metadata: InputMaybe<IGenJsonFilterInput>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  size: InputMaybe<IGenFloatFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
  url: InputMaybe<IGenStringFilterInput>;
  width: InputMaybe<IGenIntFilterInput>;
};

export type IGenUsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type IGenUsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']['output']>;
  user: IGenUsersPermissionsMe;
};

export type IGenUsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role: Maybe<IGenUsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type IGenUsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Maybe<Scalars['String']['output']>;
};

export type IGenUsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<IGenUsersPermissionsRole>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type IGenUsersPermissionsPermissionFiltersInput = {
  action: InputMaybe<IGenStringFilterInput>;
  and: InputMaybe<Array<InputMaybe<IGenUsersPermissionsPermissionFiltersInput>>>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  not: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenUsersPermissionsPermissionFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  role: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenUsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<IGenUsersPermissionsPermission>;
};

export type IGenUsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type IGenUsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<IGenUsersPermissionsPermission>>;
  permissions_connection: Maybe<IGenUsersPermissionsPermissionRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  type: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<IGenUsersPermissionsUser>>;
  users_connection: Maybe<IGenUsersPermissionsUserRelationResponseCollection>;
};


export type IGenUsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRolePermissions_ConnectionArgs = {
  filters: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRoleUsers_ConnectionArgs = {
  filters: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenUsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<IGenUsersPermissionsRole>;
  pageInfo: IGenPagination;
};

export type IGenUsersPermissionsRoleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenUsersPermissionsRoleFiltersInput>>>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  description: InputMaybe<IGenStringFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  name: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenUsersPermissionsRoleFiltersInput>>>;
  permissions: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  type: InputMaybe<IGenStringFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
  users: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
};

export type IGenUsersPermissionsRoleInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  permissions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
  users: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IGenUsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<IGenUsersPermissionsRole>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type IGenUsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data: Maybe<IGenUsersPermissionsUser>;
};

export type IGenUsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<IGenUsersPermissionsUser>;
  pageInfo: IGenPagination;
};

export type IGenUsersPermissionsUserFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenUsersPermissionsUserFiltersInput>>>;
  blocked: InputMaybe<IGenBooleanFilterInput>;
  confirmed: InputMaybe<IGenBooleanFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  email: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenUsersPermissionsUserFiltersInput>>>;
  provider: InputMaybe<IGenStringFilterInput>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  role: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
  username: InputMaybe<IGenStringFilterInput>;
};

export type IGenUsersPermissionsUserInput = {
  blocked: InputMaybe<Scalars['Boolean']['input']>;
  confirmed: InputMaybe<Scalars['Boolean']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  role: InputMaybe<Scalars['ID']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};

export type IGenUsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<IGenUsersPermissionsUser>;
};

export type IGenF_All_Services_SectionFragment = { __typename?: 'ComponentMoleculesAllServicesSection', id: string, itemsCallToAction: string, title: string | null, subtitle: string | null, paginationDetailsText: string };

export type IGenF_CardFragment = { __typename?: 'ComponentMoleculesCard', id: string, title: string | null, subtitle: string | null, variant: IGenEnum_Componentmoleculescard_Variant | null, media: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null };

export type IGenF_Cards_SwiperFragment = { __typename?: 'ComponentOrganismsCardsSwiperSection', id: string, title: string | null, subtitle: string | null, maxColumns: number | null, variant: IGenEnum_Componentorganismscardsswipersection_Variant | null, items: Array<{ __typename?: 'ComponentMoleculesCard', id: string, title: string | null, subtitle: string | null, variant: IGenEnum_Componentmoleculescard_Variant | null, media: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null } | null> | null };

export type IGenF_Hero_SectionFragment = { __typename?: 'ComponentOrganismsHeroSection', id: string, slides: Array<{ __typename?: 'ComponentMoleculesHeroSlide', id: string, title: string | null, subtitle: string | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null, slideMedia: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null> | null };

export type IGenF_Hero_SlideFragment = { __typename?: 'ComponentMoleculesHeroSlide', id: string, title: string | null, subtitle: string | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null, slideMedia: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null };

export type IGenF_Page_SeoFragment = { __typename?: 'Page', seo: { __typename?: 'ComponentSeoMetaData', id: string, title: string | null, shortNavigationName: string | null, longNavigationName: string | null, description: string | null, ogTitle: string | null, ogDescription: string | null, ogImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null };

export type IGenF_Item_ServiceFragment = { __typename?: 'Service', title: string | null, subtitle: string | null, content: any | null, slug: string, category: IGenEnum_Service_Category | null, createdAt: any | null, updatedAt: any | null, publishedAt: any | null, locale: string | null, image: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null };

export type IGenF_Item_Service_TeaserFragment = { __typename?: 'Service', title: string | null, subtitle: string | null, category: IGenEnum_Service_Category | null, createdAt: any | null, slug: string, thumbnailImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null };

export type IGenF_Services_Teaser_SectionFragment = { __typename?: 'ComponentMoleculesServicesTeaser', id: string, title: string | null, subtitle: string | null, services: Array<{ __typename?: 'Service', title: string | null, subtitle: string | null, category: IGenEnum_Service_Category | null, createdAt: any | null, slug: string, thumbnailImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null>, ViewAllButton: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null };

export type IGenF_Text_MediaFragment = { __typename?: 'ComponentMoleculesTextMediaSection', id: string, title: string | null, subtitle: string | null, content: any | null, image: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null };

export type IGenF_Announcement_BarFragment = { __typename?: 'AnnouncementBar', text: any | null };

export type IGenF_ButtonFragment = { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null };

export type IGenF_MediaFragment = { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null };

export type IGenF_PageFragment = { __typename?: 'Page', title: string, slug: string, seo: { __typename?: 'ComponentSeoMetaData', description: string | null, id: string, longNavigationName: string | null, ogDescription: string | null, ogTitle: string | null, shortNavigationName: string | null, title: string | null, ogImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null, sections: Array<
    | { __typename?: 'ComponentMoleculesAllServicesSection', id: string, itemsCallToAction: string, title: string | null, subtitle: string | null, paginationDetailsText: string }
    | { __typename?: 'ComponentMoleculesServicesTeaser', id: string, title: string | null, subtitle: string | null, services: Array<{ __typename?: 'Service', title: string | null, subtitle: string | null, category: IGenEnum_Service_Category | null, createdAt: any | null, slug: string, thumbnailImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null>, ViewAllButton: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null }
    | { __typename?: 'ComponentMoleculesTextMediaSection', id: string, title: string | null, subtitle: string | null, content: any | null, image: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null }
    | { __typename?: 'ComponentOrganismsCardsSwiperSection', id: string, title: string | null, subtitle: string | null, maxColumns: number | null, variant: IGenEnum_Componentorganismscardsswipersection_Variant | null, items: Array<{ __typename?: 'ComponentMoleculesCard', id: string, title: string | null, subtitle: string | null, variant: IGenEnum_Componentmoleculescard_Variant | null, media: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null } | null> | null }
    | { __typename?: 'ComponentOrganismsHeroSection', id: string, slides: Array<{ __typename?: 'ComponentMoleculesHeroSlide', id: string, title: string | null, subtitle: string | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null, slideMedia: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null> | null }
    | { __typename?: 'Error' }
   | null> | null };

export type IGenF_Pagination_Connection_Page_InfoFragment = { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number };

export type IGenF_SeoFragment = { __typename?: 'ComponentSeoMetaData', description: string | null, id: string, longNavigationName: string | null, ogDescription: string | null, ogTitle: string | null, shortNavigationName: string | null, title: string | null, ogImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null };

export type IGenQ_All_ServicesQueryVariables = Exact<{
  pagination: InputMaybe<IGenPaginationArg>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type IGenQ_All_ServicesQuery = { __typename?: 'Query', services_connection: { __typename?: 'ServiceEntityResponseCollection', nodes: Array<{ __typename?: 'Service', title: string | null, subtitle: string | null, category: IGenEnum_Service_Category | null, createdAt: any | null, slug: string, thumbnailImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null }>, pageInfo: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } | null };

export type IGenAnnouncementBarQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type IGenAnnouncementBarQuery = { __typename?: 'Query', announcementBar: { __typename?: 'AnnouncementBar', text: any | null } | null };

export type IGenQ_FooterQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type IGenQ_FooterQuery = { __typename?: 'Query', footer: { __typename?: 'Footer', logo: string | null, title: string | null, content: any | null } | null };

export type IGenQ_HeaderQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type IGenQ_HeaderQuery = { __typename?: 'Query', header: { __typename?: 'Header', logo: string | null, items: Array<{ __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null> | null, primaryAction: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null } | null };

export type IGenQ_LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenQ_LocalesQuery = { __typename?: 'Query', i18NLocales: Array<{ __typename?: 'I18NLocale', name: string | null, code: string | null } | null> };

export type IGenQ_Page_By_SlugQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  filters: InputMaybe<IGenPageFiltersInput>;
}>;


export type IGenQ_Page_By_SlugQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', title: string, slug: string, seo: { __typename?: 'ComponentSeoMetaData', description: string | null, id: string, longNavigationName: string | null, ogDescription: string | null, ogTitle: string | null, shortNavigationName: string | null, title: string | null, ogImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null, sections: Array<
      | { __typename?: 'ComponentMoleculesAllServicesSection', id: string, itemsCallToAction: string, title: string | null, subtitle: string | null, paginationDetailsText: string }
      | { __typename?: 'ComponentMoleculesServicesTeaser', id: string, title: string | null, subtitle: string | null, services: Array<{ __typename?: 'Service', title: string | null, subtitle: string | null, category: IGenEnum_Service_Category | null, createdAt: any | null, slug: string, thumbnailImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null>, ViewAllButton: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null }
      | { __typename?: 'ComponentMoleculesTextMediaSection', id: string, title: string | null, subtitle: string | null, content: any | null, image: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null }
      | { __typename?: 'ComponentOrganismsCardsSwiperSection', id: string, title: string | null, subtitle: string | null, maxColumns: number | null, variant: IGenEnum_Componentorganismscardsswipersection_Variant | null, items: Array<{ __typename?: 'ComponentMoleculesCard', id: string, title: string | null, subtitle: string | null, variant: IGenEnum_Componentmoleculescard_Variant | null, media: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null } | null> | null }
      | { __typename?: 'ComponentOrganismsHeroSection', id: string, slides: Array<{ __typename?: 'ComponentMoleculesHeroSlide', id: string, title: string | null, subtitle: string | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null, slideMedia: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null> | null }
      | { __typename?: 'Error' }
     | null> | null } | null> };

export type IGenQ_Page_Seo_By_SlugQueryVariables = Exact<{
  filters: InputMaybe<IGenPageFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type IGenQ_Page_Seo_By_SlugQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', seo: { __typename?: 'ComponentSeoMetaData', id: string, title: string | null, shortNavigationName: string | null, longNavigationName: string | null, description: string | null, ogTitle: string | null, ogDescription: string | null, ogImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null } | null> };

export type IGenQ_Service_By_SlugQueryVariables = Exact<{
  filters: InputMaybe<IGenServiceFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type IGenQ_Service_By_SlugQuery = { __typename?: 'Query', services: Array<{ __typename?: 'Service', title: string | null, subtitle: string | null, slug: string } | null> };

export const F_MediaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]} as unknown as DocumentNode<IGenF_MediaFragment, unknown>;
export const F_Page_SeoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_page_seo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortNavigationName"}},{"kind":"Field","name":{"kind":"Name","value":"longNavigationName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogTitle"}},{"kind":"Field","name":{"kind":"Name","value":"ogDescription"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]} as unknown as DocumentNode<IGenF_Page_SeoFragment, unknown>;
export const F_Item_ServiceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_item_service"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]} as unknown as DocumentNode<IGenF_Item_ServiceFragment, unknown>;
export const F_Announcement_BarFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_announcement_bar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnnouncementBar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<IGenF_Announcement_BarFragment, unknown>;
export const F_SeoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_seo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSeoMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"longNavigationName"}},{"kind":"Field","name":{"kind":"Name","value":"ogDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogTitle"}},{"kind":"Field","name":{"kind":"Name","value":"shortNavigationName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]} as unknown as DocumentNode<IGenF_SeoFragment, unknown>;
export const F_ButtonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentAtomsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ariaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]} as unknown as DocumentNode<IGenF_ButtonFragment, unknown>;
export const F_Hero_SlideFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_hero_slide"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesHeroSlide"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slideMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentAtomsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ariaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenF_Hero_SlideFragment, unknown>;
export const F_Hero_SectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_hero_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentOrganismsHeroSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_hero_slide"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentAtomsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ariaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_hero_slide"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesHeroSlide"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slideMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenF_Hero_SectionFragment, unknown>;
export const F_CardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_card"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentAtomsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ariaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenF_CardFragment, unknown>;
export const F_Cards_SwiperFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_cards_swiper"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentOrganismsCardsSwiperSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_card"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"maxColumns"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentAtomsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ariaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_card"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<IGenF_Cards_SwiperFragment, unknown>;
export const F_Text_MediaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_text_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesTextMediaSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentAtomsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ariaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenF_Text_MediaFragment, unknown>;
export const F_Item_Service_TeaserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_item_service_teaser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]} as unknown as DocumentNode<IGenF_Item_Service_TeaserFragment, unknown>;
export const F_Services_Teaser_SectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_services_teaser_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesServicesTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_item_service_teaser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ViewAllButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_item_service_teaser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentAtomsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ariaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenF_Services_Teaser_SectionFragment, unknown>;
export const F_All_Services_SectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_all_services_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesAllServicesSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"itemsCallToAction"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDetailsText"}}]}}]} as unknown as DocumentNode<IGenF_All_Services_SectionFragment, unknown>;
export const F_PageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_seo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_hero_section"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_cards_swiper"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_text_media"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_services_teaser_section"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_all_services_section"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentAtomsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ariaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_hero_slide"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesHeroSlide"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slideMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_card"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_item_service_teaser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_seo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSeoMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"longNavigationName"}},{"kind":"Field","name":{"kind":"Name","value":"ogDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogTitle"}},{"kind":"Field","name":{"kind":"Name","value":"shortNavigationName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_hero_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentOrganismsHeroSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_hero_slide"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_cards_swiper"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentOrganismsCardsSwiperSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_card"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"maxColumns"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_text_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesTextMediaSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_services_teaser_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesServicesTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_item_service_teaser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ViewAllButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_all_services_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesAllServicesSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"itemsCallToAction"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDetailsText"}}]}}]} as unknown as DocumentNode<IGenF_PageFragment, unknown>;
export const F_Pagination_Connection_Page_InfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_pagination_connection_page_info"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageCount"}}]}}]} as unknown as DocumentNode<IGenF_Pagination_Connection_Page_InfoFragment, unknown>;
export const Q_All_ServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q_all_services"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArg"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services_connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_item_service_teaser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_pagination_connection_page_info"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_item_service_teaser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_pagination_connection_page_info"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageCount"}}]}}]} as unknown as DocumentNode<IGenQ_All_ServicesQuery, IGenQ_All_ServicesQueryVariables>;
export const AnnouncementBarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AnnouncementBar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"announcementBar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_announcement_bar"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_announcement_bar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnnouncementBar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>;
export const Q_FooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q_footer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>;
export const Q_HeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q_header"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentAtomsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ariaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>;
export const Q_LocalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q_locales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"i18NLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>;
export const Q_Page_By_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q_page_by_slug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PageFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_page"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_seo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSeoMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"longNavigationName"}},{"kind":"Field","name":{"kind":"Name","value":"ogDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogTitle"}},{"kind":"Field","name":{"kind":"Name","value":"shortNavigationName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentAtomsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isNewTab"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"ariaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_hero_slide"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesHeroSlide"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slideMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_hero_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentOrganismsHeroSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_hero_slide"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_card"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_cards_swiper"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentOrganismsCardsSwiperSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_card"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"maxColumns"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_text_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesTextMediaSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_item_service_teaser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_services_teaser_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesServicesTeaser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_item_service_teaser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ViewAllButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_all_services_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMoleculesAllServicesSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"itemsCallToAction"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDetailsText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_seo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_hero_section"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_cards_swiper"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_text_media"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_services_teaser_section"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_all_services_section"}}]}}]}}]} as unknown as DocumentNode<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>;
export const Q_Page_Seo_By_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q_page_seo_by_slug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PageFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_page_seo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_page_seo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortNavigationName"}},{"kind":"Field","name":{"kind":"Name","value":"longNavigationName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogTitle"}},{"kind":"Field","name":{"kind":"Name","value":"ogDescription"}}]}}]}}]} as unknown as DocumentNode<IGenQ_Page_Seo_By_SlugQuery, IGenQ_Page_Seo_By_SlugQueryVariables>;
export const Q_Service_By_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q_service_by_slug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<IGenQ_Service_By_SlugQuery, IGenQ_Service_By_SlugQueryVariables>;