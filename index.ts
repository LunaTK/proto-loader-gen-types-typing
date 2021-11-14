import { ProtoGrpcType } from './proto/rpc'
import * as grpc from '@grpc/grpc-js'

type ProtoLoaderGrpcMethod<Req, Res> = {
  (argument: Req, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: Res) => void): grpc.ClientUnaryCall;
  (argument: Req, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: Res) => void): grpc.ClientUnaryCall;
  (argument: Req, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: Res) => void): grpc.ClientUnaryCall;
  (argument: Req, callback: (error?: grpc.ServiceError, result?: Res) => void): grpc.ClientUnaryCall;
}

type GrpcJsGrpcMethod<Req, Res> = {
  (argument: Req, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<Res>): grpc.ClientUnaryCall;
  (argument: Req, metadata: grpc.Metadata, callback: grpc.requestCallback<Res>): grpc.ClientUnaryCall;
  (argument: Req, options: grpc.CallOptions, callback: grpc.requestCallback<Res>): grpc.ClientUnaryCall;
  (argument: Req, callback: grpc.requestCallback<Res>): grpc.ClientUnaryCall;
}

type MyMethodType = InstanceType<ProtoGrpcType['MyService']>['MyMethod']

// evaluated as true
type IsProtoLoaderMethod = MyMethodType extends ProtoLoaderGrpcMethod<infer Req, infer Res> ? true : never

// evaluated as never, but I expect it to be true
type IsGrpcJsMethod = MyMethodType extends GrpcJsGrpcMethod<infer Req, infer Res> ? true : never