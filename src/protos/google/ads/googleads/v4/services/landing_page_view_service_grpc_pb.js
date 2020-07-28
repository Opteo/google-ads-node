"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_landing_page_view_service_pb=require("../../../../../google/ads/googleads/v4/services/landing_page_view_service_pb.js"),google_ads_googleads_v4_resources_landing_page_view_pb=require("../../../../../google/ads/googleads/v4/resources/landing_page_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_LandingPageView(e){if(!(e instanceof google_ads_googleads_v4_resources_landing_page_view_pb.LandingPageView))throw new Error("Expected argument of type google.ads.googleads.v4.resources.LandingPageView");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_LandingPageView(e){return google_ads_googleads_v4_resources_landing_page_view_pb.LandingPageView.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetLandingPageViewRequest(e){if(!(e instanceof google_ads_googleads_v4_services_landing_page_view_service_pb.GetLandingPageViewRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetLandingPageViewRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetLandingPageViewRequest(e){return google_ads_googleads_v4_services_landing_page_view_service_pb.GetLandingPageViewRequest.deserializeBinary(new Uint8Array(e))}var LandingPageViewServiceService=exports.LandingPageViewServiceService={getLandingPageView:{path:"/google.ads.googleads.v4.services.LandingPageViewService/GetLandingPageView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_landing_page_view_service_pb.GetLandingPageViewRequest,responseType:google_ads_googleads_v4_resources_landing_page_view_pb.LandingPageView,requestSerialize:serialize_google_ads_googleads_v4_services_GetLandingPageViewRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetLandingPageViewRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_LandingPageView,responseDeserialize:deserialize_google_ads_googleads_v4_resources_LandingPageView}};exports.LandingPageViewServiceClient=grpc.makeGenericClientConstructor(LandingPageViewServiceService);