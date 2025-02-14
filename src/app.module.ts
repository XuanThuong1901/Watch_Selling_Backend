import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './modules/products/category/category.module';
import { CategoryEntity } from './modules/products/category/category.entity';
import { DiscountEntity } from './modules/products/discount/discount.entity';
import { ProductEntity } from './modules/products/product/entities/product.entity';
import { OrderEntity } from './modules/orders/order/order.entity';
import { CartEntity } from './modules/orders/cart/cart.entity';
import { UserEntity } from './modules/users/user/user.entity';
import { AccountEntity } from './modules/users/account/account.entity';
import { EmployeeEntity } from './modules/users/employee/employee.entity';
import { PositionEntity } from './modules/users/position/position.entity';
import { CartDetailEntity } from './modules/orders/cart/cart-detail.entity';
import { ImageEntity } from './modules/products/image/image.entity';
import { ShippingEntity } from './modules/orders/shipping/shipping.entity';
import { PaymentEntity } from './modules/orders/payment/payment.entity';
import { OrderDetailEntity } from './modules/orders/order/order-detail.entity';

import { ImageModule } from './modules/products/image/image.module';

import { OrderModule } from './modules/orders/order/order.module';

import { EmployeeModule } from './modules/users/employee/employee.module';
// import { PositionModule } from './modules/users/position/position.module';
// import { AccountModule } from './modules/users/account/account.module';
// import * as redisStore from 'cache-manager-redis-store';
// import { CacheModule } from '@nestjs/cache-manager';
// import { StoreModule } from './modules/apis/store/store.module';
// import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/authentication/auth.module';
import { StripeModule } from './modules/orders/stripe/stripe.module';
// import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'DESKTOP-HAE7JHJ',
      port: 1433,
      username: 'sa',
      password: '123',
      database: 'TTTN_DongHoOnline',
      synchronize: false, // false,
      options: {
        trustServerCertificate: true, // Allow self-signed certificates
      },
      entities: [
        CategoryEntity,
        DiscountEntity,
        ProductEntity,
        ImageEntity,
        CartEntity,
        CartDetailEntity,
        OrderEntity,
        OrderDetailEntity,
        ShippingEntity,
        PaymentEntity,
        UserEntity,
        AccountEntity,
        EmployeeEntity,
        PositionEntity,
      ],
    }),

    //
    // DiscountModule,
    // ProductModule,
    // ImageModule,
    // // StoreModule,

    // // CartModule,
    // // CartDetailModule,
    // OrderModule,
    // // OrderDetailModule,
    //ShippingModule,
    // PaymentModule,

    // UserModule,
    // EmployeeModule,
    // // //PositionModule,
    // AccountModule,

    AuthModule,
    EmployeeModule,
    CategoryModule,
    // ProductModule,
    ImageModule,
    StripeModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
