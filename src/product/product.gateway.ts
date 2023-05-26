import {
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class ProductGateway implements OnGatewayConnection {
  constructor(private readonly productService: ProductService) {}

  @WebSocketServer() server: Server;

  handleConnection(client: Socket, ...args: any[]) {
    console.log(
      `ProductGateway: Client connected: ${client.handshake.query.userId}`,
    );
    client.join(client.handshake.query.userId);
  }

  @SubscribeMessage('addProduct')
  async handleAddProductMessage(
    @MessageBody('userId') userId: string,
    @MessageBody('product') createProductDto: CreateProductDto,
  ): Promise<void> {
    console.log(createProductDto);
    console.log(userId);
    const product = await this.productService.create(createProductDto);
    this.server.to(userId).emit('addProduct', product);
  }

  @SubscribeMessage('deleteProduct')
  async handleDeleteProductMessage(
    @MessageBody('userId') userId: string,
    @MessageBody('productId') productId: number,
  ): Promise<void> {
    const isProductDeleted = await this.productService.remove(productId);
    this.server.to(userId).emit('deleteProduct', {
      isDeleted: isProductDeleted,
      productId: productId,
    });
  }
}
