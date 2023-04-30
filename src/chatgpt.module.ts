import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ChatGPTService } from './chatgpt.service';
import { ChatGPTController } from './chatgpt.controller';

@Module({
  imports: [HttpModule],
  providers: [ChatGPTService],
  controllers: [ChatGPTController],
  exports: [ChatGPTService],
})
export class ChatGPTModule {}
