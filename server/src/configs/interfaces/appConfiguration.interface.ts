import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { WinstonModuleOptions } from "nest-winston";
import { DataSourceOptions } from "typeorm";

export default interface AppConfiguration {
  serverConfiguration: {
    host: string;
    port: number;
    cookieSecret: string;
    swaggerEnabled: boolean;
    encoderSecret: string;
    https: boolean;
  };
  loggerConfiguration: WinstonModuleOptions;
  dbConfiguration: TypeOrmModuleOptions | DataSourceOptions;
  jwtConfiguration: {
    secret: string;
    accessTokenExpiresIn: string;
    refreshTokenExpiresIn: string;
  };
  authConfiguration: {
    google: {
      clientID: string;
      clientSecret: string;
      callbackURL: string;
    };
  };
}
