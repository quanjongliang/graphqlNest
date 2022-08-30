import { RepositoryModule } from '@/repository/';
import { AuthService, JwtStrategy, LocalStrategy } from './service';
import { Module } from '@nestjs/common';
import { AuthController, HideAuthController } from './controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from '@/core';
import { MailerModule } from '@/mailer';
import { AuthResolver } from './resolver';

@Module({
  imports: [
    RepositoryModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_CONFIG.SECRET,
      signOptions: { expiresIn: JWT_CONFIG.EXPIRES_IN },
    }),
    MailerModule,
  ],
  controllers: [AuthController, HideAuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver],
  exports: [AuthService],
})
export class AuthModule {}
