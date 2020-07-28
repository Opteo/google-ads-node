var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_common_offline_user_data_pb=require("../../../../../google/ads/googleads/v4/common/offline_user_data_pb.js");goog.object.extend(proto,google_ads_googleads_v4_common_offline_user_data_pb);var google_ads_googleads_v4_enums_offline_user_data_job_failure_reason_pb=require("../../../../../google/ads/googleads/v4/enums/offline_user_data_job_failure_reason_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_offline_user_data_job_failure_reason_pb);var google_ads_googleads_v4_enums_offline_user_data_job_status_pb=require("../../../../../google/ads/googleads/v4/enums/offline_user_data_job_status_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_offline_user_data_job_status_pb);var google_ads_googleads_v4_enums_offline_user_data_job_type_pb=require("../../../../../google/ads/googleads/v4/enums/offline_user_data_job_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_offline_user_data_job_type_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.OfflineUserDataJob",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.resources.OfflineUserDataJob.MetadataCase",null,global),proto.google.ads.googleads.v4.resources.OfflineUserDataJob=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.resources.OfflineUserDataJob.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.resources.OfflineUserDataJob,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.OfflineUserDataJob.displayName="proto.google.ads.googleads.v4.resources.OfflineUserDataJob"),proto.google.ads.googleads.v4.resources.OfflineUserDataJob.oneofGroups_=[[7,8]],proto.google.ads.googleads.v4.resources.OfflineUserDataJob.MetadataCase={METADATA_NOT_SET:0,CUSTOMER_MATCH_USER_LIST_METADATA:7,STORE_SALES_METADATA:8},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.getMetadataCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.resources.OfflineUserDataJob.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.OfflineUserDataJob.toObject(e,this)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.toObject=function(e,o){var s,a={resourceName:jspb.Message.getFieldWithDefault(o,1,""),id:(s=o.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,s),externalId:(s=o.getExternalId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,s),type:jspb.Message.getFieldWithDefault(o,4,0),status:jspb.Message.getFieldWithDefault(o,5,0),failureReason:jspb.Message.getFieldWithDefault(o,6,0),customerMatchUserListMetadata:(s=o.getCustomerMatchUserListMetadata())&&google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata.toObject(e,s),storeSalesMetadata:(s=o.getStoreSalesMetadata())&&google_ads_googleads_v4_common_offline_user_data_pb.StoreSalesMetadata.toObject(e,s)};return e&&(a.$jspbMessageInstance=o),a}),proto.google.ads.googleads.v4.resources.OfflineUserDataJob.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.resources.OfflineUserDataJob;return proto.google.ads.googleads.v4.resources.OfflineUserDataJob.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;case 2:s=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(s,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setId(s);break;case 3:s=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(s,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setExternalId(s);break;case 4:s=o.readEnum();e.setType(s);break;case 5:s=o.readEnum();e.setStatus(s);break;case 6:s=o.readEnum();e.setFailureReason(s);break;case 7:s=new google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata;o.readMessage(s,google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata.deserializeBinaryFromReader),e.setCustomerMatchUserListMetadata(s);break;case 8:s=new google_ads_googleads_v4_common_offline_user_data_pb.StoreSalesMetadata;o.readMessage(s,google_ads_googleads_v4_common_offline_user_data_pb.StoreSalesMetadata.deserializeBinaryFromReader),e.setStoreSalesMetadata(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.OfflineUserDataJob.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s),null!=(s=e.getId())&&o.writeMessage(2,s,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(s=e.getExternalId())&&o.writeMessage(3,s,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(s=e.getType())&&o.writeEnum(4,s),0!==(s=e.getStatus())&&o.writeEnum(5,s),0!==(s=e.getFailureReason())&&o.writeEnum(6,s),null!=(s=e.getCustomerMatchUserListMetadata())&&o.writeMessage(7,s,google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata.serializeBinaryToWriter),null!=(s=e.getStoreSalesMetadata())&&o.writeMessage(8,s,google_ads_googleads_v4_common_offline_user_data_pb.StoreSalesMetadata.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.setId=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.getExternalId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.setExternalId=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.clearExternalId=function(){return this.setExternalId(void 0)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.hasExternalId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,4,0)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.setType=function(e){return jspb.Message.setProto3EnumField(this,4,e)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.setStatus=function(e){return jspb.Message.setProto3EnumField(this,5,e)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.getFailureReason=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.setFailureReason=function(e){return jspb.Message.setProto3EnumField(this,6,e)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.getCustomerMatchUserListMetadata=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata,7)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.setCustomerMatchUserListMetadata=function(e){return jspb.Message.setOneofWrapperField(this,7,proto.google.ads.googleads.v4.resources.OfflineUserDataJob.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.clearCustomerMatchUserListMetadata=function(){return this.setCustomerMatchUserListMetadata(void 0)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.hasCustomerMatchUserListMetadata=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.getStoreSalesMetadata=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_offline_user_data_pb.StoreSalesMetadata,8)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.setStoreSalesMetadata=function(e){return jspb.Message.setOneofWrapperField(this,8,proto.google.ads.googleads.v4.resources.OfflineUserDataJob.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.clearStoreSalesMetadata=function(){return this.setStoreSalesMetadata(void 0)},proto.google.ads.googleads.v4.resources.OfflineUserDataJob.prototype.hasStoreSalesMetadata=function(){return null!=jspb.Message.getField(this,8)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);