const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefs = protoLoader.loadSync('./tasks.proto');

const taskProto = grpc.loadPackageDefinition(packageDefs);

const gRpcServer = new grpc.Server();

gRpcServer.bind(
  '127.0.0.1:9000',
  grpc.ServerCredentials.createInsecure()
);
gRpcServer.start();
