import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDTO } from './dtos/create-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {

    private readonly logger = new Logger(PlayersService.name);
    private players: Player[] = [];

    async createOrUpdatePlayer(player:CreatePlayerDTO): Promise<void> {
        await this.create(player);
    }

    private create(player:CreatePlayerDTO) {
        const {name, email, phoneNumber} = player;
        const newPlayer: Player = {
            _id: "teste",
            name,
            phoneNumber,
            email,
            playerPhotoUrl: "teste",
            ranking: "teste",
            rankingPosition: 0
        };
        this.logger.log("Player: "+JSON.stringify(newPlayer));
        this.players.push(newPlayer);
    }

}
