var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.ReachPlanError",null,global),proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.displayName="proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum;return proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.ReachPlanErrorEnum.ReachPlanError={UNSPECIFIED:0,UNKNOWN:1},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);