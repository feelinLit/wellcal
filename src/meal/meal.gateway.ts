import {
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway, WebSocketServer
} from "@nestjs/websockets";
import { CreateMealDto } from './dto/create-meal.dto';
import { MealRO } from './dto/meal.response';
import { MealService } from './meal.service';
import { MealItemService } from './mealItem.service';
import { CreateMealItemDto } from './dto/create-mealItem.dto';
import { MealItemRO } from './dto/mealItem.response';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class MealGateway implements OnGatewayConnection {
  constructor(
    private readonly mealService: MealService,
    private readonly mealItemService: MealItemService,
  ) {}

  @WebSocketServer() server: Server;

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
    client.join(client.id);
  }

  @SubscribeMessage('addMeal')
  async handleAddMealMessage(
    @MessageBody('userId') userId: string,
    @MessageBody('clientId') clientId: string,
  ): Promise<void> {
    console.log(clientId);
    const createMealDto = new CreateMealDto();
    createMealDto.userId = userId;
    const meal = await this.mealService.create(createMealDto);
    this.server.to(clientId).emit('addMeal', meal);
  }

  @SubscribeMessage('addMealItem')
  async handleAddMealItemMessage(
    @MessageBody('mealItem') createMealItemDto: CreateMealItemDto,
    @MessageBody('clientId') clientId: string,
  ): Promise<void> {
    console.log(createMealItemDto);
    const mealItem = await this.mealItemService.create(createMealItemDto);
    this.server.to(clientId).emit('addMealItem', mealItem);
  }
}
