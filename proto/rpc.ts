import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { MyServiceClient as _MyServiceClient, MyServiceDefinition as _MyServiceDefinition } from './MyService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  MyRequest: MessageTypeDefinition
  MyResponse: MessageTypeDefinition
  MyService: SubtypeConstructor<typeof grpc.Client, _MyServiceClient> & { service: _MyServiceDefinition }
}

