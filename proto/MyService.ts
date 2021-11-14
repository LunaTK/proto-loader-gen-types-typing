// Original file: proto/rpc.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MyRequest as _MyRequest, MyRequest__Output as _MyRequest__Output } from './MyRequest';
import type { MyResponse as _MyResponse, MyResponse__Output as _MyResponse__Output } from './MyResponse';

export interface MyServiceClient extends grpc.Client {
  MyMethod(argument: _MyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _MyResponse__Output) => void): grpc.ClientUnaryCall;
  MyMethod(argument: _MyRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _MyResponse__Output) => void): grpc.ClientUnaryCall;
  MyMethod(argument: _MyRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _MyResponse__Output) => void): grpc.ClientUnaryCall;
  MyMethod(argument: _MyRequest, callback: (error?: grpc.ServiceError, result?: _MyResponse__Output) => void): grpc.ClientUnaryCall;
  myMethod(argument: _MyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _MyResponse__Output) => void): grpc.ClientUnaryCall;
  myMethod(argument: _MyRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _MyResponse__Output) => void): grpc.ClientUnaryCall;
  myMethod(argument: _MyRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _MyResponse__Output) => void): grpc.ClientUnaryCall;
  myMethod(argument: _MyRequest, callback: (error?: grpc.ServiceError, result?: _MyResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface MyServiceHandlers extends grpc.UntypedServiceImplementation {
  MyMethod: grpc.handleUnaryCall<_MyRequest__Output, _MyResponse>;
  
}

export interface MyServiceDefinition extends grpc.ServiceDefinition {
  MyMethod: MethodDefinition<_MyRequest, _MyResponse, _MyRequest__Output, _MyResponse__Output>
}
