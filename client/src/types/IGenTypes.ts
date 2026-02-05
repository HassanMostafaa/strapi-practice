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
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
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

export type IGenGenericMorph = IGenAnnouncementBar | IGenComponentAtomsButton | IGenComponentSeoMetaData | IGenI18NLocale | IGenPage | IGenReviewWorkflowsWorkflow | IGenReviewWorkflowsWorkflowStage | IGenUploadFile | IGenUsersPermissionsPermission | IGenUsersPermissionsRole | IGenUsersPermissionsUser;

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


export type IGenMutationDeleteAnnouncementBarArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IGenMutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
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
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdatePageArgs = {
  data: IGenPageInput;
  documentId: Scalars['ID']['input'];
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
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  seo: Maybe<IGenComponentSeoMetaData>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
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
  seo: InputMaybe<IGenComponentSeoMetaDataInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
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
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPagesArgs = {
  filters: InputMaybe<IGenPageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPages_ConnectionArgs = {
  filters: InputMaybe<IGenPageFiltersInput>;
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

export type IGenQ_Announcement_BarQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenQ_Announcement_BarQuery = { __typename?: 'Query', announcementBar: { __typename?: 'AnnouncementBar', text: any | null } | null };

export type IGenQ_LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenQ_LocalesQuery = { __typename?: 'Query', i18NLocales: Array<{ __typename?: 'I18NLocale', name: string | null, code: string | null } | null> };


export const Q_Announcement_BarDocument = gql`
    query q_announcement_bar {
  announcementBar {
    text
  }
}
    `;

/**
 * __useQ_Announcement_BarQuery__
 *
 * To run a query within a React component, call `useQ_Announcement_BarQuery` and pass it any options that fit your needs.
 * When your component renders, `useQ_Announcement_BarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQ_Announcement_BarQuery({
 *   variables: {
 *   },
 * });
 */
export function useQ_Announcement_BarQuery(baseOptions?: Apollo.QueryHookOptions<IGenQ_Announcement_BarQuery, IGenQ_Announcement_BarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGenQ_Announcement_BarQuery, IGenQ_Announcement_BarQueryVariables>(Q_Announcement_BarDocument, options);
      }
export function useQ_Announcement_BarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGenQ_Announcement_BarQuery, IGenQ_Announcement_BarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGenQ_Announcement_BarQuery, IGenQ_Announcement_BarQueryVariables>(Q_Announcement_BarDocument, options);
        }
// @ts-ignore
export function useQ_Announcement_BarSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IGenQ_Announcement_BarQuery, IGenQ_Announcement_BarQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_Announcement_BarQuery, IGenQ_Announcement_BarQueryVariables>;
export function useQ_Announcement_BarSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_Announcement_BarQuery, IGenQ_Announcement_BarQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_Announcement_BarQuery | undefined, IGenQ_Announcement_BarQueryVariables>;
export function useQ_Announcement_BarSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_Announcement_BarQuery, IGenQ_Announcement_BarQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IGenQ_Announcement_BarQuery, IGenQ_Announcement_BarQueryVariables>(Q_Announcement_BarDocument, options);
        }
export type Q_Announcement_BarQueryHookResult = ReturnType<typeof useQ_Announcement_BarQuery>;
export type Q_Announcement_BarLazyQueryHookResult = ReturnType<typeof useQ_Announcement_BarLazyQuery>;
export type Q_Announcement_BarSuspenseQueryHookResult = ReturnType<typeof useQ_Announcement_BarSuspenseQuery>;
export type Q_Announcement_BarQueryResult = Apollo.QueryResult<IGenQ_Announcement_BarQuery, IGenQ_Announcement_BarQueryVariables>;
export const Q_LocalesDocument = gql`
    query q_locales {
  i18NLocales {
    name
    code
  }
}
    `;

/**
 * __useQ_LocalesQuery__
 *
 * To run a query within a React component, call `useQ_LocalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQ_LocalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQ_LocalesQuery({
 *   variables: {
 *   },
 * });
 */
export function useQ_LocalesQuery(baseOptions?: Apollo.QueryHookOptions<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>(Q_LocalesDocument, options);
      }
export function useQ_LocalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>(Q_LocalesDocument, options);
        }
// @ts-ignore
export function useQ_LocalesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>;
export function useQ_LocalesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_LocalesQuery | undefined, IGenQ_LocalesQueryVariables>;
export function useQ_LocalesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>(Q_LocalesDocument, options);
        }
export type Q_LocalesQueryHookResult = ReturnType<typeof useQ_LocalesQuery>;
export type Q_LocalesLazyQueryHookResult = ReturnType<typeof useQ_LocalesLazyQuery>;
export type Q_LocalesSuspenseQueryHookResult = ReturnType<typeof useQ_LocalesSuspenseQuery>;
export type Q_LocalesQueryResult = Apollo.QueryResult<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>;