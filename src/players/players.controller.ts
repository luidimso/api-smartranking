import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDTO } from './dtos/create-player.dto';

@Controller('api/v1/players')
export class PlayersController {

    @Post()
    async createOrUpdatePlayer(@Body() player:CreatePlayerDTO) {
        return JSON.stringify({
            "name": player.name
        })
    }
}
