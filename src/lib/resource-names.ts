export enum ResourceUrlName {
  // customers/{customer_id}/keywordPlanNegativeKeywords/{kp_negative_keyword_id}`
  KeywordPlanNegativeKeyword = "keywordPlanNegativeKeywords",

  // customers/{customer_id}/merchantCenterLinks/{merchant_center_id}`
  MerchantCenterLink = "merchantCenterLinks",

  // customers/{customer_id}/campaignLabels/{campaign_id}~{label_id}`
  CampaignLabel = "campaignLabels",

  // customers/{customer_id}/labels/{label_id}`
  Label = "labels",

  // customers/{customer_id}/topicViews/{ad_group_id}~{criterion_id}`
  TopicView = "topicViews",

  // customers/{customer_id}/campaignSharedSets/{campaign_id}~{shared_set_id}`
  CampaignSharedSet = "campaignSharedSets",

  // customers/{customer_id}/feedPlaceholderViews/{placeholder_type}`
  FeedPlaceholderView = "feedPlaceholderViews",

  // customers/{customer_id}/adGroupSimulations/{ad_group_id}~{type}~{modification_method}~{start_date}~{end_date}`
  AdGroupSimulation = "adGroupSimulations",

  // customers/{customer_id}/recommendations/{recommendation_id}`
  Recommendation = "recommendations",

  // customers/{customer_id}/ageRangeViews/{ad_group_id}~{criterion_id}`
  AgeRangeView = "ageRangeViews",

  // customers/{customer_id}/customerFeeds/{feed_id}`
  CustomerFeed = "customerFeeds",

  // customers/{customer_id}/paidOrganicSearchTermViews/{campaign_id}~{ad_group_id}~{URL-base64 search term}`
  PaidOrganicSearchTermView = "paidOrganicSearchTermViews",

  // customers/{customer_id}/adGroupLabels/{ad_group_id}~{label_id}`
  AdGroupLabel = "adGroupLabels",

  // customers/{customer_id}/customerManagerLinks/{manager_customer_id}~{manager_link_id}`
  CustomerManagerLink = "customerManagerLinks",

  // customers/{customer_id}/customerNegativeCriteria/{criterion_id}`
  CustomerNegativeCriterion = "customerNegativeCriteria",

  // customers/{customer_id}/remarketingActions/{remarketing_action_id}`
  RemarketingAction = "remarketingActions",

  // customers/{customer_id}/accountBudgets/{account_budget_id}`
  AccountBudget = "accountBudgets",

  // customers/{customer_id}/searchTermViews/{campaign_id}~{ad_group_id}~{URL-base64 search term}`
  SearchTermView = "searchTermViews",

  // customers/{customer_id}/genderViews/{ad_group_id}~{criterion_id}`
  GenderView = "genderViews",

  // geoTargetConstants/{geo_target_constant_id}`
  GeoTargetConstant = "geoTargetConstants",

  // languageConstants/{criterion_id}`
  LanguageConstant = "languageConstants",

  // customers/{customer_id}/dynamicSearchAdsSearchTermViews/{ad_group_id}~{search_term_fp}~{headline_fp}~{landing_page_fp}~{page_url_fp}`
  DynamicSearchAdsSearchTermView = "dynamicSearchAdsSearchTermViews",

  // customers/{customer_id}/adGroupCriterionLabels/{ad_group_id}~{criterion_id}~{label_id}`
  AdGroupCriterionLabel = "adGroupCriterionLabels",

  // customers/{customer_id}/sharedCriteria/{shared_set_id}~{criterion_id}`
  SharedCriterion = "sharedCriteria",

  // customers/{customer_id}/campaignFeeds/{campaign_id}~{feed_id}
  CampaignFeed = "campaignFeeds",

  // customers/{customer_id}/videos/{video_id}`
  Video = "videos",

  // customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}`
  AdGroupCriterion = "adGroupCriteria",

  // customers/{customer_id}/shoppingPerformanceView`
  ShoppingPerformanceView = "shoppingPerformanceView`",

  // customers/{customer_id}/adParameters/{ad_group_id}~{criterion_id}~{parameter_index}`
  AdParameter = "adParameters",

  // customers/{customer_id}/sharedSets/{shared_set_id}`
  SharedSet = "sharedSets",

  // customers/{customer_id}/biddingStrategies/{bidding_strategy_id}`
  BiddingStrategy = "biddingStrategies",

  // customers/{customer_id}/keywordPlans/{kp_plan_id}`
  KeywordPlan = "keywordPlans",

  // customers/{customer_id}/adGroupFeeds/{ad_group_id}~{feed_id}
  AdGroupFeed = "adGroupFeeds",

  // customers/{customer_id}/campaignBudgets/{budget_id}`
  CampaignBudget = "campaignBudgets",

  // customers/{customer_id}/adGroupAdLabels/{ad_group_id}~{ad_id}~{label_id}`
  AdGroupAdLabel = "adGroupAdLabels",

  // customers/{customer_id}/extensionFeedItems/{feed_item_id}`
  ExtensionFeedItem = "extensionFeedItems",

  // mobileAppCategoryConstants/{mobile_app_category_id}`
  MobileAppCategoryConstant = "mobileAppCategoryConstants",

  // customers/{customer_id}/mediaFiles/{media_file_id}`
  MediaFile = "mediaFiles",

  // customers/{customer_id}/campaignBidModifiers/{campaign_id}~{criterion_id}`
  CampaignBidModifier = "campaignBidModifiers",

  // customers/{customer_id}/adGroupAudienceViews/{ad_group_id}~{criterion_id}`
  AdGroupAudienceView = "adGroupAudienceViews",

  // googleAdsFields/{name}`
  GoogleAdsField = "googleAdsFields",

  // topicConstants/{topic_id}`
  TopicConstant = "topicConstants",

  // customers/{customer_id}/landingPageViews/{unexpanded_final_url_fingerprint}`
  LandingPageView = "landingPageViews",

  // customers/{customer_id}/campaignAudienceViews/{campaign_id}~{criterion_id}`
  CampaignAudienceView = "campaignAudienceViews",

  // customers/{customer_id}/billingSetups/{billing_setup_id}`
  BillingSetup = "billingSetups",

  // customers/{customer_id}/feedMappings/{feed_id}~{feed_mapping_id}`
  FeedMapping = "feedMappings",

  // customers/{customer_id}/groupPlacementViews/{ad_group_id}~{base64_placement}`
  GroupPlacementView = "groupPlacementViews",

  // customers/{customer_id}/geographicViews/{country_criterion_id}~{location_type}`
  GeographicView = "geographicViews",

  // customers/{customer_id}/displayKeywordViews/{ad_group_id}~{criterion_id}`
  DisplayKeywordView = "displayKeywordViews",

  // customers/{customer_id}/assets/{asset_id}`
  Asset = "assets",

  // customers/{customer_id}/campaignCriterionSimulations/{campaign_id}~{criterion_id}~{type}~{modification_method}~{start_date}~{end_date}`
  CampaignCriterionSimulation = "campaignCriterionSimulations",

  // operatingSystemVersionConstants/{criterion_id}`
  OperatingSystemVersionConstant = "operatingSystemVersionConstants",

  // customers/{customer_id}/adGroupCriterionSimulations/{ad_group_id}~{criterion_id}~{type}~{modification_method}~{start_date}~{end_date}`
  AdGroupCriterionSimulation = "adGroupCriterionSimulations",

  // customers/{customer_id}/conversionActions/{conversion_action_id}`
  ConversionAction = "conversionActions",

  // customers/{customer_id}/customInterests/{custom_interest_id}`
  CustomInterest = "customInterests",

  // customers/{customer_id}/managedPlacementViews/{ad_group_id}~{criterion_id}`
  ManagedPlacementView = "managedPlacementViews",

  // customers/{customer_id}/feeds/{feed_id}`
  Feed = "feeds",

  // customers/{customer_id}/customerExtensionSettings/{extension_type}`
  CustomerExtensionSetting = "customerExtensionSettings",

  // customers/{customer_id}/accountBudgetProposals/{account_budget_proposal_id}`
  AccountBudgetProposal = "accountBudgetProposals",

  // customers/{customer_id}/parentalStatusViews/{ad_group_id}~{criterion_id}`
  ParentalStatusView = "parentalStatusViews",

  // customers/{customer_id}/locationViews/{campaign_id}~{criterion_id}`
  LocationView = "locationViews",

  // customers/{customer_id}/mutateJobs/{mutate_job_id}`
  MutateJob = "mutateJobs",

  // customers/{customer_id}/productGroupViews/{ad_group_id}~{criterion_id}`
  ProductGroupView = "productGroupViews",

  // mobileDeviceConstants/{criterion_id}`
  MobileDeviceConstant = "mobileDeviceConstants",

  // customers/{customer_id}/customerClientLinks/{client_customer_id}~{manager_link_id}`
  CustomerClientLink = "customerClientLinks",

  // customers/{customer_id}/adScheduleViews/{campaign_id}~{criterion_id}`
  AdScheduleView = "adScheduleViews",

  // customers/{customer_id}/clickViews/{date (yyyy-MM-dd)}~{gclid}`
  ClickView = "clickViews",

  // customers/{customer_id}/domainCategories/{campaign_id}~{category_base64}~{language_code}`
  DomainCategory = "domainCategories",

  // customers/{customer_id}/keywordPlanCampaigns/{kp_campaign_id}`
  KeywordPlanCampaign = "keywordPlanCampaigns",

  // customers/{customer_id}/paymentsAccounts/{payments_account_id}`
  PaymentsAccount = "paymentsAccounts",

  // customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}`
  CampaignCriterion = "campaignCriteria",

  // customers/{customer_id}/userLists/{user_list_id}`
  UserList = "userLists",

  // customers/{customer_id}`
  Customer = "customers",

  // carrierConstants/{criterion_id}`
  CarrierConstant = "carrierConstants",

  // customers/{customer_id}/adGroupExtensionSettings/{ad_group_id}~{extension_type}`
  AdGroupExtensionSetting = "adGroupExtensionSettings",

  // customers/{customer_id}/customerClients/{client_customer_id}`
  CustomerClient = "customerClients",

  // customers/{customer_id}/detailPlacementViews/{ad_group_id}~{base64_placement}`
  DetailPlacementView = "detailPlacementViews",

  // customers/{customer_id}/keywordPlanAdGroups/{kp_ad_group_id}`
  KeywordPlanAdGroup = "keywordPlanAdGroups",

  // productBiddingCategoryConstants/{country_code}~{level}~{id}`
  ProductBiddingCategoryConstant = "productBiddingCategoryConstants",

  // customers/{customer_id}/customerLabels/{label_id}`
  CustomerLabel = "customerLabels",

  // customers/{customer_id}/changeStatus/{change_status_id}`
  ChangeStatus = "changeStatus",

  // customers/{customer_id}/keywordViews/{ad_group_id}~{criterion_id}`
  KeywordView = "keywordViews",

  // customers/{customer_id}/campaignExtensionSettings/{campaign_id}~{extension_type}`
  CampaignExtensionSetting = "campaignExtensionSettings",

  // customers/{customer_id}/expandedLandingPageViews/{expanded_final_url_fingerprint}`
  ExpandedLandingPageView = "expandedLandingPageViews",

  // customers/{customer_id}/userInterests/{user_interest_id}`
  UserInterest = "userInterests",

  // customers/{customer_id}/feedItems/{feed_id}~{feed_item_id}`
  FeedItem = "feedItems",

  // customers/{customer_id}/adGroups/{ad_group_id}`
  AdGroup = "adGroups",

  // customers/{customer_id}/keywordPlanKeywords/{kp_ad_group_keyword_id}`
  KeywordPlanKeyword = "keywordPlanKeywords",

  // customers/{customer_id}/feedItemTargets/{feed_id}~{feed_item_id}~{feed_item_target_type}~{feed_item_target_id}`
  FeedItemTarget = "feedItemTargets",

  // customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}`
  AdGroupAd = "adGroupAds",

  // customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}`
  AdGroupBidModifier = "adGroupBidModifiers",

  // customers/{customer_id}/hotelGroupViews/{ad_group_id}~{criterion_id}`
  HotelGroupView = "hotelGroupViews",

  // customers/{customer_id}/hotelPerformanceView`
  HotelPerformanceView = "hotelPerformanceView`",

  // customers/{customer_id}/campaigns/{campaign_id}`
  Campaign = "campaigns",
}
