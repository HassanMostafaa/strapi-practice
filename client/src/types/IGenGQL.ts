import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  HomePageSectionsDynamicZoneInput: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PageBlocksDynamicZoneInput: { input: any; output: any; }
};

export type IGenAnnouncementBar = {
  __typename?: 'AnnouncementBar';
  content: Scalars['JSON']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type IGenAnnouncementBarInput = {
  content: InputMaybe<Scalars['JSON']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
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

export type IGenComponentBlocksFeatureItems = {
  __typename?: 'ComponentBlocksFeatureItems';
  id: Scalars['ID']['output'];
  items: Maybe<Array<Maybe<IGenComponentItemsFeatureItem>>>;
};


export type IGenComponentBlocksFeatureItemsItemsArgs = {
  filters: InputMaybe<IGenComponentItemsFeatureItemFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentBlocksHero = {
  __typename?: 'ComponentBlocksHero';
  content: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<IGenUploadFile>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type IGenComponentItemsFeatureItem = {
  __typename?: 'ComponentItemsFeatureItem';
  id: Scalars['ID']['output'];
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type IGenComponentItemsFeatureItemFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentItemsFeatureItemFiltersInput>>>;
  not: InputMaybe<IGenComponentItemsFeatureItemFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentItemsFeatureItemFiltersInput>>>;
  subtitle: InputMaybe<IGenStringFilterInput>;
  title: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentMetadataPageMeta = {
  __typename?: 'ComponentMetadataPageMeta';
  canonical: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  og_image: Maybe<IGenUploadFile>;
  title: Scalars['String']['output'];
};

export type IGenComponentMetadataPageMetaFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentMetadataPageMetaFiltersInput>>>;
  canonical: InputMaybe<IGenStringFilterInput>;
  description: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenComponentMetadataPageMetaFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentMetadataPageMetaFiltersInput>>>;
  title: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentMetadataPageMetaInput = {
  canonical: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  og_image: InputMaybe<Scalars['ID']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenComponentTestCategoryTest = {
  __typename?: 'ComponentTestCategoryTest';
  id: Scalars['ID']['output'];
  title: Maybe<Scalars['String']['output']>;
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

export type IGenGenericMorph = IGenAnnouncementBar | IGenComponentBlocksFeatureItems | IGenComponentBlocksHero | IGenComponentItemsFeatureItem | IGenComponentMetadataPageMeta | IGenComponentTestCategoryTest | IGenHomePage | IGenI18NLocale | IGenPage | IGenReviewWorkflowsWorkflow | IGenReviewWorkflowsWorkflowStage | IGenUploadFile | IGenUsersPermissionsPermission | IGenUsersPermissionsRole | IGenUsersPermissionsUser;

export type IGenHomePage = {
  __typename?: 'HomePage';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  sections: Maybe<Array<Maybe<IGenHomePageSectionsDynamicZone>>>;
  title: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type IGenHomePageInput = {
  description: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  sections: InputMaybe<Array<Scalars['HomePageSectionsDynamicZoneInput']['input']>>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenHomePageSectionsDynamicZone = IGenComponentBlocksFeatureItems | IGenComponentBlocksHero | IGenError;

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
  /** Create a new role */
  createUsersPermissionsRole: Maybe<IGenUsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
  deleteAnnouncementBar: Maybe<IGenDeleteMutationResponse>;
  deleteHomePage: Maybe<IGenDeleteMutationResponse>;
  deletePage: Maybe<IGenDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow: Maybe<IGenDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage: Maybe<IGenDeleteMutationResponse>;
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
  updateHomePage: Maybe<IGenHomePage>;
  updatePage: Maybe<IGenPage>;
  updateReviewWorkflowsWorkflow: Maybe<IGenReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage: Maybe<IGenReviewWorkflowsWorkflowStage>;
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


export type IGenMutationCreateUsersPermissionsRoleArgs = {
  data: IGenUsersPermissionsRoleInput;
};


export type IGenMutationCreateUsersPermissionsUserArgs = {
  data: IGenUsersPermissionsUserInput;
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
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateHomePageArgs = {
  data: IGenHomePageInput;
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
  blocks: Maybe<Array<Maybe<IGenPageBlocksDynamicZone>>>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<IGenPage>>;
  localizations_connection: Maybe<IGenPageRelationResponseCollection>;
  metadata: Maybe<IGenComponentMetadataPageMeta>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
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

export type IGenPageBlocksDynamicZone = IGenComponentBlocksFeatureItems | IGenComponentBlocksHero | IGenError;

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
  metadata: InputMaybe<IGenComponentMetadataPageMetaFiltersInput>;
  not: InputMaybe<IGenPageFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenPageFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  slug: InputMaybe<IGenStringFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenPageInput = {
  blocks: InputMaybe<Array<Scalars['PageBlocksDynamicZoneInput']['input']>>;
  metadata: InputMaybe<IGenComponentMetadataPageMetaInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type IGenPageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  nodes: Array<IGenPage>;
};

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
  homePage: Maybe<IGenHomePage>;
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
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryHomePageArgs = {
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

export type IGenAnnouncementBarQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenAnnouncementBarQuery = { __typename?: 'Query', announcementBar: { __typename?: 'AnnouncementBar', content: any } | null };


export const AnnouncementBarDocument = gql`
    query announcementBar {
  announcementBar {
    content
  }
}
    `;

/**
 * __useAnnouncementBarQuery__
 *
 * To run a query within a React component, call `useAnnouncementBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnnouncementBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnnouncementBarQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnnouncementBarQuery(baseOptions?: Apollo.QueryHookOptions<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>(AnnouncementBarDocument, options);
      }
export function useAnnouncementBarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>(AnnouncementBarDocument, options);
        }
// @ts-ignore
export function useAnnouncementBarSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>): Apollo.UseSuspenseQueryResult<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>;
export function useAnnouncementBarSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>): Apollo.UseSuspenseQueryResult<IGenAnnouncementBarQuery | undefined, IGenAnnouncementBarQueryVariables>;
export function useAnnouncementBarSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>(AnnouncementBarDocument, options);
        }
export type AnnouncementBarQueryHookResult = ReturnType<typeof useAnnouncementBarQuery>;
export type AnnouncementBarLazyQueryHookResult = ReturnType<typeof useAnnouncementBarLazyQuery>;
export type AnnouncementBarSuspenseQueryHookResult = ReturnType<typeof useAnnouncementBarSuspenseQuery>;
export type AnnouncementBarQueryResult = Apollo.QueryResult<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>;