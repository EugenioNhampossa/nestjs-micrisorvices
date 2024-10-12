import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-orders.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async create(dto: CreateOrderDto) {
    return this.ordersRepository.create(dto);
  }

  async findAll() {
    return this.ordersRepository.find({});
  }
}
