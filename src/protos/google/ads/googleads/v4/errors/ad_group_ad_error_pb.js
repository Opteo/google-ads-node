var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.AdGroupAdError",null,global),proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.displayName="proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum;return proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.AdGroupAdErrorEnum.AdGroupAdError={UNSPECIFIED:0,UNKNOWN:1,AD_GROUP_AD_LABEL_DOES_NOT_EXIST:2,AD_GROUP_AD_LABEL_ALREADY_EXISTS:3,AD_NOT_UNDER_ADGROUP:4,CANNOT_OPERATE_ON_REMOVED_ADGROUPAD:5,CANNOT_CREATE_DEPRECATED_ADS:6,CANNOT_CREATE_TEXT_ADS:7,EMPTY_FIELD:8,RESOURCE_REFERENCED_IN_MULTIPLE_OPS:9,AD_TYPE_CANNOT_BE_PAUSED:10,AD_TYPE_CANNOT_BE_REMOVED:11},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);